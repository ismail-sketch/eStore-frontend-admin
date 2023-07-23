import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Signin } from './containers/Signin/Signin';
import { Signup } from './containers/Signup/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<PrivateRoute/>}>
            <Route path='/' element={<Home/>}/>
          </Route>

          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
