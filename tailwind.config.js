const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
        backgroundImage: {
          'hero': "url('/public/static/images/squares.svg')",
          'hero-graph': "url('/static/images/graph-paper.svg')",
        },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        //sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        //sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        
        //'mono': ['Archivo Black']
      },
      colors: {
        primary:  {
          50: '#cffafe',
          100: '#CDDAFB',
          200: '#9BB5F7',
          300: '#6891F4',
          400: '#366CF0',
          500: '#0447EC',
          600: '#0335B1',
          700: '#022476',
          800: '#01123B',
          900: '#000718',
        },
        yellow:  {
          50: '#FFFAE8',
          100: '#FFF3D0',
          200: '#FFE7A1',
          300: '#FFDC71',
          400: '#FFD042',
          500: '#FFC413',
          600: '#BF930E',
          700: '#80620A',
          800: '#403105',
          900: '#1A1402',
        },
        
        lblue:  {
          50: '#E6F7FF',
          100: '#CCEFFF',
          200: '#9ADFFF',
          300: '#67CEFF',
          400: '#35BEFF',
          500: '#02AEFF',
          600: '#0283BF',
          700: '#015780',
          800: '#012C40',
          900: '#00111A',
        },
        green:  {
          50: '#E6FBF3',
          100: '#CCF7E6',
          200: '#9AEFCD',
          300: '#67E6B5',
          400: '#35DE9C',
          500: '#02D683',
          600: '#02A162',
          700: '#016B42',
          800: '#013621',
          900: '#00150D',
        },
        orange:  {
          50: '#FFEDE8',
          100: '#FEDAD0',
          200: '#FDB5A2',
          300: '#FC9073',
          400: '#FB6B45',
          500: '#FA4616',
          600: '#BC3511',
          700: '#7D230B',
          800: '#3F1206',
          900: '#190702',
        },
        mred:'#D90C4A',
        blueOpacity:'#0283BF',
        gray: colors.neutral,
        maroon: '#02AEFF',
        yellow: '#ffc413',
        dblue: '#005ada',
        lblue: '#02aeff',
        background: "#f5f5f5",
        maroon: '#35BEFF',
        dblue: '#005ada',
        lwhite: "#E6F7FF",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.900'),
              '&:hover': {
                color: `${theme('colors.primary.600')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.00'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
