import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Page from "./app/dashboard/page";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
