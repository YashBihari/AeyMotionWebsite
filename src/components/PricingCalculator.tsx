import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Link, Check } from 'lucide-react';

interface VideoState {
  id: string;
  duration: number; // in seconds
  formats: string[]; // ['f16_9', 'f9_16', etc.]
  hooks: string[]; // ['Problem', 'Dream_Outcome', etc.]
}

const FORMAT_OPTIONS = [
  { id: 'f16_9', label: '16:9', detail: '(default)', res: '1920×1080', isDefault: true },
  { id: 'f9_16', label: '9:16', detail: '', res: '1080×1920', isDefault: false },
  { id: 'f1_1', label: '1:1', detail: '', res: '1080×1080', isDefault: false },
  { id: 'f4_5', label: '4:5', detail: '', res: '1080×1350', isDefault: false },
  { id: 'f_custom', label: 'Custom', detail: 'resolution', res: '', isDefault: false },
];

const HOOK_OPTIONS = [
  { id: 'Problem', label: 'Problem' },
  { id: 'Dream Outcome', label: 'Dream Outcome' },
  { id: 'Persona callout', label: 'Persona callout' },
  { id: 'Social proof', label: 'Social proof' },
  { id: 'Custom', label: 'Custom' },
];

const TIMELINE_OPTIONS = [
  { id: 'standard', name: 'Standard', feeLabel: 'no fee', feeMultiplier: 0, speedMultiplier: 1.0 },
  { id: 'x1_25', name: '×1.25', feeLabel: '+25%', feeMultiplier: 0.25, speedMultiplier: 1.25 },
  { id: 'x1_5', name: '×1.5', feeLabel: '+50%', feeMultiplier: 0.50, speedMultiplier: 1.50 },
  { id: 'x2', name: '×2', feeLabel: '+100%', feeMultiplier: 1.00, speedMultiplier: 2.00 },
  { id: 'x3', name: '×3', feeLabel: '+150%', feeMultiplier: 1.50, speedMultiplier: 3.00 },
  { id: 'x4', name: '×4', feeLabel: '+200%', feeMultiplier: 2.00, speedMultiplier: 4.00 },
];

