'use client';

import { useEffect } from 'react';

const faviconImages = Array.from(
  { length: 16 },
  (_, i) => `/favicon/frame_${i.toString().padStart(2, '0')}.png`
);

export default function AnimatedFavicon() {
  useEffect(() => {
    let imageCounter = 0;

    const interval = setInterval(() => {
      const existingIcon = document.querySelector("link[rel='icon']");
      const existingShortcutIcon = document.querySelector("link[rel='shortcut icon']");

      if (existingIcon) existingIcon.remove();
      if (existingShortcutIcon) existingShortcutIcon.remove();

      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconImages[imageCounter];
      link.type = 'image/png';
      document.head.appendChild(link);

      imageCounter = (imageCounter + 1) % faviconImages.length;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
