import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"
import Home from './components/Home';
import AddOrder from './components/AddOrder';
import ShowItems from './components/ShowItems';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/home/order' element={<AddOrder></AddOrder>}></Route>
          <Route path='/orderData' element={<ShowItems></ShowItems>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
