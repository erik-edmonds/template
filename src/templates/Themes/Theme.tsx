//Switch to theme 

export const themeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#6d707d',
        },
        secondary: {
            main: '#000000',
        },
        background: {
            default: '#e2dbdb',
            paper: '#efeded',
        },
        error: {
            main: '#ff0000',
        },
        warning: {
            main: '#ff7100',
        },
        text: {
            disabled: 'rgba(255,255,255,0.96)',
        },
    },
    typography: {
        fontFamily: 'Titillium Web',
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#689f38',
                color: '#fff',
            },
        },
    },
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background:
                        'linear-gradient(0.25turn, #000,  #1c1c1c, #404040, #999999)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(0,0,0, .4)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                },
            },
        },
    },
};