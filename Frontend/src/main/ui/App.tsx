import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";
import { AppRoutes } from "@main/router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "@main/components/ui/Footer";
import { Header } from "@main/components/ui/Header";

function App() {
  return (
    <div className="w-100">
      <Header />
      <div className="p-3">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
