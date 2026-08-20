import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, Sparkles, Calendar } from 'lucide-react';
import { CALENDLY_URL } from '../data/config';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-950/70 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={onClose}
            aria-label="Close modal background"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#FAF9F5] rounded-2xl overflow-hidden shadow-2xl z-20 border border-neutral-200 flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-white border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8C4BFF]/10 flex items-center justify-center text-[#8C4BFF]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-tight text-neutral-900 text-sm">
                    Book a Motion Strategy Call
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-mono">
                    15-min product & video strategy call with Aeymotion
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#8C4BFF] hover:text-white transition-all flex items-center justify-center text-neutral-600 focus:outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body / Calendly iFrame */}
            <div className="relative flex-1 bg-white min-h-[580px] overflow-hidden">
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#FAF9F5] text-neutral-500 gap-3">
                  <Loader2 className="w-7 h-7 text-[#8C4BFF] animate-spin" />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    Loading Calendly scheduler...
                  </span>
                </div>
              )}

              <iframe
                src={`${CALENDLY_URL}?embed_domain=aeymotion.com&embed_type=Inline&background_color=faf9f5&text_color=171717&primary_color=8c4bff`}
                width="100%"
                height="620"
                frameBorder="0"
                title="Select a Date & Time"
                onLoad={() => setIframeLoaded(true)}
                className="w-full h-full min-h-[580px] relative z-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
