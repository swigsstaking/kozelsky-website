import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// SWIGS URLs for bus animation - 22 frames
const SWIGS_DESKTOP_URLS = [
  'https://swigs.online/uploads/kozelsky/1770045592399-18717264.webp',
  'https://swigs.online/uploads/kozelsky/1770045592571-547429749.webp',
  'https://swigs.online/uploads/kozelsky/1770045592737-152743930.webp',
  'https://swigs.online/uploads/kozelsky/1770045592904-339506815.webp',
  'https://swigs.online/uploads/kozelsky/1770045593073-105393506.webp',
  'https://swigs.online/uploads/kozelsky/1770045593245-785144257.webp',
  'https://swigs.online/uploads/kozelsky/1770045593429-997742470.webp',
  'https://swigs.online/uploads/kozelsky/1770045593603-444044781.webp',
  'https://swigs.online/uploads/kozelsky/1770045593775-500372768.webp',
  'https://swigs.online/uploads/kozelsky/1770045593984-469151050.webp',
  'https://swigs.online/uploads/kozelsky/1770045594169-452147220.webp',
  'https://swigs.online/uploads/kozelsky/1770045594359-521926515.webp',
  'https://swigs.online/uploads/kozelsky/1770045594605-516013863.webp',
  'https://swigs.online/uploads/kozelsky/1770045594779-960521382.webp',
  'https://swigs.online/uploads/kozelsky/1770045595002-568537504.webp',
  'https://swigs.online/uploads/kozelsky/1770045595172-461512525.webp',
  'https://swigs.online/uploads/kozelsky/1770045595343-79102922.webp',
  'https://swigs.online/uploads/kozelsky/1770045595524-622125642.webp',
  'https://swigs.online/uploads/kozelsky/1770045595695-320191990.webp',
  'https://swigs.online/uploads/kozelsky/1770045595863-317179692.webp',
  'https://swigs.online/uploads/kozelsky/1770045596048-616718176.webp',
  'https://swigs.online/uploads/kozelsky/1770045596221-596197136.webp',
];

// SWIGS URLs for bus animation - 8 frames (mobile)
const SWIGS_MOBILE_URLS = [
  'https://swigs.online/uploads/kozelsky/1770045571433-611320844.webp',
  'https://swigs.online/uploads/kozelsky/1770045571539-221152266.webp',
  'https://swigs.online/uploads/kozelsky/1770045571654-805978120.webp',
  'https://swigs.online/uploads/kozelsky/1770045571786-490459510.webp',
  'https://swigs.online/uploads/kozelsky/1770045571925-385820161.webp',
  'https://swigs.online/uploads/kozelsky/1770045572038-482882291.webp',
  'https://swigs.online/uploads/kozelsky/1770045572161-39324890.webp',
  'https://swigs.online/uploads/kozelsky/1770045572289-531523096.webp',
];

const BusScrollAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const frameRef = useRef({ frame: 0 });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load images
  useEffect(() => {
    const frameUrls = isMobile
      ? SWIGS_MOBILE_URLS
      : SWIGS_DESKTOP_URLS;

    const loadedImages = [];
    let loadedCount = 0;

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === frameUrls.length) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame: ${url}`);
        loadedCount++;
        if (loadedCount === frameUrls.length) {
          setImages(loadedImages.filter(Boolean));
          setIsLoaded(true);
        }
      };
      img.src = url;
    });
  }, [isMobile]);

  // Render frame function
  const renderFrame = (frameIndex) => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = images[Math.min(Math.max(0, Math.floor(frameIndex)), images.length - 1)];

    if (img) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  // Setup canvas size and GSAP animation
  useLayoutEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const firstImg = images[0];

    if (!firstImg) return;

    // Set canvas size
    const setCanvasSize = () => {
      const maxWidth = 900;
      const containerWidth = Math.min(canvas.parentElement?.clientWidth || maxWidth, maxWidth);
      const aspectRatio = firstImg.height / firstImg.width;
      canvas.width = containerWidth;
      canvas.height = containerWidth * aspectRatio;
      renderFrame(frameRef.current.frame);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initial render
    renderFrame(0);

    // GSAP ScrollTrigger animation
    const animation = gsap.to(frameRef.current, {
      frame: images.length - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const frameIndex = Math.round(self.progress * (images.length - 1));
          renderFrame(frameIndex);
        },
      },
    });

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [isLoaded, images]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: '200vh', backgroundColor: '#000' }}
    >
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#000' }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#000' }}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-gray-700 border-t-gray-400 rounded-full animate-spin" />
              <span className="text-gray-400 text-sm">Chargement de l'animation...</span>
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`max-w-4xl transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default BusScrollAnimation;
