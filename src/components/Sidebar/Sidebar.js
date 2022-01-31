import { Container } from 'common';
import scss from './Sidebar.module.scss';

const sidebarText = {
  users: ' Пользователи',
  selectedUsers: 'Выбранные пользователи',
};

export const Sidebar = () => {
  return (
    <aside className={scss.Sidebar}>
      <Container>
        <div>
          <h2>{sidebarText.users}</h2>
        </div>

        <div>
          <h2>{sidebarText.selectedUsers}</h2>
        </div>
      </Container>
    </aside>
  );
};
