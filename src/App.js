import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Detail } from './components/Detail';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
   
  return (
    <div className="App "  >
      <AppContext.Provider value={{
       
        search, setSearch,
        error, setError
        }}> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:paramsName' element={<Detail />} />
        </Routes>  
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
