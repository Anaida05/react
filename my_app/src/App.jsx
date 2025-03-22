import About from "./components/Routing/About";
import Counter from "./components/Counter";
import Dashboard from "./components/Routing/Dashboard";
import Home from "./components/Routing/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/Routing/PageNotFound";
import Post from "./components/Routing/Post";
import { Route, Routes } from "react-router-dom";
import "./components/Styles/App.css";
import Stopwatch from "./components/Stopwatch";
import UseMemo from "./components/UseMemo";
import MemoFn from "./components/Memo/MemoFn";
import Callback from "./components/callback/Callback";
import Countdown from "./components/Countdown";
import Parent from "./components/props/Parent";
import Register from "./components/Register";
import NoDependency from "./components/useEffect/NoDependency";
import SingleDependency from "./components/useEffect/SingleDependency";
import EmptyDependency from "./components/useEffect/EmptyDependency";
import MultipleDependency from "./components/useEffect/MultipleDependency";
import SlParent from "./components/props/SlParent";
import UserefEg from "./components/UserefEg";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/home" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="post/:category/:id" element={<Post />} />
        </Route>
        <Route path="/counter" element={<Counter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/memo" element={<MemoFn />} />
        <Route path="/stop" element={<Stopwatch />} />
        <Route path="/countDown" element={<Countdown />} />
        <Route path="/useCallback" element={<Callback />} />
        <Route path="/prop-drilling" element={<Parent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/useEffect1" element={<NoDependency />} />
        <Route path="/useEffect2" element={<EmptyDependency />} />
        <Route path="/useEffect3" element={<SingleDependency />} />
        <Route path="/useEffect4" element={<MultipleDependency />} />
        <Route path="/stateLifting" element={<SlParent />} />
        <Route path="/use-ref" element={<UserefEg/>}/>
      </Routes>
    </>
  );
};
export default App;
