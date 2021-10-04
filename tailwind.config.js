module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'headerColor':'#012148',
      'bgBody':'#4E2079',
     }),
    extend: {
      backgroundImage: {
        
       },
       width:{
         
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
