import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Description from './components/Description';
function App() {
  
  return (
    <Router>
        <Routes>
          <Route index path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
        <Routes>
          <Route exact path="/description/:id" element={<Description/>}/>
        </Routes>
    </Router>
  )
}

export default App
