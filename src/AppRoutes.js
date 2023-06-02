import { BrowserRouter, Outlet, Route, Routes, useOutlet} from "react-router-dom";
import Body from "./components/Body";
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Articles from "./pages/Articles";
import CurrentArticle from "./pages/CurrentArticle";




function App() {


  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} >
          <Route index element={<Home />} />
          <Route path='/exames' element={<Exams />} />
          <Route path='/artigos' element={<Articles />} >
            
          </Route>
         <Route path=':id' element={<CurrentArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
