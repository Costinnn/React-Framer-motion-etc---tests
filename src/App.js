import "./App.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import PageTwo from "./components/page2";
import PageThree from "./components/page3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="page2" element={<PageTwo />}></Route>
        <Route path="page3" element={<PageThree />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
