const sharedConfig = require("tailwind-config/tailwind.config.js");

// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        violet: {
          3: 'var(--violet-3)',
          7: 'var(--violet-7)',
          10: 'var(--violet-10)',
          11: 'var(--violet-11)',
          12: 'var(--violet-12)',
        },
        mauve: {
          3: 'var(--mauve-3)',
          4: 'var(--mauve-4)',
          11: 'var(--mauve-11)',
        },
        purple: {
          9: 'var(--purple-9)',
        },
        indigo: {
          9: 'var(--indigo-9)',
        },
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
      },
      animation: {
        enterFromRight: 'enterFromRight 250ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
      },
    },
  },
  plugins: [],
}
