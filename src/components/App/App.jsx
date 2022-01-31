import { useEffect, useReducer } from 'react';
import { AppProvider, MainWrapper } from 'common';
import { action, appReducer } from 'hooks';
import { Header, Main, Sidebar, Footer } from 'components';
import { API } from 'apis';

const INITIAL_STATE = Object.freeze({ amount: '', users: [], user: {} });

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await API.fetchUsers();
      console.log('getUsers ~ data', data);

      try {
        dispatch({ type: action.setUsers, payload: data });
      } catch (error) {}
    };

    getUsers();
  }, []);

  return (
    <AppProvider value={[state, dispatch]}>
      <Header />

      <MainWrapper>
        <Sidebar />
        <ul style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {state?.users?.map(
            (user, idx) =>
              user && (
                <li key={user.id ? user.id : idx}>
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    width="80"
                    height="80"
                  />
                  <p>{user.login}</p>
                </li>
              )
          )}
        </ul>
        <Main />
      </MainWrapper>

      <Footer />
    </AppProvider>
  );
};
