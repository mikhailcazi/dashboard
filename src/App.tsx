import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./app/dashboard/page";
import Layout from "./Layout";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              {/* <Route path="settings" element={<Settings />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
