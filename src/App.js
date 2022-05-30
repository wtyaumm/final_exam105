import "./App.css";
import { HomePage } from "./components/HomePage";
import { AboutMePage } from "./components/AboutMePage";
import { PhotoGalleryPage } from "./components/PhotoGalleryPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <HomePage />
          <AboutMePage />
          <PhotoGalleryPage />
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
