import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';

import LogIn from './Pages/LogIn/LogIn/LogIn';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
