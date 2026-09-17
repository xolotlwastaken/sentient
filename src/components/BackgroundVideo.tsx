import React, { useEffect, useRef } from 'react';

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Desktop Mouse Scrubbing Hook
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is paused on desktop so it doesn't run away from cursor
    if (window.innerWidth >= 1024) {
      video.pause();
    }

    const seekToTarget = () => {
      if (!video || !video.duration || Number.isNaN(video.duration)) return;
      if (!video.seeking && Math.abs(video.currentTime - targetTimeRef.current) > 0.015) {
        const maxTime = Math.max(0, video.duration - 0.02);
        const clamped = Math.max(0, Math.min(targetTimeRef.current, maxTime));
        video.currentTime = clamped;
      }
    };

    const handleSeeked = () => {
      seekToTarget();
    };

    video.addEventListener('seeked', handleSeeked);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (!video || !video.duration || Number.isNaN(video.duration)) return;

      const progress = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
      targetTimeRef.current = progress * video.duration;

      seekToTarget();
    };

    const loop = () => {
      seekToTarget();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      video.removeEventListener('seeked', handleSeeked);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Mobile Autoplay Hook
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true;
        video.loop = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    if (window.innerWidth < 1024) {
      video.autoplay = true;
      video.loop = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src={VIDEO_SRC}
        className="w-full h-full object-cover object-right lg:object-right-bottom"
      />
    </div>
  );
};
