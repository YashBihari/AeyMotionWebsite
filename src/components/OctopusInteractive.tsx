import React, { useEffect, useRef } from 'react';
import octopusSvgRaw from '../assets/Octopus.svg?raw';

export default function OctopusInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);

  const animStateRef = useRef({
    // Target and current pointer in SVG coords (viewBox: 0 0 1672 720)
    targetSvgX: 836,
    targetSvgY: 300,
    currentSvgX: 836,
    currentSvgY: 300,

    // Pupils
    targetLeftPupilX: 0,
    targetLeftPupilY: 0,
    targetRightPupilX: 0,
    targetRightPupilY: 0,
    currentLeftPupilX: 0,
    currentLeftPupilY: 0,
    currentRightPupilX: 0,
    currentRightPupilY: 0,

    // Normalized mouse (-1 to 1)
    targetNormX: 0,
    targetNormY: 0,
    currentNormX: 0,
    currentNormY: 0,

    // Tentacle rubber stretch states (stretch factor & pull angle)
    tentacles: {
      rearLeft: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
      wideLeft: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
      frontLeft: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
      frontCenter: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
      frontRight: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
      wideRight: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
      rearRight: { currentStretch: 1, currentRot: 0, currentSkew: 0 },
    },

    rafId: 0,
    isHovered: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const svgEl = container.querySelector('svg');
    if (!svgEl) return;

    // Ensure responsive SVG rendering
    svgEl.setAttribute('width', '100%');
    svgEl.setAttribute('height', '100%');
    svgEl.style.display = 'block';
    svgEl.style.overflow = 'visible';

    // Ensure masks are valid
    const mask = svgEl.querySelector('#mask');
    if (mask && mask.children.length === 0) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', '-1000');
      rect.setAttribute('y', '-1000');
      rect.setAttribute('width', '4000');
      rect.setAttribute('height', '3000');
      rect.setAttribute('fill', 'white');
      mask.appendChild(rect);
    }
    const mask1 = svgEl.querySelector('#mask-1');
    if (mask1 && mask1.children.length === 0) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', '-1000');
      rect.setAttribute('y', '-1000');
      rect.setAttribute('width', '4000');
      rect.setAttribute('height', '3000');
      rect.setAttribute('fill', 'white');
      mask1.appendChild(rect);
    }

    // Query SVG elements
    const pupilLeft = svgEl.querySelector('#pupil-left') as SVGGraphicsElement | null;
    const pupilRight = svgEl.querySelector('#pupil-right') as SVGGraphicsElement | null;
    const eyesGroup = svgEl.querySelector('#eyes') as SVGGraphicsElement | null;
    const head = svgEl.querySelector('#head') as SVGGraphicsElement | null;

    const tentacleRearLeft = svgEl.querySelector('#tentacle-rear-left') as SVGGraphicsElement | null;
    const tentacleWideLeft = svgEl.querySelector('#tentacle-wide-left') as SVGGraphicsElement | null;
    const tentacleFrontLeft = svgEl.querySelector('#tentacle-front-left') as SVGGraphicsElement | null;
    const tentacleFrontCenter = svgEl.querySelector('#tentacle-front-center') as SVGGraphicsElement | null;
    const tentacleFrontRight = svgEl.querySelector('#tentacle-front-right') as SVGGraphicsElement | null;
    const tentacleWideRight = svgEl.querySelector('#tentacle-wide-right') as SVGGraphicsElement | null;
    const tentacleRearRight = svgEl.querySelector('#tentacle-rear-right') as SVGGraphicsElement | null;
    const tentacleLowerMiddle = svgEl.querySelector('#tentacle-lower-middle') as SVGGraphicsElement | null;

    // Anchor origins: Fixed strictly at root attachment points so lower base stays solid & immune
    // Head and eyes anchored at lower base (836px, 470px) so lower 1/6th of body stays firmly attached
    if (head) head.style.transformOrigin = '836px 470px';
    if (eyesGroup) eyesGroup.style.transformOrigin = '836px 470px';

    // Tentacle attachment root coordinates
    if (tentacleRearLeft) tentacleRearLeft.style.transformOrigin = '665px 372px';
    if (tentacleWideLeft) tentacleWideLeft.style.transformOrigin = '700px 356px';
    if (tentacleFrontLeft) tentacleFrontLeft.style.transformOrigin = '681px 335px';
    if (tentacleFrontCenter) tentacleFrontCenter.style.transformOrigin = '746px 401px';
    if (tentacleFrontRight) tentacleFrontRight.style.transformOrigin = '872px 445px';
    if (tentacleWideRight) tentacleWideRight.style.transformOrigin = '1030px 370px';
    if (tentacleRearRight) tentacleRearRight.style.transformOrigin = '1043px 357px';
    // Lower middle tentacle/body stays solidly anchored
    if (tentacleLowerMiddle) tentacleLowerMiddle.style.transformOrigin = '840px 480px';

    if (prefersReducedMotion) return;

    // Eyes resting centers in SVG viewBox coordinates (1672 x 720)
    const LEFT_EYE_X = 744;
    const LEFT_EYE_Y = 296;
    const RIGHT_EYE_X = 902;
    const RIGHT_EYE_Y = 294;

    // Tentacle tip approximation coordinates for pull calculations
    const TENTACLES_CONFIG = [
      { name: 'rearLeft', el: tentacleRearLeft, tipX: 450, tipY: 170, baseAngle: -0.8 },
      { name: 'wideLeft', el: tentacleWideLeft, tipX: 155, tipY: 294, baseAngle: -0.2 },
      { name: 'frontLeft', el: tentacleFrontLeft, tipX: 85, tipY: 525, baseAngle: 0.4 },
      { name: 'frontCenter', el: tentacleFrontCenter, tipX: 391, tipY: 654, baseAngle: 0.8 },
      { name: 'frontRight', el: tentacleFrontRight, tipX: 1517, tipY: 627, baseAngle: -0.8 },
      { name: 'wideRight', el: tentacleWideRight, tipX: 1559, tipY: 325, baseAngle: 0.2 },
      { name: 'rearRight', el: tentacleRearRight, tipX: 1250, tipY: 80, baseAngle: 0.8 },
    ];

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = svgEl.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const scaleX = 1672 / rect.width;
      const scaleY = 720 / rect.height;
      const pointerSvgX = (clientX - rect.left) * scaleX;
      const pointerSvgY = (clientY - rect.top) * scaleY;

      animStateRef.current.targetSvgX = pointerSvgX;
      animStateRef.current.targetSvgY = pointerSvgY;

      // Normalized coordinates (-1 to 1) relative to center of head (836, 280)
      const normX = Math.max(-1.5, Math.min(1.5, (pointerSvgX - 836) / 836));
      const normY = Math.max(-1.5, Math.min(1.5, (pointerSvgY - 280) / 400));

      animStateRef.current.targetNormX = normX;
      animStateRef.current.targetNormY = normY;
      animStateRef.current.isHovered = true;

      // Left Eye Pupil Target calculation
      const ldx = pointerSvgX - LEFT_EYE_X;
      const ldy = pointerSvgY - LEFT_EYE_Y;
      const lDist = Math.sqrt(ldx * ldx + ldy * ldy);
      const lAngle = Math.atan2(ldy, ldx);
      const lMaxR = 1 / Math.sqrt(
        Math.pow(Math.cos(lAngle) / 14, 2) + Math.pow(Math.sin(lAngle) / 18, 2)
      );
      const lMag = Math.min(lMaxR, lDist / 16);

      animStateRef.current.targetLeftPupilX = Math.cos(lAngle) * lMag + 12;
      animStateRef.current.targetLeftPupilY = Math.sin(lAngle) * lMag + 1;

      // Right Eye Pupil Target calculation
      const rdx = pointerSvgX - RIGHT_EYE_X;
      const rdy = pointerSvgY - RIGHT_EYE_Y;
      const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
      const rAngle = Math.atan2(rdy, rdx);
      const rMaxR = 1 / Math.sqrt(
        Math.pow(Math.cos(rAngle) / 14, 2) + Math.pow(Math.sin(rAngle) / 18, 2)
      );
      const rMag = Math.min(rMaxR, rDist / 16);

      animStateRef.current.targetRightPupilX = Math.cos(rAngle) * rMag + 12;
      animStateRef.current.targetRightPupilY = Math.sin(rAngle) * rMag + 1;
    };

    const handlePointerLeave = () => {
      animStateRef.current.isHovered = false;
      animStateRef.current.targetSvgX = 836;
      animStateRef.current.targetSvgY = 300;
      animStateRef.current.targetLeftPupilX = 0;
      animStateRef.current.targetLeftPupilY = 0;
      animStateRef.current.targetRightPupilX = 0;
      animStateRef.current.targetRightPupilY = 0;
      animStateRef.current.targetNormX = 0;
      animStateRef.current.targetNormY = 0;
    };

    const footerEl = container.closest('footer') || container;
    window.addEventListener('mousemove', handlePointerMove as EventListener, { passive: true });
    footerEl.addEventListener('mouseleave', handlePointerLeave as EventListener, { passive: true });

    // Smooth animation loop
    const LERP_FACTOR = 0.08;
    const RUBBER_LERP = 0.07;

    const renderLoop = () => {
      const state = animStateRef.current;

      // Interpolate pointer & normalized coords
      state.currentSvgX += (state.targetSvgX - state.currentSvgX) * LERP_FACTOR;
      state.currentSvgY += (state.targetSvgY - state.currentSvgY) * LERP_FACTOR;

      state.currentLeftPupilX += (state.targetLeftPupilX - state.currentLeftPupilX) * LERP_FACTOR;
      state.currentLeftPupilY += (state.targetLeftPupilY - state.currentLeftPupilY) * LERP_FACTOR;
      state.currentRightPupilX += (state.targetRightPupilX - state.currentRightPupilX) * LERP_FACTOR;
      state.currentRightPupilY += (state.targetRightPupilY - state.currentRightPupilY) * LERP_FACTOR;

      state.currentNormX += (state.targetNormX - state.currentNormX) * (LERP_FACTOR * 0.9);
      state.currentNormY += (state.targetNormY - state.currentNormY) * (LERP_FACTOR * 0.9);

      const nx = state.currentNormX;
      const ny = state.currentNormY;

      // 1. Move pupils smoothly inside eye limits
      if (pupilLeft) {
        pupilLeft.style.transform = `translate(${state.currentLeftPupilX.toFixed(2)}px, ${state.currentLeftPupilY.toFixed(2)}px)`;
      }
      if (pupilRight) {
        pupilRight.style.transform = `translate(${state.currentRightPupilX.toFixed(2)}px, ${state.currentRightPupilY.toFixed(2)}px)`;
      }

      // 2. Head & Eyes directional bending + upper expansion
      // Transform origin is at (836px, 470px) - zero translation at the base ensures
      // the lower 1/6th part of the head/body remains 100% immune, solid, and seamless with tentacles.
      const headTilt = nx * 3.8;
      const headSkew = nx * 2.2;
      const headStretchY = 1 + Math.max(-0.02, -ny * 0.045);
      const headStretchX = 1 + Math.abs(nx) * 0.025;

      if (head) {
        // Pure rotation, skew, and upper expansion from the bottom anchor (no base displacement)
        head.style.transform = `rotate(${headTilt.toFixed(2)}deg) skewX(${headSkew.toFixed(2)}deg) scale(${headStretchX.toFixed(3)}, ${headStretchY.toFixed(3)})`;
      }

      if (eyesGroup) {
        // Eyes tilt & stretch synchronously with the head mantle, plus subtle gaze parallax
        const eyesParallaxX = nx * 10;
        const eyesParallaxY = ny * 7;
        eyesGroup.style.transform = `rotate(${headTilt.toFixed(2)}deg) skewX(${headSkew.toFixed(2)}deg) scale(${headStretchX.toFixed(3)}, ${headStretchY.toFixed(3)}) translate(${eyesParallaxX.toFixed(2)}px, ${eyesParallaxY.toFixed(2)}px)`;
      }

      // 3. Rubber tentacle stretch physics when pulled by mouse
      const pX = state.currentSvgX;
      const pY = state.currentSvgY;

      TENTACLES_CONFIG.forEach((cfg) => {
        if (!cfg.el) return;
        const tentState = state.tentacles[cfg.name as keyof typeof state.tentacles];
        if (!tentState) return;

        // Vector from tentacle tip to mouse pointer
        const dx = pX - cfg.tipX;
        const dy = pY - cfg.tipY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Pull factor: highest when mouse is pulling near or away in the tentacle's direction
        let targetStretch = 1;
        let targetRot = 0;
        let targetSkew = 0;

        if (state.isHovered) {
          // If mouse is near or pulling away in the tentacle field
          const pullInfluence = Math.max(0, 1 - dist / 900);
          
          // Stretching factor: stretches up to 1.14x (14% length extension) like rubber
          targetStretch = 1 + pullInfluence * 0.12 * Math.min(1.2, dist / 250);

          // Subtle pull rotation toward pointer
          targetRot = (nx * 3.5) + (dx / 1200) * 4;
          targetSkew = (ny * 1.5);
        }

        // Lerp rubber elasticity
        tentState.currentStretch += (targetStretch - tentState.currentStretch) * RUBBER_LERP;
        tentState.currentRot += (targetRot - tentState.currentRot) * RUBBER_LERP;
        tentState.currentSkew += (targetSkew - tentState.currentSkew) * RUBBER_LERP;

        // Apply rubber stretch along tentacle: scaleX / scaleY rubber elongation
        cfg.el.style.transform = `rotate(${tentState.currentRot.toFixed(2)}deg) scale(${tentState.currentStretch.toFixed(3)}) skewX(${tentState.currentSkew.toFixed(2)}deg)`;
      });

      animStateRef.current.rafId = requestAnimationFrame(renderLoop);
    };

    animStateRef.current.rafId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animStateRef.current.rafId);
      window.removeEventListener('mousemove', handlePointerMove as EventListener);
      footerEl.removeEventListener('mouseleave', handlePointerLeave as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[125%] max-w-[1800px] min-w-[340px] mx-auto aspect-[1672/720] pointer-events-none select-none flex items-end justify-center transform translate-y-[15%]"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: octopusSvgRaw }}
    />
  );
}

