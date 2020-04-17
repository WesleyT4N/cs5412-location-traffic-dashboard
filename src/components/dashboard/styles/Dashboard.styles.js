import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles((theme) => ({
  dashboardRoot: {
    padding: '32px',
  },
  cardContainer: {
    marginTop: theme.spacing(),
  },
  locationHeader: {
    display: 'flex',
  },
  locationHeaderButton: {
    marginLeft: theme.spacing(1),
  },
}));
