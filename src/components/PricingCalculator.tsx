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
];

const ALLOWED_DURATIONS = [30, 45, 60, 90, 120];

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

          const rawDur = Number(durStr) || 60;
          const snappedDur = ALLOWED_DURATIONS.reduce((prev, curr) => 
            Math.abs(curr - rawDur) < Math.abs(prev - rawDur) ? curr : prev
          , 60);

          return {
            id: `v_${Date.now()}_${index}`,
            duration: snappedDur,
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
    const hooksCost = hooksCount * 25;

    return {
      base,
      formatsCost,
      hooksCost,
      total: base + formatsCost + hooksCost
    };
  };

  const getBaseDaysForDuration = (dur: number): number => {
    if (dur <= 30) return 7;
    if (dur <= 45) return 7;
    if (dur <= 60) return 10;
    if (dur <= 90) return 10;
    return 14;
  };

  const calculateVideoProductionDays = (vid: VideoState) => {
    return getBaseDaysForDuration(vid.duration);
  };

  const totalStandardDays = videos.reduce((sum, v) => sum + getBaseDaysForDuration(v.duration), 0);

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
    <div id="pricing-calculator" className="relative mt-12 py-10 px-4 md:px-8 rounded-[32px] bg-white text-neutral-900 overflow-hidden shadow-xl isolate">
      {/* Background glow shadow mimicking WhyUs */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#E0B3CF]/8 blur-[150px] pointer-events-none -z-10" />

      {/* Default Border that matches WhyUs.tsx */}
      <span className="absolute inset-0 rounded-[32px] border border-black/5 pointer-events-none" />

      {/* Gradient border mask overlay matching sunset theme from WhyUs */}
      <span className="absolute inset-0 rounded-[32px] p-[1.5px] bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] opacity-15 pointer-events-none -z-10">
        <span className="block w-full h-full bg-white rounded-[30.5px]" />
      </span>

      {/* Apple-like soft backglow */}
      <span className="absolute inset-4 bg-gradient-to-r from-[#8A2EFF] to-[#F4B179] opacity-[0.03] blur-[100px] rounded-[32px] pointer-events-none -z-20" />

      <div className="max-w-5xl mx-auto relative z-10 font-sans">
        {/* Upper Title */}
        <div className="text-center mb-6">
          <div className="text-[10px] font-semibold tracking-widest text-[#8A2EFF] uppercase mb-1.5">
            Interactive Cost Planner
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2 font-sans leading-tight">
            Design your project scope. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] font-medium italic">Secure instantaneous clarity.</span>
          </h3>
          <p className="text-xs text-neutral-500 max-w-lg mx-auto font-light leading-normal">
            Our rate-based algorithm is 100% transparent. Tweak the timeline, format adaptions, and hooks to find your optimal path.
          </p>
        </div>

        {/* Dynamic State Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT AREA: Configuration Panel (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mode Switcher */}
            <div className="space-y-2.5">
              <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-neutral-400 block">
                Production Trajectory
              </label>
              <div className="grid grid-cols-2 p-1 rounded-xl bg-neutral-50 border border-neutral-200/50 gap-1 mt-1">
                <button
                  type="button"
                  id="btn-trajectory-motion"
                  onClick={() => setMode('motion')}
                  className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    mode === 'motion'
                      ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Motion-Led
                </button>
                <button
                  type="button"
                  id="btn-trajectory-founder"
                  onClick={() => setMode('founder')}
                  className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    mode === 'founder'
                      ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Founder-Led
                </button>
              </div>
            </div>

            {/* Graphics Rate Slider */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-neutral-400">
                  Estimated Graphics Rate
                </span>
                <span className="text-xl font-black font-sans text-neutral-900 tracking-tight">
                  ${rate}/s <span className="text-[10px] font-normal text-neutral-400">rate</span>
                </span>
              </div>
              
              <div className="grid grid-cols-3 p-1 rounded-xl bg-neutral-50 border border-neutral-200/50 gap-1">
                {[15, 25, 40].map((stepValue) => (
                  <button
                    key={stepValue}
                    type="button"
                    onClick={() => setRate(stepValue)}
                    className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center relative ${
                      rate === stepValue
                        ? 'text-white shadow-sm bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179]'
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    ${stepValue}/s
                  </button>
                ))}
              </div>

              {/* Unique Bullet Descriptions */}
              <ul className="space-y-1 text-[11px] font-light text-neutral-500 pt-1.5 border-t border-neutral-100 leading-snug">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#8A2EFF] font-bold">—</span>
                  <span>
                    {mode === 'motion' 
                      ? 'Motion graphics rate is our only core pricing variable.' 
                      : 'B-roll editing and customized speech synthesis post-processing.'}
                  </span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#E0B3CF] font-bold">—</span>
                  <span>Adjusted systematically based on creative storytelling complexity.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#F4B179] font-bold">—</span>
                  <span>First collaborations often require higher setup; recurring clients secure volume benefits.</span>
                </li>
              </ul>
            </div>

            {/* Videos Array Section */}
            <div className="space-y-4 pt-3 border-t border-neutral-100">
              <div className="flex justify-between items-center">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                  Videos ({videos.length})
                </h4>
                <button
                  type="button"
                  onClick={handleAddVideo}
                  id="btn-add-video"
                  className="flex items-center gap-1 py-1.5 px-2.5 rounded-lg border border-neutral-200 bg-white text-[11px] font-semibold text-neutral-600 hover:text-[#8A2EFF] hover:border-[#8A2EFF]/30 transition-all cursor-pointer"
                >
                  <Plus className="w-3 h-3 text-[#8A2EFF]" />
                  <span>Add Video</span>
                </button>
              </div>

              {/* Dynamic list of videos with standard layout cards */}
              <div className="space-y-4">
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
                        className="relative p-4 md:p-5 rounded-[20px] bg-white border border-neutral-200/50 space-y-4 overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(138,46,255,0.03)] transition-all duration-300"
                      >
                        {/* Video Header / Delete tool */}
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-neutral-450">
                            Video {idx + 1}
                          </span>
                          {videos.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveVideo(video.id)}
                              id={`btn-remove-video-${idx}`}
                              className="p-1 px-2 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-neutral-50 text-xs font-semibold flex items-center gap-1 transition-all pointer-events-auto cursor-pointer"
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
                            <span className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                              {video.duration}s <span className="text-xs font-normal text-neutral-500 font-sans">final duration (${rate}/s)</span>
                            </span>
                          </div>
                          <div className="relative py-2">
                            <input
                              type="range"
                              min={0}
                              max={ALLOWED_DURATIONS.length - 1}
                              step={1}
                              value={ALLOWED_DURATIONS.indexOf(video.duration) !== -1 ? ALLOWED_DURATIONS.indexOf(video.duration) : 2}
                              onChange={(e) => {
                                const valIdx = Number(e.target.value);
                                handleUpdateDuration(video.id, ALLOWED_DURATIONS[valIdx]);
                              }}
                              className="w-full h-1 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-[#8A2EFF] [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#8A2EFF] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#8A2EFF] [&::-moz-range-thumb]:cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono px-0.5">
                              {ALLOWED_DURATIONS.map((dur) => (
                                <button
                                  key={dur}
                                  type="button"
                                  onClick={() => handleUpdateDuration(video.id, dur)}
                                  className={`hover:text-[#8A2EFF] transition-colors cursor-pointer ${
                                    video.duration === dur ? 'text-[#8A2EFF] font-bold' : ''
                                  }`}
                                >
                                  {dur}s
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Format Adaptations Section */}
                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                            Format Adaptations ($10/s each)
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                            {FORMAT_OPTIONS.map((opt) => {
                              const isChecked = video.formats.includes(opt.id);
                              return (
                                <button
                                  type="button"
                                  id={`btn-format-${idx}-${opt.id}`}
                                  key={opt.id}
                                  onClick={() => handleToggleFormat(video.id, opt.id)}
                                  className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[52px] cursor-pointer ${
                                    isChecked
                                      ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                      : 'bg-white border-neutral-200/80 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
                                  }`}
                                >
                                  <div className="flex items-center justify-between w-full font-bold">
                                    <span className="text-[10px] font-bold tracking-tight">
                                      {opt.label}
                                    </span>
                                    {isChecked && (
                                      <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />
                                    )}
                                  </div>
                                  <div className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-400'} leading-none`}>
                                    {opt.res || opt.detail}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          <p className="text-[9px] text-neutral-450 italic mt-0.5 font-light leading-none">
                            Same video, resized for default requirements.
                          </p>
                        </div>

                        {/* Hook Variations Section */}
                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                            Hook Variations ($25 each)
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                            {HOOK_OPTIONS.map((opt) => {
                              const isChecked = video.hooks.includes(opt.id);
                              return (
                                <button
                                  type="button"
                                  id={`btn-hook-${idx}-${opt.id.replace(/\s+/g, '_')}`}
                                  key={opt.id}
                                  onClick={() => handleToggleHook(video.id, opt.id)}
                                  className={`p-1.5 rounded-lg border text-left transition-all duration-300 relative flex flex-col justify-between h-[44px] cursor-pointer ${
                                    isChecked
                                      ? 'bg-neutral-950 border-neutral-955 text-white shadow-md'
                                      : 'bg-white border-neutral-200/80 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
                                  }`}
                                >
                                  <div className="flex justify-between items-center w-full leading-none">
                                    <span className="text-[9px] font-bold truncate pr-1">
                                      {opt.label}
                                    </span>
                                    {isChecked && (
                                      <Check className="w-2.5 h-2.5 text-[#8A2EFF]" />
                                    )}
                                  </div>
                                  <span className={`text-[8px] ${isChecked ? 'text-neutral-300' : 'text-neutral-450'} font-mono`}>
                                    +$25
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          <p className="text-[9px] text-neutral-450 italic mt-0.5 font-light leading-none">
                            Alternative promotional intro hooks.
                          </p>
                        </div>

                        {/* Video Card Breakdown line */}
                        <div className="flex justify-between items-center pt-2.5 border-t border-neutral-100 text-xs text-neutral-550 font-sans">
                          <span className="font-mono text-[11px]">{video.duration}s × ${rate}/s</span>
                          <span className="text-xs font-bold text-neutral-900">${videoCostTuple.total.toLocaleString()}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Delivery Timeline Card Switcher */}
            <div className="space-y-2 pt-3 border-t border-neutral-100 font-sans">
              <label className="text-[9px] uppercase font-bold tracking-[0.15em] text-neutral-450 block">
                Delivery Timeline Target
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {TIMELINE_OPTIONS.map((opt) => {
                  const isSelected = timelineId === opt.id;
                  const factorDays = Math.ceil(totalStandardDays / opt.speedMultiplier);

                  return (
                    <button
                      type="button"
                      id={`btn-timeline-${opt.id}`}
                      key={opt.id}
                      onClick={() => setTimelineId(opt.id)}
                      className={`p-2 rounded-xl border flex flex-col items-center text-center justify-between gap-0.5 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-[#8A2EFF] bg-[#8A2EFF]/5 text-[#8A2EFF] shadow-md shadow-[#8A2EFF]/5'
                          : 'border-neutral-200 bg-white text-neutral-500 hover:text-neutral-900 hover:border-neutral-350'
                      }`}
                    >
                      <div className="text-[10px] font-bold leading-tight">
                        {opt.name}
                      </div>
                      <div className={`text-[8px] ${isSelected ? 'text-[#8A2EFF]/80' : 'text-neutral-400'} font-semibold uppercase tracking-wider`}>
                        {opt.feeLabel}
                      </div>
                      <div className={`text-[10px] font-mono font-bold pt-0.5 border-t w-full mt-0.5 ${isSelected ? 'border-[#8A2EFF]/25' : 'border-neutral-150'}`}>
                        {factorDays} d
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT AREA: Quote Summary Box (5 columns) */}
          <div className="lg:col-span-5 h-full space-y-4 lg:sticky lg:top-[90px] font-sans">
            
            {/* Quick Result Panels */}
            <div className="grid grid-cols-2 gap-3">
              {/* Total Estimate Panel */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] text-white shadow-md relative overflow-hidden">
                <span className="text-[9px] uppercase font-bold tracking-widest text-white/85 block mb-0.5">
                  Total Estimate
                </span>
                <span className="text-xl md:text-2xl font-black font-sans text-white tracking-tight leading-none block my-1">
                  ${totalProjectPrice.toLocaleString()}
                </span>
                <span className="text-[9px] text-white/95 block font-medium leading-none">
                  {selectedTimeline.feeMultiplier > 0 
                    ? `+$${rushFee.toLocaleString()} rush` 
                    : 'No speed overrides'}
                </span>
              </div>

              {/* Delivery Speed Panel */}
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200/85 font-sans">
                <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-400 block mb-0.5">
                  Production Delivery
                </span>
                <span className="text-xl md:text-2xl font-bold italic tracking-tight text-[#8A2EFF] leading-none block my-1">
                  {deliveryDays} days
                </span>
                <span className="text-[9px] text-neutral-500 block leading-none">
                  {selectedTimeline.name === 'Standard' ? 'Standard sequence' : `${selectedTimeline.name} timeline`}
                </span>
              </div>
            </div>

            {/* Full Dynamic Itemized Bill invoice */}
            <div className="rounded-2xl bg-[#fbfbfb] border border-neutral-200/50 p-4 space-y-3 shadow-sm">
              <span className="text-[9px] uppercase font-black tracking-[0.25em] text-neutral-450 block mb-1 font-sans">
                Itemized Estimate Breakdown
              </span>

              {/* Map itemized values per video */}
              <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1.5 custom-scrollbar">
                {videoCostsBreakdown.map(({ vid, costs, days }, index) => (
                  <div key={vid.id} className="space-y-1 border-b border-neutral-100 pb-2.5 last:border-b-0 last:pb-0 font-sans">
                    <div className="flex justify-between items-baseline font-bold text-[11px] text-neutral-800">
                      <span>Video {index + 1} ({vid.duration}s)</span>
                      <span className="font-mono text-[#8A2EFF]">${costs.total.toLocaleString()}</span>
                    </div>

                    {/* Main Cut detail */}
                    <div className="flex justify-between text-[10px] text-neutral-500 pl-1.5">
                      <span>Main cut — {vid.duration}s × ${rate}/s</span>
                      <span className="font-mono font-medium">${costs.base.toLocaleString()}</span>
                    </div>

                    {/* Format list adaptive details */}
                    {vid.formats.filter(f => f !== 'f16_9').map(formatId => {
                      const fOpt = FORMAT_OPTIONS.find(f => f.id === formatId);
                      return (
                        <div key={formatId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic">
                          <span>↳ Adapt ({fOpt?.label}) — {vid.duration}s × $10/s</span>
                          <span className="font-mono font-medium">${(10 * vid.duration).toLocaleString()}</span>
                        </div>
                      );
                    })}

                    {/* Hooks details */}
                    {vid.hooks.map(hId => (
                      <div key={hId} className="flex justify-between text-[10px] text-neutral-500 pl-1.5 italic font-sans">
                        <span>↳ Hook ({hId}) — flat rate</span>
                        <span className="font-mono font-medium">$25</span>
                      </div>
                    ))}

                    {/* Video internal timeline days label */}
                    <div className="text-[9px] text-neutral-450 pl-1.5 block font-light leading-none pt-0.5">
                      {days} business days base build
                    </div>
                  </div>
                ))}
              </div>

              {/* Global summary rows */}
              <div className="border-t border-neutral-200/80 pt-2.5 space-y-1.5 font-sans">
                
                {/* Graphics Subtotal */}
                <div className="flex justify-between text-xs text-neutral-500 font-sans">
                  <span>Graphics Subtotal</span>
                  <span className="font-mono text-neutral-700 font-bold">${subtotalCost.toLocaleString()}</span>
                </div>

                {/* Speed Rush factor line */}
                {selectedTimeline.feeMultiplier > 0 && (
                  <div className="flex justify-between text-xs text-[#8A2EFF] font-sans">
                    <span>Rush surcharge ({selectedTimeline.name})</span>
                    <span className="font-mono font-bold">+${rushFee.toLocaleString()}</span>
                  </div>
                )}

                {/* Final calculated output */}
                <div className="flex justify-between items-center text-xs font-bold text-neutral-800 pt-1.5 border-t border-neutral-200 font-sans leading-none">
                  <span>Total project estimate</span>
                  <span className="text-base font-black text-neutral-900 font-mono">${totalProjectPrice.toLocaleString()}</span>
                </div>

                {/* Timeline estimation */}
                <div className="flex justify-between items-center text-[11px] text-neutral-500 font-sans leading-none pb-0.5">
                  <span>Estimated timeline</span>
                  <span className="font-bold text-neutral-700">{deliveryDays} business days</span>
                </div>

              </div>

              {/* Copy links & alerts */}
              <div className="pt-1.5 font-sans">
                <button
                  type="button"
                  id="btn-copy-estimate-link"
                  onClick={handleCopyEstimateLink}
                  className="w-full py-2.5 rounded-lg bg-neutral-950 text-white hover:bg-neutral-900 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98] cursor-pointer relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8A2EFF] via-[#E0B3CF] to-[#F4B179] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Link className="w-3 h-3 text-[#F4B179] relative z-10 group-hover:text-white transition-colors duration-300" />
                  <span className="relative z-10">{copied ? 'Estimate Link Copied!' : 'Copy Estimate Link'}</span>
                </button>
                <span className="text-[9px] text-neutral-500 text-center block mt-2 leading-snug font-sans">
                  Share this unique link directly with stakeholders.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
