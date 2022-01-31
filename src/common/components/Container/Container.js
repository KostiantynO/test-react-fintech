import scss from './Container.module.scss';

export const Container = ({ children }) => (
  <div className={scss.Container}>{children}</div>
);
