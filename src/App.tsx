import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { FindPeople, Login, MyChats, MyContacts, MyProfile, Settings } from './pages';
import { setCurrentUserAction } from './redux/actions/action';
import currentUserSelector from './redux/slice';


function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  useEffect(() => {
    dispatch(setCurrentUserAction('Alisa'))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyProfile />}/>
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-chats" element={<MyChats />} />
        <Route path="/my-contacts" element={<MyContacts />} />
        <Route path="/find-people" element={<FindPeople />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
