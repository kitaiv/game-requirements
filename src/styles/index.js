import { extendTheme } from '@mui/joy/styles';

const gamereqsTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          surface: 'rgba(118, 118, 118, 1)'
        },
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
        text: {
          100: "#E6E6E6"
        },
        success: {
          solidBg: '#2DA44E',
          solidHoverBg: '#2C974B',
          solidActiveBg: '#298E46',
        },
        neutral: {
          outlinedBg: '#F6F8FA',
          outlinedHoverBg: '#F3F4F6',
          outlinedActiveBg: 'rgba(238, 239, 242, 1)',
          outlinedBorder: 'rgba(27, 31, 36, 0.15)',
        },
        focusVisible: 'rgba(3, 102, 214, 0.3)',
      },
    },
    light: {
      palette: {
        background: {
          surface: 'inherit',
          popup: 'rgba(12, 10, 24, 1)'
        },
        info: {
          plainActiveBg: "#000"
        },
        neutral: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
          outlinedBorder: 'rgba(74, 79, 205, 0.43)',
          outlinedColor: '#e6e6e6',

          //hover effect
          outlinedHoverColor: null,
          outlinedHoverBorder: 'rgba(74, 79, 205, 1)',
          outlinedHoverBg: null
        },
      }
    }
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          "& > div img": {
            transition: 'transform .25s ease'
          },
          "&:hover": {
            "& > div img": {
              transform: 'scale(1.25)'
            },
            border: '3px solid rgba(74, 79, 205, 0.50)'
          }
        }
      }
    },
    JoySheet: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit'
        }
      }
    },
    JoyAutocomplete: {
      styleOverrides: {
        root: {
          width: '50%', 
          margin: '2rem auto',
          backgroundColor: 'inherit',
          border: '2px solid rgba(74, 79, 205, 0.43)',
          color: '#fff',
          '&:hover': {
            border: '2px solid rgba(74, 79, 205, 0.43)',
            color: '#fff'
          }
        }
      }
    },
  },
});

export default gamereqsTheme;
