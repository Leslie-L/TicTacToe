import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Game from "./Pages/Game/"
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <HashRouter>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/game" element={<Game/>}/>
       <Route path="*" element={<NotFound/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
