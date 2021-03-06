import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    maxHeight: '164px',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  title: {
    display: 'block',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: theme.palette.common.white,
    // marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.common.white,
    // [theme.breakpoints.up('md')]: {
    //   width: '60ch',
    // },
  },
  inputLoadingIndicator: {
    display: 'block',
    margin: 'auto',
  },
  headerButtonContainer: {
    textAlign: 'right',
  },
  headerButton: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
  },
  headerMenuItem: {
    textAlign: 'center',
  },
}));
