import '@emotion/react'

const color = {
  primary: '#0066FF',
  sub: '#FF005C',
  green: '#04B600',
  white: '#FFFFFF',
  black: '#000000',
  orange: '#FF9B05',
  Background: {
    main: '#F4F8FF',
    sub: '#f5f5f5',
  },
  Grayscale: {
    gray01: '#F5F5F5',
    gray02: '#EBEBEB',
    gray03: '#D9D9D9',
    gray04: '#C0C0C0',
    gray05: '#B1B1B1',
    gray06: '#9E9E9E',
    gray07: '#6C6C6C',
    gray08: '#606060',
    gray09: '#3C3C43',
    gray10: '#191919',
  },
} as const

const typography = {
  h1: {
    bold: {
      fontSize: '53px',
      lineHeight: '44px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '53px',
      lineHeight: '44px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '53px',
      lineHeight: '44px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '53px',
      lineHeight: '44px',
      fontWeight: '400',
    },
  },
  h2: {
    bold: {
      fontSize: '44px',
      lineHeight: '44px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '44px',
      lineHeight: '44px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '44px',
      lineHeight: '44px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '44px',
      lineHeight: '44px',
      fontWeight: '400',
    },
  },
  h3: {
    bold: {
      fontSize: '32px',
      lineHeight: '44px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '32px',
      lineHeight: '44px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '32px',
      lineHeight: '44px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '32px',
      lineHeight: '44px',
      fontWeight: '400',
    },
  },
  h4: {
    bold: {
      fontSize: '28px',
      lineHeight: '33px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '28px',
      lineHeight: '33px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '28px',
      lineHeight: '33px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '28px',
      lineHeight: '33px',
      fontWeight: '400',
    },
  },
  h5: {
    bold: {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '400',
    },
  },
  title: {
    bold: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '24px',
      lineHeight: '44px',
      fontWeight: '400',
    },
  },
  body1: {
    bold: {
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '16px',
      lineHeight: '28px',
      weight: '400',
    },
  },
  body2: {
    bold: {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '14px',
      lineHeight: '14px',
      fontWeight: '400',
    },
  },
  caption: {
    bold: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '700',
    },
    semibold: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '600',
    },
    medium: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '500',
    },
    regular: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '400',
    },
  },
} as const

export const theme = {
  color,
  typography,
}

type ExtendedTheme = typeof theme

declare module '@emotion/react' {
  interface Theme extends ExtendedTheme {}
}
