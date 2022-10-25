import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Conversation from './pages/Conversation';
import Inbox from './pages/Inbox';
import useAuthCheck from './hooks/useAuthCheck';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute'

function App() {
  const authChecked = useAuthCheck();

  return (
  ! authChecked ? (<div>Checking Authentication....</div>) 
  :
   (
    <Router>
    <Routes>
      <Route path='/' element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path='/inbox' element={<PrivateRoute><Conversation/></PrivateRoute>} />
      <Route path='/inbox/:id' element={<PrivateRoute><Inbox/></PrivateRoute>}/>
    </Routes>
  </Router>
  )
  );
}

export default App;
