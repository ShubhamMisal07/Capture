import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CollagePage from "./pages/CollagePage";
import PhotosPage from "./pages/PhotosPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-0">
        <Routes>
          <Route path="/" element={<CollagePage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
