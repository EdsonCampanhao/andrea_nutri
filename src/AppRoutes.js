import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Home from "./pages/Home";
import Exams from "./pages/Exams";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} >
          <Route index element={<Home />} />
          <Route path='/exames'element={<Exams/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
