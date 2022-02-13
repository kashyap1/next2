import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    logoContainer: {
        flexGrow: 1,
        display: 'flex',
    },
    logo: {
        marginRight: theme.spacing(2),
        alignSelf: 'center',
    },
    navLinks: {
        whiteSpace: 'nowrap',
    },
    companyName: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
  }));
