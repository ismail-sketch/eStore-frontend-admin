import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Signin } from './containers/Signin/Signin';
import { Signup } from './containers/Signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
