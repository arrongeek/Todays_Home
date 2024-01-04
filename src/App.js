import logo from './logo.svg';
import Header from './Components/Header/Header'
import './App.css';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<main />} />
        </Routes>
      </div>
  );
}

export default App;
