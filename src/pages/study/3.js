import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import ReactMarkdown from 'react-markdown';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const initCanvas = async () => {
  let mouse_pos = { x: 0, y: 0 };

  const canvas = new fabric.Canvas('canvas', {
    height: 0,
    width: 0,
  });

  function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, false);

  const animate = async (particles) => {
    const maxx = canvas.width;
    const maxy = canvas.height;
    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      const dx = particle.left - mouse_pos.x;
      const dy = particle.top - mouse_pos.y;
      let { ax, ay } = particle; // consider switching coordinate systems to v, theta

      if (dx * dx + dy * dy < 100 * 100) {
        ax -= 0.0005 * dx;
        ay -= 0.0005 * dy;
      }
      // limit distance to each other
      for (let j = 0; j < particles.length; j += 1) {
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

      // center gravity
      const dxCenter = (particle.xSink - particle.left) / maxx;
      const dyCenter = (particle.ySink - particle.top) / maxy;

      ax = ax * 0.96 - 0.01 * dxCenter;
      ay = ay * 0.96 - 0.01 * dyCenter;

      particle.ax = ax;
      particle.ay = ay;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      const { vx, vy, ax, ay } = particle; // consider switching coordinate systems to v, theta

      // bring back to screen
      if (particle.top > maxy || particle.top < 0) particle.ay = -particle.ay;
      if (particle.left > maxx || particle.left < 0) particle.ax = -particle.ax;

      const speedLimit = 2;
      const newVx = (vx - ax) * 0.9;
      const newVy = (vy - ay) * 0.9;

      particle.vx =
        newVx > 0 ? Math.min(newVx, speedLimit) : Math.max(newVx, -speedLimit);
      particle.vy =
        newVy > 0 ? Math.min(newVy, speedLimit) : Math.max(newVy, -speedLimit);

      particle.left += vx;
      particle.top += vy;
    }
  };

  const loadCursors = async (img) => {
    const maxx = canvas.width;
    const maxy = canvas.height;
    const total = 100;
    const particles = new Array(total);

    for (let i = 0; i < total; i += 1) {
      const particle = new fabric.Image(img.getElement(), {
        left: Math.random() * maxx,
        top: Math.random() * maxy,
        selectable: false,
      });
      particle.vx = 0;
      particle.vy = 0;
      particle.ax = 0; // .1 * (Math.random() - 0.5);
      particle.ay = 0; // .1 * (Math.random() - 0.5);
      particle.xSink = Math.random() * maxx;
      particle.ySink = Math.random() * maxy;
      canvas.add(particle);
      particles[i] = particle;
    }
    /* eslint-disable no-await-in-loop */
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await sleep(25);
      await animate(particles);
      await canvas.renderAll();
    }
    /* eslint-enable no-await-in-loop */
  };

  canvas.on('mouse:move', (options) => {
    mouse_pos = canvas.getPointer(options.e);
    mouse_pos = {
      x: options.e.layerX,
      y: options.e.layerY,
    };
  });

  fabric.Image.fromURL('/assets/20-cursor.png', loadCursors);
  return canvas;
};

const message = `
# Social Distancing on the Web

The problem with so much social engagement prior to covid is that everyone wanted to be in the same few places.
Social Distancing is naturally hard because each of us doesn't have a unique idea about where to go. The same 
places appeal to us all for similar reasons.
Incidentally we now find ourselves similarly clustering like so many flies on the internet's cow pies, in light of which, we 
must now distance ourselves from one another physically, albeit in a virtual realm.

We all try, but we can't always stay away.
`;

const SocialDistancing = () => {
  const [canvas, setCanvas] = useState('');
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  return (
    <>
      <style global jsx>{`
        * {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        canvas {
          display: inline-block;
        }
        .overwrite {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>
      <ReactMarkdown source={message} />
      <div className="overwrite">
        <canvas id="canvas" />
      </div>
    </>
  );
};

export default SocialDistancing;
