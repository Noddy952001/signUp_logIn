import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login"
import {Signup} from "./components/Signup"
          
import {UserAuthcontextProvider} from "./components/ProtectedRoute"
import {Routes , Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <UserAuthcontextProvider>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </UserAuthcontextProvider>
    </div>
  );
}

export default App;
