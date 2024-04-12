export interface Colors {
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  dark: string;
  dark1: string;
  dark2: string;
  grey: string;
  lightGrey: string;
  black: string;
  white: string;
  pink: string;
}

export interface Fonts {
  main: string;
}

export interface FontSizes {
  small: string;
  medium: string;
  large: string;
}

export enum ScreenSizes {
  mobile = '576px',
  tablet = '768px',
  laptop = '1024px'
}

export interface ThemeType {
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  screenSizes: {
    mobile: ScreenSizes.mobile;
    tablet: ScreenSizes.tablet;
    laptop: ScreenSizes.laptop;
  };
}

export const theme: ThemeType = {
  colors: {
    primary1: '#d8babc',
    primary2: '#ead0d0',
    primary3: '#f6e8e7',
    primary4: '#faefed',
    primary5: '#eecdc8',
    dark: '#212032',
    dark1: '#6b6a70',
    dark2: '#98979b',
    grey: '#9b9b9b',
    lightGrey: '#ebebeb',
    black: '#111111',
    white: '#fff',
    pink: '#fd4d99'
  },
  fonts: {
    main: 'Roboto, Helvetica, Arial, sans-serif'
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '18px'
  },
  screenSizes: {
    mobile: ScreenSizes.mobile,
    tablet: ScreenSizes.tablet,
    laptop: ScreenSizes.laptop
  }
};
