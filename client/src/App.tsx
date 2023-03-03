import { useEffect } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from './redux/hooks';
import CurrentUserInterface from './interface';
import { FindPeople, Unauthenticated, MyChats, MyContacts, MyProfile, Settings, NotFound } from './pages';
import { Loading } from './atoms';
import { ProtectedRoute } from './components';
import checkIfUserLogedInAction from './redux/actions';

function App() {
  const dispatch = useAppDispatch();
  const currentUser: CurrentUserInterface = useAppSelector((state) => state.currentUser);

  useEffect(() => {
    checkIfUserLogedInAction(dispatch)
  }, [currentUser]);

  if (currentUser.loading) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/my-profile" />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/my-chats" element={<MyChats />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/my-contacts" element={<MyContacts />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/find-people" element={<FindPeople />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={!currentUser.auth ? <Unauthenticated /> : <Navigate to="/my-profile" />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;