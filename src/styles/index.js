import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const gamereqsTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
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
          "& > div img": {
            transition: 'transform .25s ease'
          },
          "&:hover": {
            "& > div img": {
              transform: 'scale(1.25)'
            }
          }
        }
      }
    }
  },
});

export default gamereqsTheme;
