import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypeWriter({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  pauseTime = 2000 
}: TypeWriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        const currentWord = words[wordIndex];
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? pauseTime : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, isWaiting, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-blue-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}