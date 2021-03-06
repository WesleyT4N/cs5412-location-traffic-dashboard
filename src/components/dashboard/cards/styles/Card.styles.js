import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: '300px',
  },
  taller: {
    height: '350px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '150px',
    fontWeight: 700,
  },
  icon: {
    fontSize: '96px',
  },
  contentInner: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardTypography: {
    display: 'flex',
    alignItems: 'center',
  },
  chart: {
    height: '50px',
    width: '100%',
  },
}));
