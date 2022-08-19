module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: '#FFF7F0',
        neutralDark: '#000000',
        neutralLight: '#ffffff',
        brand: "#B9752A",
        brandDark: "#621227",
        brandLight: "#FADA79",
        accent: "#9ef372"
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
