'use client';

import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

const message = `
# Social Distancing on the Web

The problem with social engagement prior to covid is that everyone wanted to be in the same few places.
Social Distancing is naturally hard because each of us doesn't have a unique idea about where to go. The same
places appeal to us all for similar reasons.
Incidentally, we now find ourselves similarly clustering like so many flies on the internet's cow pies, in light of which, we
must now distance ourselves from one another physically, albeit in a virtual realm.

We all try, but we can't always stay away.
`;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Particle {
  left: number;
  top: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  xSink: number;
  ySink: number;
  element: HTMLDivElement;
}

export default function Study3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let mousePos = { x: 0, y: 0 };
    const particles: Particle[] = [];
    const total = 100;

    const maxx = window.innerWidth;
    const maxy = window.innerHeight;

    // Create cursor elements
    for (let i = 0; i < total; i++) {
      const element = document.createElement('div');
      element.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background-image: url('/assets/20-cursor.png');
        background-size: contain;
        pointer-events: none;
      `;
      container.appendChild(element);

      particles.push({
        left: Math.random() * maxx,
        top: Math.random() * maxy,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        xSink: Math.random() * maxx,
        ySink: Math.random() * maxy,
        element,
      });
    }

    const animate = () => {
      const currentMaxx = window.innerWidth;
      const currentMaxy = window.innerHeight;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const dx = particle.left - mousePos.x;
        const dy = particle.top - mousePos.y;
        let { ax, ay } = particle;

        if (dx * dx + dy * dy < 100 * 100) {
          ax -= 0.0005 * dx;
          ay -= 0.0005 * dy;
        }

        for (let j = 0; j < particles.length; j++) {
          if (i !== j) {
            const neighbor = particles[j];
            const deltaX = particle.left - neighbor.left;
            const deltaY = particle.top - neighbor.top;
            if (deltaX * deltaX + deltaY * deltaY < 100 * 100) {
              ax -= 0.0005 * deltaX;
              ay -= 0.0005 * deltaY;
            }
          }
        }

        const dxCenter = (particle.xSink - particle.left) / currentMaxx;
        const dyCenter = (particle.ySink - particle.top) / currentMaxy;

        ax = ax * 0.96 - 0.01 * dxCenter;
        ay = ay * 0.96 - 0.01 * dyCenter;

        particle.ax = ax;
        particle.ay = ay;
      }

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const { vx, vy, ax, ay } = particle;

        if (particle.top > currentMaxy || particle.top < 0) particle.ay = -particle.ay;
        if (particle.left > currentMaxx || particle.left < 0) particle.ax = -particle.ax;

        const speedLimit = 2;
        const newVx = (vx - ax) * 0.9;
        const newVy = (vy - ay) * 0.9;

        particle.vx = newVx > 0 ? Math.min(newVx, speedLimit) : Math.max(newVx, -speedLimit);
        particle.vy = newVy > 0 ? Math.min(newVy, speedLimit) : Math.max(newVy, -speedLimit);

        particle.left += particle.vx;
        particle.top += particle.vy;

        particle.element.style.left = `${particle.left}px`;
        particle.element.style.top = `${particle.top}px`;
      }
    };

    const runAnimation = async () => {
      while (animationRef.current) {
        await sleep(25);
        animate();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    runAnimation();

    return () => {
      animationRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach((p) => p.element.remove());
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        .overwrite {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }
      `}</style>
      <ReactMarkdown>{message}</ReactMarkdown>
      <div ref={containerRef} className="overwrite" />
    </>
  );
}
