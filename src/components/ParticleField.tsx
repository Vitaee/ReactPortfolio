import { useEffect, useRef, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function getNodeCount(w: number): number {
  if (w < 640) return 35;
  if (w < 1024) return 50;
  return 70;
}

const CONNECTION_DISTANCE = 180;
const MOUSE_RADIUS = 220;
const MOUSE_FORCE = 0.018;
const BASE_SPEED = 0.25;
const ACCENT = { r: 34, g: 197, b: 94 };

function createNode(w: number, h: number): Node {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * BASE_SPEED * 2,
    vy: (Math.random() - 0.5) * BASE_SPEED * 2,
    radius: Math.random() * 1 + 1.8, // 1.8–2.8px
  };
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef(0);

  const init = useCallback((w: number, h: number) => {
    const count = getNodeCount(w);
    nodesRef.current = Array.from({ length: count }, () => createNode(w, h));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();
    if (nodesRef.current.length === 0) init(window.innerWidth, window.innerHeight);

    if (prefersReduced) {
      draw(ctx, window.innerWidth, window.innerHeight, nodesRef.current, null);
      const onResize = () => { setSize(); draw(ctx, window.innerWidth, window.innerHeight, nodesRef.current, null); };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouseRef.current = null; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (const n of nodes) {
        // Mouse attraction
        if (mouse) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 1) {
            n.vx += (dx / dist) * MOUSE_FORCE;
            n.vy += (dy / dist) * MOUSE_FORCE;
          }
        }

        // Smooth damping
        n.vx *= 0.996;
        n.vy *= 0.996;

        // Minimum drift
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed < 0.1) {
          const a = Math.atan2(n.vy, n.vx) || Math.random() * Math.PI * 2;
          n.vx = Math.cos(a) * 0.1;
          n.vy = Math.sin(a) * 0.1;
        }

        n.x += n.vx;
        n.y += n.vy;

        // Wrap
        if (n.x < -30) n.x = w + 30;
        if (n.x > w + 30) n.x = -30;
        if (n.y < -30) n.y = h + 30;
        if (n.y > h + 30) n.y = -30;
      }

      draw(ctx, w, h, nodes, mouse);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      setSize();
      const target = getNodeCount(window.innerWidth);
      if (Math.abs(nodesRef.current.length - target) > 10) {
        init(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

function draw(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  nodes: Node[],
  mouse: { x: number; y: number } | null,
) {
  ctx.clearRect(0, 0, w, h);
  const { r, g, b } = ACCENT;

  // --- Connection lines (the network) ---
  ctx.lineCap = 'round';
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < CONNECTION_DISTANCE) {
        const t = 1 - dist / CONNECTION_DISTANCE;
        // Smooth fade — visible network, graceful cutoff at max distance
        const alpha = t * 0.45;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = t * 0.8 + 0.4; // 0.4–1.2px, thicker when closer
        ctx.stroke();
      }
    }
  }

  // --- Mouse connection web ---
  if (mouse) {
    for (const n of nodes) {
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS) {
        const t = 1 - dist / MOUSE_RADIUS;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${t * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  // --- Nodes with soft glow ---
  for (const n of nodes) {
    let nr = n.radius;
    let glow = 6;

    // Cursor proximity boost
    if (mouse) {
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS) {
        const p = 1 - dist / MOUSE_RADIUS;
        nr += p * 1.5;
        glow += p * 10;
      }
    }

    // Outer glow (green tint)
    ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
    ctx.shadowBlur = glow;
    ctx.beginPath();
    ctx.arc(n.x, n.y, nr, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
  }

  ctx.shadowBlur = 0;
}
