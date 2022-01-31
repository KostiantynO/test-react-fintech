import { Container } from 'common';
import scss from './Header.module.scss';

// В хедере элемент поиска, на каждой вкладке фильтровать в своем списке пользователей, по id и login
export const Header = () => {
  return (
    <header className={scss.Header}>
      <Container>
        <form className={scss.FilterForm}>
          <label className={scss.Label}>
            <input className={scss.Input} type="text" name="usersFilter" />
            <span>Filter</span>
          </label>
        </form>
      </Container>
    </header>
  );
};
