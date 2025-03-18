import About from "./components/About";
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
import Countdown from "./components/Countdown"
import Parent from "./components/props/Parent";
import Register from "./components/context/Register";
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
  <Route path="/countdown" element={<Countdown/>}/>
  <Route path="/useMemo" element={<UseMemo/>}/>
  <Route path="/memo" element={<MemoFn/>} />
  <Route path="/stop" element={<Stopwatch/>} />
  <Route path="/countDown" element={<Countdown/>} />
  <Route path="/useCallback" element={<Callback/>}/>
  <Route path="/prop-drilling" element={<Parent/>}/>
  <Route path="/register" element={<Register/>}/>
  </Routes>
  </>
)
}
export default App;