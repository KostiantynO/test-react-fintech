import scss from './MainWrapper.module.scss';

export const MainWrapper = ({ children }) => (
  <div className={scss.MainWrapper}>{children}</div>
);
