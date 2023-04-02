/** @type {import('tailwindcss').Config} */

const globalStyles = ({ addBase, config }) => {
  addBase({
    p: {
      marginBottom: config('theme.margin.3'),
      lineHeight: config('theme.lineHeight.normal'),
    },
    'h1, h2, h3, h4, h5': {
      marginBottom: config('theme.margin.2'),
      lineHeight: config('theme.lineHeight.tight'),
      fontWeight: config('theme.fontWeight.bold'),
    },
    h1: { fontSize: config('theme.fontSize.5xl') },
    h2: { fontSize: config('theme.fontSize.4xl') },
    h3: { fontSize: config('theme.fontSize.3xl') },
    h4: { fontSize: config('theme.fontSize.2xl') },
    h5: { fontSize: config('theme.fontSize.xl') },
    'ol, ul': { paddingLeft: config('theme.padding.4') },
    ol: { listStyleType: 'decimal' },
    ul: { listStyleType: 'disc' },
  });
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1190px',
        },
      },
      colors: {
        'dark-blue': '#284455',
        'medium-blue': '#3E6072',
        'light-blue': '#628196',
        'lighter-blue': '#BDD7E6',
        'main-sand': '#F1D7BD',
        'light-sand': '#FCF1E7',
        'ligter-sand': '#FFFCF7',
        'dark-grey': '#B1B1B1',
        'light-grey': '#D3D3D3',
      },
      lineHeight: {
        heading: 1.2,
      },
      fontSize: {
        '2xs': '.625rem',
      },
      width: {
        'half-padding': 'calc(50% - 3rem)',
      },
      // easing
      transitionTimingFunction: {
        // cubic-bezier(.4,0,.2,1)
        'scaletrans': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        'huge': '147px',
        'med': '70px',
        'sma': '45px',
      },
    },
  },
  plugins: [globalStyles],
}
