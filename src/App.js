import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Contact, Admin, NoPage, Hosting } from "./pages";
import ScrollToTop from "./helpers/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
          {/* Will change back to NoPage ^^^ */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
