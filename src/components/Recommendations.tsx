import { UserCheck, Mail, FileCheck } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Recommendations() {
  return (
    <section className="py-20" id="recommendations">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                05 / Verified Social Proof &amp; Endorsements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Academic &amp; Executive References
            </h2>
            <p className="text-sm text-zinc-400 font-normal">
              Validated references from premier European research faculties.
            </p>
          </div>

          <div className="surface-card rounded-2xl p-6 sm:p-8 border-l-2 border-emerald-500/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Prof. Philip Treleaven
                  </h3>
                  <p className="text-sm text-zinc-300 font-normal">
                    Professor of Computing, University College London (UCL)
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Director of the Financial Computing Centre, UCL
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <a
                  href="mailto:canilguu@gmail.com?subject=Request%20for%20UCL%20Recommendation%20Letter"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all cursor-pointer"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Request Official Letter</span>
                </a>
                <a
                  href="mailto:p.treleaven@ucl.ac.uk"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Contact UCL Faculty</span>
                </a>
              </div>
            </div>

            {/* Quote / Endorsement Highlight */}
            <div className="pt-6">
              <blockquote className="text-sm text-zinc-300 italic font-normal leading-relaxed border-l-2 border-white/[0.1] pl-4 mb-3">
                "Can demonstrates exceptional technical maturity, architectural aptitude, and disciplined systems problem-solving across distributed software engineering."
              </blockquote>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Verified Academic Recommendation • University College London</span>
                <span className="text-emerald-400 font-medium">Available on Request</span>
              </div>
            </div>

          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}
