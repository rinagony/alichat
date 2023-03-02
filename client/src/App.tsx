import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { checkIfUserLogedIn, loginWithGoogle } from './api/firebase/login';
import { useAuth } from './helpers/auth';
import { useAppDispatch, useAppSelector } from './hooks';
import CurrentUserInterface from './interface';
import { FindPeople, Unauthenticated, MyChats, MyContacts, MyProfile, Settings } from './pages';
import { setCurrentUserAction } from './redux/actions/action';
import currentUserSelector from './redux/slice';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);

  useEffect(() => {
    checkIfUserLogedIn().then((response) => {
      const userData = response as CurrentUserInterface;
      dispatch(setCurrentUserAction(userData));
    }).finally(() => {
      setLoading(false)
    })
}, []);

  return (
    <BrowserRouter>
      {loading ? <p>Loading</p> : (
        currentUser.auth ? <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-chats" element={<MyChats />} />
          <Route path="/my-contacts" element={<MyContacts />} />
          <Route path="/find-people" element={<FindPeople />} />
          <Route path="/settings" element={<Settings />} />
        </Routes> :
          <Routes>
            <Route path="/" element={<Unauthenticated />} />
            <Route path="/login" element={<Unauthenticated />} />
          </Routes>
      )}

    </BrowserRouter>
  );
}

export default App;