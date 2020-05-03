import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles((theme) => ({
  dashboardRoot: {
    padding: '32px',
    width: '100vw',
    height: '100%',
  },
  cardContainer: {
    marginTop: theme.spacing(),
  },
  locationHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  locationHeaderButton: {
    marginLeft: theme.spacing(1),
  },
}));
