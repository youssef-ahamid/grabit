module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: '#FFF7F0',
          light: '#ffffff',
          dark: '#000000',
        },
        brand: {
          light: "#FADA79",
          DEFAULT: "#B9752A",
          dark: "#621227"
        }
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
