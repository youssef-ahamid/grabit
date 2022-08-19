module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: '#FFF4E9',
        neutralDark: '#000000',
        neutralLight: '#ffffff',
        brand: '#01BAEF',
        brandDark: '#621227',
        brandLight: '#FADA79',
        accent: '#F15025',
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