export default function PricingCalculator() {
  const [mode, setMode] = useState<'motion' | 'founder'>('motion');
  const [rate, setRate] = useState<number>(25);
  const [videos, setVideos] = useState<VideoState[]>([
    { id: 'v1', duration: 60, formats: ['f16_9'], hooks: [] }
  ]);
  const [timelineId, setTimelineId] = useState<string>('standard');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync mode default rates on change
  useEffect(() => {
    if (mode === 'motion') {
      setRate(25);
    } else {
      setRate(15);
    }
  }, [mode]);

  // Read URL query parameters on mount to restore shared quote
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlMode = params.get('mode');
      const urlRate = params.get('rate');
      const urlTimeline = params.get('timeline');
      const urlVideos = params.get('v');

      if (urlMode === 'motion' || urlMode === 'founder') {
        setMode(urlMode);
      }
      if (urlRate) {
        setRate(Number(urlRate));
      }
      if (urlTimeline) {
        setTimelineId(urlTimeline);
      }
      if (urlVideos) {
        const decodedVideos: VideoState[] = urlVideos.split(',').map((videoStr, index) => {
          const [durStr, formatsStr, hooksStr] = videoStr.split('_');
          
          const activeFormats: string[] = ['f16_9'];
          if (formatsStr) {
            formatsStr.split('-').forEach(idx => {
              const opt = FORMAT_OPTIONS[Number(idx)];
              if (opt && !activeFormats.includes(opt.id)) {
                activeFormats.push(opt.id);
              }
            });
          }

          const activeHooks: string[] = [];
          if (hooksStr) {
            hooksStr.split('-').forEach(idx => {
              const opt = HOOK_OPTIONS[Number(idx)];
              if (opt) {
                activeHooks.push(opt.id);
              }
            });
          }

          return {
            id: `v_${Date.now()}_${index}`,
            duration: Number(durStr) || 60,
            formats: activeFormats,
            hooks: activeHooks
          };
        });

        if (decodedVideos.length > 0) {
          setVideos(decodedVideos);
        }
      }
    } catch (e) {
      console.warn('Failed to parse sharing URL query parameters:', e);
    }
  }, []);

  const rateMin = mode === 'motion' ? 50 : 30;
  const rateMax = mode === 'motion' ? 200 : 120;

  const calculateVideoCost = (video: VideoState) => {
    const base = video.duration * rate;
    const extraFormatsCount = video.formats.filter(f => f !== 'f16_9').length;
    const formatsCost = extraFormatsCount * 10 * video.duration;
    const hooksCount = video.hooks.length;
    const hooksCost = hooksCount * rate * 5;

    return {
      base,
      formatsCost,
      hooksCost,
      total: base + formatsCost + hooksCost
    };
  };

  const calculateVideoProductionDays = (vid: VideoState) => {
    return Math.round((vid.duration / 5) * 2);
  };

  const totalStandardDays = Math.round((videos.reduce((sum, v) => sum + v.duration, 0) / 5) * 2);

  const videoCostsBreakdown = videos.map(vid => {
    const costs = calculateVideoCost(vid);
    const days = calculateVideoProductionDays(vid);
    return {
      vid,
      costs,
      days
    };
  });

  const subtotalCost = videoCostsBreakdown.reduce((sum, v) => sum + v.costs.total, 0);

  const selectedTimeline = TIMELINE_OPTIONS.find(t => t.id === timelineId) || TIMELINE_OPTIONS[0];
  const rushFee = subtotalCost * selectedTimeline.feeMultiplier;
  const totalProjectPrice = subtotalCost + rushFee;

  const deliveryDays = Math.ceil(totalStandardDays / selectedTimeline.speedMultiplier);

  const handleAddVideo = () => {
    setVideos([
      ...videos,
      {
        id: `v_${Date.now()}`,
        duration: 60,
        formats: ['f16_9'],
        hooks: []
      }
    ]);
  };

  const handleRemoveVideo = (id: string) => {
    if (videos.length > 1) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  const handleUpdateDuration = (id: string, val: number) => {
    setVideos(videos.map(v => v.id === id ? { ...v, duration: val } : v));
  };

  const handleToggleFormat = (id: string, formatId: string) => {
    if (formatId === 'f16_9') return;

    setVideos(videos.map(v => {
      if (v.id === id) {
        const alreadyChecked = v.formats.includes(formatId);
        const nextFormats = alreadyChecked
          ? v.formats.filter(f => f !== formatId)
          : [...v.formats, formatId];
        return { ...v, formats: nextFormats };
      }
      return v;
    }));
  };

  const handleToggleHook = (id: string, hookId: string) => {
    setVideos(videos.map(v => {
      if (v.id === id) {
        const alreadyChecked = v.hooks.includes(hookId);
        const nextHooks = alreadyChecked
          ? v.hooks.filter(h => h !== hookId)
          : [...v.hooks, hookId];
        return { ...v, hooks: nextHooks };
      }
      return v;
    }));
  };

  const handleCopyEstimateLink = () => {
    try {
      const vEncoded = videos.map(v => {
        const formatsIndices = v.formats
          .filter(f => f !== 'f16_9')
          .map(f => FORMAT_OPTIONS.findIndex(opt => opt.id === f))
          .filter(idx => idx !== -1)
          .join('-');
        
        const hooksIndices = v.hooks
          .map(h => HOOK_OPTIONS.findIndex(opt => opt.id === h))
          .filter(idx => idx !== -1)
          .join('-');

        return `${v.duration}_${formatsIndices}_${hooksIndices}`;
      }).join(',');

      const baseUrl = window.location.origin + window.location.pathname;
      const shareUrl = `${baseUrl}?mode=${mode}&rate=${rate}&timeline=${timelineId}&v=${vEncoded}#pricing-calculator`;

      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      alert('Could not copy link.');
    }
  };

  return (
    <div id="pricing-calculator" className="relative mt-24 py-20 px-6 md:px-12 rounded-[40px] bg-[#141414] text-white overflow-hidden shadow-2xl isolate">
      {/* Background glow shadow mimicking WhyUs */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#E0B3CF]/5 blur-[150px] pointer-events-none -z-10" />

      {/* Default Border that matches WhyUs.tsx */}
      <span className="absolute inset-0 rounded-[40px] border border-white/5 pointer-events-none" />

      {/* Gradient border mask overlay matching sunset theme from WhyUs */}
      <span className="absolute inset-0 rounded-[40px] p-[1.5px] bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] opacity-100 pointer-events-none -z-10">
        <span className="block w-full h-full bg-[#141414] rounded-[38.5px]" />
      </span>

      {/* Apple-like soft backglow */}
      <span className="absolute inset-4 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-[0.05] blur-[100px] rounded-[40px] pointer-events-none -z-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Upper Title */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-widest text-[#F4B179] uppercase mb-3">
            Interactive Cost Planner
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 font-sans leading-tight">
            Design your project scope. <br />
            <span className="text-[#AAA] italic bg-clip-text bg-gradient-to-r from-[#F4B179] via-[#E0B3CF] to-[#8A2EFF]">Secure instantaneous clarity.</span>
          </h3>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto font-light leading-relaxed">
            Our rate-based algorithm is 100% transparent. Tweak the timeline, format adaptions, and hooks to find your optimal path.
          </p>
        </div>

        {/* Dynamic State Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT AREA: Configuration Panel (7 columns) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Mode Switcher */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 block">
                Production Trajectory
              </label>
              <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 gap-1.5">
                <button
                  type="button"
                  id="btn-trajectory-motion"
                  onClick={() => setMode('motion')}
                  className={`py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    mode === 'motion'
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Motion-Led
                </button>
                <button
                  type="button"
                  id="btn-trajectory-founder"
                  onClick={() => setMode('founder')}
                  className={`py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    mode === 'founder'
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Founder-Led
                </button>
              </div>
            </div>

            {/* Graphics Rate Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400">
                  Estimated Graphics Rate
                </span>
                <span className="text-2xl font-black font-sans text-white tracking-tight">
                  ${rate}/s <span className="text-xs font-normal text-neutral-500">rate</span>
                </span>
              </div>
              
              <div className="grid grid-cols-3 p-1 rounded-2xl bg-white/5 border border-white/10 gap-1.5 mt-2">
                {[15, 25, 40].map((stepValue) => (
                  <button
                    key={stepValue}
                    type="button"
                    onClick={() => setRate(stepValue)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                      rate === stepValue
                        ? 'bg-white text-black shadow-md'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    ${stepValue}/s
                  </button>
                ))}
              </div>

              {/* Unique Bullet Descriptions */}
              <ul className="space-y-2 text-xs font-light text-neutral-400 pt-1 border-t border-white/5 leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="text-white/20 font-bold">—</span>
                  <span>
                    {mode === 'motion' 
                      ? 'Motion graphics rate is our only core pricing variable.' 
                      : 'B-roll editing and customized speech synthesis post-processing.'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/20 font-bold">—</span>
                  <span>Adjusted systematically based on creative storytelling complexity.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/20 font-bold">—</span>
                  <span>First collaborations often require higher setup; recurring clients secure volume benefits.</span>
                </li>
              </ul>
            </div>

            {/* Videos Array Section */}
            <div className="space-y-6 pt-4 border-t border-white/5">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Videos ({videos.length})
                </h4>
                <button
                  type="button"
                  onClick={handleAddVideo}
                  id="btn-add-video"
                  className="flex items-center gap-1.5 py-2 px-3.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Video</span>
                </button>
              </div>

              {/* Dynamic list of videos with standard layout cards */}
              <div className="space-y-6">
                <AnimatePresence initial={false}>
                  {videos.map((video, idx) => {
                    const videoCostTuple = calculateVideoCost(video);

                    return (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, height: 0, y: 15 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="relative p-6 md:p-8 rounded-[24px] bg-white/[0.03] border border-white/5 space-y-6 overflow-hidden"
                      >
                        {/* Video Header / Delete tool */}
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-neutral-500">
                            Video {idx + 1}
                          </span>
                          {videos.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveVideo(video.id)}
                              id={`btn-remove-video-${idx}`}
                              className="p-1 px-2 rounded-lg text-neutral-400 hover:text-red-450 hover:bg-white/5 text-xs font-semibold flex items-center gap-1 transition-all pointer-events-auto"
                              title="Delete this video block"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          )}
                        </div>

                        {/* Video Duration Slider */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-xl md:text-2xl font-black text-white tracking-tight">
                              {video.duration}s <span className="text-xs font-medium text-neutral-400 font-sans">final duration (${rate}/s)</span>
                            </span>
                          </div>
                          <div className="relative py-2">
                            <input
                              type="range"
                              min={20}
                              max={120}
                              step={5}
                              value={video.duration}
                              onChange={(e) => handleUpdateDuration(video.id, Number(e.target.value))}
                              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8A2EFF] [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#8A2EFF] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#8A2EFF] [&::-moz-range-thumb]:cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-neutral-500 mt-2 font-mono">
                              <span>20s</span>
                              <span>120s</span>
                            </div>
                          </div>
                        </div>

                        {/* Format Adaptations Section */}
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold tracking-[0.15em] text-neutral-400 block">
                            Format Adaptations ($10/s each)
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                            {FORMAT_OPTIONS.map((opt) => {
                              const isChecked = video.formats.includes(opt.id);
                              return (
                                <button
                                  type="button"
                                  id={`btn-format-${idx}-${opt.id}`}
                                  key={opt.id}
                                  onClick={() => handleToggleFormat(video.id, opt.id)}
                                  className={`p-3 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between h-[72px] cursor-pointer ${
                                    isChecked
                                      ? 'bg-white border-white text-black shadow-md'
                                      : 'bg-transparent border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                                  }`}
                                >
                                  <div className="flex items-center justify-between w-full font-bold">
                                    <span className="text-[11px] font-bold tracking-tight">
                                      {opt.label}
                                    </span>
                                    {isChecked && (
                                      <Check className={`w-3.5 h-3.5 ${isChecked ? 'text-[#8A2EFF]' : 'text-neutral-400'}`} />
                                    )}
                                  </div>
                                  <div className={`text-[9px] ${isChecked ? 'text-neutral-600 font-medium' : 'text-neutral-500'} leading-tight`}>
                                    {opt.res || opt.detail}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          <p className="text-[10px] text-neutral-500 italic mt-1 font-light">
                            Same video, resized for alternate platform requirements. LinkedIn, Instagram, TikTok, X.
                          </p>
                        </div>

                        {/* Hook Variations Section */}
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold tracking-[0.15em] text-neutral-400 block">
                            Hook Variations (${rate}/s × 5s each)
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                            {HOOK_OPTIONS.map((opt) => {
                              const isChecked = video.hooks.includes(opt.id);
                              return (
                                <button
                                  type="button"
                                  id={`btn-hook-${idx}-${opt.id.replace(/\s+/g, '_')}`}
                                  key={opt.id}
                                  onClick={() => handleToggleHook(video.id, opt.id)}
                                  className={`p-3 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between h-[64px] cursor-pointer ${
                                    isChecked
                                      ? 'bg-white border-white text-black shadow-md'
                                      : 'bg-transparent border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                                  }`}
                                >
                                  <div className="flex justify-between items-center w-full">
                                    <span className="text-[10px] font-bold truncate pr-1">
                                      {opt.label}
                                    </span>
                                    {isChecked && (
                                      <Check className="w-3.5 h-3.5 text-[#8A2EFF]" />
                                    )}
                                  </div>
                                  <span className={`text-[9px] ${isChecked ? 'text-neutral-600 font-medium' : 'text-neutral-500'} font-mono`}>
                                    +${rate * 5}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          <p className="text-[10px] text-neutral-500 italic mt-1 font-light">
                            Alternative promotional intro hooks for the same base video. Double paid acquisition loops.
                          </p>
                        </div>

                        {/* Video Card Breakdown line */}
                        <div className="flex justify-between items-center pt-4 border-t border-white/5 text-xs text-neutral-400">
                          <span className="font-mono">{video.duration}s × ${rate}/s</span>
                          <span className="text-sm font-bold text-white">${videoCostTuple.total.toLocaleString()}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Delivery Timeline Card Switcher */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="text-[10px] uppercase font-bold tracking-[0.15em] text-neutral-500 block">
                Delivery Timeline Target
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {TIMELINE_OPTIONS.map((opt) => {
                  const isSelected = timelineId === opt.id;
                  const factorDays = Math.ceil(totalStandardDays / opt.speedMultiplier);

                  return (
                    <button
                      type="button"
                      id={`btn-timeline-${opt.id}`}
                      key={opt.id}
                      onClick={() => setTimelineId(opt.id)}
                      className={`p-3.5 rounded-xl border flex flex-col items-center text-center justify-between gap-1 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-[#8A2EFF] bg-[#8A2EFF]/10 text-[#8A2EFF] shadow-md shadow-[#8A2EFF]/5'
                          : 'border-white/10 bg-transparent text-neutral-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="text-[12px] font-bold leading-tight">
                        {opt.name}
                      </div>
                      <div className={`text-[9px] ${isSelected ? 'text-[#8A2EFF]' : 'text-neutral-500'} font-semibold uppercase tracking-wider`}>
                        {opt.feeLabel}
                      </div>
                      <div className={`text-xs font-mono font-bold pt-1 border-t w-full mt-1 ${isSelected ? 'border-[#8A2EFF]/25' : 'border-white/10'}`}>
                        {factorDays} days
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT AREA: Quote Summary Box (5 columns) */}
          <div className="lg:col-span-5 h-full space-y-6 lg:sticky lg:top-[90px]">
            
            {/* Quick Result Panels */}
            <div className="grid grid-cols-2 gap-4">
              {/* Total Estimate Panel */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#808080] block mb-1">
                  Total Estimate
                </span>
                <span className="text-2xl md:text-3xl font-black font-sans text-white tracking-tight">
                  ${totalProjectPrice.toLocaleString()}
                </span>
                <span className="text-[10px] text-[#E0B3CF] block mt-1">
                  {selectedTimeline.feeMultiplier > 0 
                    ? `+$${rushFee.toLocaleString()} rush premium` 
                    : 'No speed overrides'}
                </span>
              </div>

              {/* Delivery Speed Panel */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 font-sans">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#808080] block mb-1">
                  Production Delivery
                </span>
                <span className="text-2xl md:text-3xl font-bold italic tracking-tight text-[#F4B179] block">
                  {deliveryDays} days
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">
                  {selectedTimeline.name === 'Standard' ? 'Standard sequence' : `${selectedTimeline.name} speed speedway`}
                </span>
              </div>
            </div>

            {/* Full Dynamic Itemized Bill invoice */}
            <div className="rounded-3xl bg-white/[0.03] border border-white/5 p-6 space-y-6 shadow-sm">
              <span className="text-[10px] uppercase font-black tracking-[0.25em] text-neutral-500 block mb-2">
                Itemized Estimate Breakdown
              </span>

              {/* Map itemized values per video */}
              <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {videoCostsBreakdown.map(({ vid, costs, days }, index) => (
                  <div key={vid.id} className="space-y-2 border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-baseline font-bold text-xs text-neutral-200">
                      <span>Video {index + 1} ({vid.duration}s)</span>
                      <span className="font-mono text-white">${costs.total.toLocaleString()}</span>
                    </div>

                    {/* Main Cut detail */}
                    <div className="flex justify-between text-[11px] text-neutral-400 pl-2">
                      <span>Main cut — {vid.duration}s × ${rate}/s</span>
                      <span className="font-mono font-medium">${costs.base.toLocaleString()}</span>
                    </div>

                    {/* Format list adaptive details */}
                    {vid.formats.filter(f => f !== 'f16_9').map(formatId => {
                      const fOpt = FORMAT_OPTIONS.find(f => f.id === formatId);
                      return (
                        <div key={formatId} className="flex justify-between text-[11px] text-neutral-400 pl-2 italic">
                          <span>↳ Adaptation ({fOpt?.label}) — {vid.duration}s × $10/s</span>
                          <span className="font-mono font-medium">${(10 * vid.duration).toLocaleString()}</span>
                        </div>
                      );
                    })}

                    {/* Hooks details */}
                    {vid.hooks.map(hId => (
                      <div key={hId} className="flex justify-between text-[11px] text-neutral-400 pl-2 italic">
                        <span>↳ Hook ({hId}) — 5s × ${rate}/s</span>
                        <span className="font-mono font-medium">${(5 * rate).toLocaleString()}</span>
                      </div>
                    ))}

                    {/* Video internal timeline days label */}
                    <div className="text-[10px] text-neutral-500 pl-2 block font-light">
                      {days} business days base build ({Math.round(vid.duration / 5)} production sprints)
                    </div>
                  </div>
                ))}
              </div>

              {/* Global summary rows */}
              <div className="border-t border-white/10 pt-4 space-y-3">
                
                {/* Graphics Subtotal */}
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Graphics Subtotal</span>
                  <span className="font-mono text-neutral-200 font-bold">${subtotalCost.toLocaleString()}</span>
                </div>

                {/* Speed Rush factor line */}
                {selectedTimeline.feeMultiplier > 0 && (
                  <div className="flex justify-between text-xs text-[#E0B3CF]">
                    <span>Rush surcharge ({selectedTimeline.name})</span>
                    <span className="font-mono font-bold">+${rushFee.toLocaleString()}</span>
                  </div>
                )}

                {/* Final calculated output */}
                <div className="flex justify-between items-center text-sm font-bold text-neutral-200 pt-2 border-t border-white/10">
                  <span>Total project estimate</span>
                  <span className="text-lg font-black text-white font-mono">${totalProjectPrice.toLocaleString()}</span>
                </div>

                {/* Timeline estimation */}
                <div className="flex justify-between items-center text-xs text-neutral-400">
                  <span>Estimated timeline</span>
                  <span className="font-bold text-neutral-200">{deliveryDays} business days</span>
                </div>

              </div>

              {/* Copy links & alerts */}
              <div className="pt-2">
                <button
                  type="button"
                  id="btn-copy-estimate-link"
                  onClick={handleCopyEstimateLink}
                  className="w-full py-4 rounded-xl bg-white text-black hover:opacity-90 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <Link className="w-3.5 h-3.5 text-[#8A2EFF]" />
                  <span>{copied ? 'Estimate Link Copied!' : 'Copy Estimate Link'}</span>
                </button>
                <span className="text-[9px] text-neutral-500 text-center block mt-3 leading-snug">
                  Share this unique pricing matrix link directly with stakeholders. It preserves the exact configurations.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
