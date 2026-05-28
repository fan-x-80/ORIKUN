import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import BestSellers from './pages/BestSellers';
import IntentionPage from './pages/IntentionPage';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import Bracelets from './pages/Bracelets';
import Necklaces from './pages/Necklaces';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/bracelets" element={<Bracelets />} />
                <Route path="/necklaces" element={<Necklaces />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/bestsellers" element={<BestSellers />} />
                <Route path="/intention/:intentionId" element={<IntentionPage />} />
                <Route path="/intention" element={<IntentionPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <Toast />
          </div>
        </Router>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
