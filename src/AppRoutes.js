import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Articles from "./pages/Articles";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} >
          <Route index element={<Home />} />
          <Route path='/exames'element={<Exams/>} />
          <Route path='/artigos' element={<Articles/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
