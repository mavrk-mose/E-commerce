import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Description from './components/Description';
function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Routes>
          <Route path="/description" element={<Description/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default App
