import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          {/* Nested Routes */}
          <Route path="/category" element={<Category />}>
            <Route path="story" element={<h1>Story Section</h1>} />
            <Route path="novel" element={<h1>Novel Section</h1>} />
          </Route>
          <Route path="/details/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
