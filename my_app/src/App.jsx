import About from "./components/About";
import Counter from "./components/Counter";
import CurrentPage from "./components/CurrentPage";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Post from "./components/Post";
import Stopwatch from "./components/StopWatch";
import {Route,Routes} from "react-router-dom"
const App = ()=>{
return(
  <>
  <Navbar/>
  <Routes>
  <Route path="*" element={<PageNotFound/>}/>
  <Route path="/home" element={<Home/>}>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="/home/post/:category/:id" element={<Post/>}/>
  </Route>
  <Route path="/counter" element={<Counter/>}/>
  <Route path="/current" element={<CurrentPage/>}/> {/* useLocation() */}
  <Route path="/stopwatch" element={<Stopwatch/>}/>
  </Routes>
  </>
)
}
export default App;