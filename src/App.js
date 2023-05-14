import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BakeryContainer from './components/BakeryContainer';
import ErrorPage from './components/ErrorPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<BakeryContainer />} />
        <Route path="/products" exact element={<div>Products Page</div>} />
        <Route path="/classes" exact element={<div>Classes Page</div>} />
        <Route path="/recipes" exact element={<div>Recipes Page</div>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
