module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
      },
      
      colors:{
        'tango': {
          DEFAULT: '#EF7F1A',
          '50': '#FBDFC6',
          '100': '#FAD4B3',
          '200': '#F7BF8C',
          '300': '#F4AA66',
          '400': '#F29440',
          '500': '#0055b81a',
          '600': '#C3640E',
          '700': '#8F490A',
          '800': '#5A2E06',
          '900': '#261303'
        },
        'endeavour': {
          DEFAULT: '#0055B8',
          '50': '#71B2FF',
          '100': '#5CA7FF',
          '200': '#3391FF',
          '300': '#0B7CFF',
          '400': '#0068E1',
          '500': '#e6eef8',
          '600': '#003B80',
          '700': '#002148',
          '800': '#000710',
          '900': '#000000'
        },
        'mercury': {
          DEFAULT: '#E5E5E5',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#F9F9F9',
          '500': '#E5E5E5',
          '600': '#C9C9C9',
          '700': '#ADADAD',
          '800': '#919191',
          '900': '#757575'
        },
      },
    },
    
  },
  plugins: [],
}
