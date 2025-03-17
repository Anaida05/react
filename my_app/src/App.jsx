import About from "./components/About";
import Countdown from "./components/Countdown";
import Counter from "./components/Counter";
import CurrentPage from "./components/CurrentPage";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Post from "./components/Post";
import {Route,Routes} from "react-router-dom";
import "./components/Styles/App.css"
import Stopwatch from "./components/Stopwatch";
import UseMemo from "./components/UseMemo";
import MemoFn from "./components/Memo/MemoFn";
import Callback from "./components/callback/Callback";
const App = ()=>{
return(
  <>
  <Navbar/>
  <Routes>
  <Route path="*" element={<PageNotFound/>}/>
  <Route path="/" element={<Home/>}>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="/home/post/:category/:id" element={<Post/>}/>
  </Route>
  <Route path="/counter" element={<Counter/>}/>
  <Route path="/current" element={<CurrentPage/>}/> {/* useLocation() */}
  <Route path="/stopwatch" element={<Stopwatch/>}/>
  <Route path="/countdown" element={<Countdown/>}/>
  <Route path="/useMemo" element={<UseMemo/>}/>
  <Route path="/memo" element={<MemoFn/>} />
  <Route path="/useCallback" element={<Callback/>}/>
  </Routes>
  </>
)
}
export default App;