import { AppContext } from 'context';
import PropTypes from 'prop-types';
import scss from './AppProvider.module.scss';

export const AppProvider = ({ value, children }) => (
  <AppContext.Provider value={value}>
    <div className={scss.App}>{children}</div>
  </AppContext.Provider>
);

AppProvider.propTypes = {
  value: PropTypes.array.isRequired,
};
