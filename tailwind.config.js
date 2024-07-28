/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors :{
      'Yellow' : '#00FFFF',
      'whitegr' : '#fff',
      'grNavbtn' : '#475467',
      'grSilver' : '#F9FAFB',
      'section4desc' : '#475467'
    },
    spacing : {
        '1340' : '1340px',
        '717' : '717px',
        '1240' : '1240px',
        '80'  : '80px',
        '25'  : '25px',
        '2'   :  '2%'

    },
    borderRadius : {
      'gr' : '42px'
    },
    fontFamily : {
      'grFont' : 'Plus Jakarta Sans',
      'DMSans' : 'DM Sans',
    },
    
  },
},
  plugins: [],
}
