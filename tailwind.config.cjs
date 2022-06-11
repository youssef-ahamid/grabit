module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0044FF',
        secondary: '#88A8FF',
        tertiary: '#88A8FF45',
        neutral: {
          DEFAULT: '#F3F3F3',
          light: '#ffffff',
          dark: '#000000',
        },
        lightBlue: "#73B3EB",
        accent: '#f9f614',
        error: '#e86f68',
      },
      fontFamily: {
        heading: ['poppins', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 50%, 100%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(10px)' },
          '70%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
          '85%': { transform: 'translateX(-5px)' },
          '90%': { transform: 'translateX(5px)' },
          '95%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s linear forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
