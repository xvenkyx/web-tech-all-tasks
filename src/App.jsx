import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TableOne from "./pages/tables/TableOne";
import Form from "./pages/forms/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/table1" element={<TableOne />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
