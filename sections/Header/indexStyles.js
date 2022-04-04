const theme = {
    root: {
      flexGrow: 1
    },
    logoContainer: {
        flexGrow: 1,
        display: 'flex',
    },
    logo: (theme) => ({
        marginRight: theme.spacing(2),
        alignSelf: 'center',
    }),
    navLinks: {
        whiteSpace: 'nowrap',
    },
    companyName: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
  };
  export default theme;
