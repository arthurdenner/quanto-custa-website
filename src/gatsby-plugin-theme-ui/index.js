import { tailwind } from '@theme-ui/presets';

const sharedHeadingStyles = {
  color: `heading`,
};

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: `#FDFFFF`,
    background: `#562F58`,
    textMuted: `#B6B6B6`,
    text: `#FDFFFF`,
    heading: `#FDFFFF`,
    light: `hsla(297, 30%, 46%, 0.5)`,
    modes: {
      dark: {
        background: `#212121`,
        textMuted: `#B6B6B6`,
        light: `hsla(0, 0%, 23%, 0.5)`,
      },
    },
  },
  lineHeights: {
    ...tailwind.lineHeights,
    body: tailwind.lineHeights.normal,
  },
  fonts: {
    body: `Nunito`,
    heading: `Nunito`,
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  space: [
    0,
    `0.25rem`,
    `0.5rem`,
    `1rem`,
    `2rem`,
    `3rem`,
    `4rem`,
    `8rem`,
    `16rem`,
    `32rem`,
  ],
  styles: {
    ...tailwind.styles,
    Footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
    },
    Container: {
      maxWidth: `1200px`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `relaxed`,
      mb: 0,
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
    },
    h1: {
      ...tailwind.styles.h1,
      ...sharedHeadingStyles,
      fontSize: [4, 4, 5],
      mt: 2,
    },
    h2: {
      ...tailwind.styles.h2,
      ...sharedHeadingStyles,
      display: `flex`,
      fontSize: [3, 3, 4],
      lineHeight: 1,
      justifyContent: [`left`, `left`, `center`],
      mb: 0,
      mt: 0,
    },
    h3: {
      ...tailwind.styles.h3,
      ...sharedHeadingStyles,
      fontSize: [3, 4],
      mt: 3,
    },
    h4: {
      ...tailwind.styles.h4,
      ...sharedHeadingStyles,
      fontSize: [2, 3],
    },
    h5: {
      ...tailwind.styles.h5,
      ...sharedHeadingStyles,
      fontSize: [1, 2],
    },
    h6: {
      ...tailwind.styles.h6,
      ...sharedHeadingStyles,
      fontSize: 1,
      mb: 2,
    },
  },
  buttons: {
    transparent: {
      color: `inherit`,
      bg: `transparent`,
      transition: `all 0.3s ease-in-out`,
      border: `none`,
      '&:hover, &:focus': {
        color: `primary`,
        outline: `none`,
        boxShadow: `0 0 0 2px`,
        cursor: `pointer`,
      },
    },
  },
};
