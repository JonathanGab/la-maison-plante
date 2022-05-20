import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShoppingList";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Banner />
        <div className="lmj-layout-inner">
          <Cart />
          <ShoppingList />
        </div>
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
