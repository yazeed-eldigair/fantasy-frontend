import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route path="/react-website-1/" exact component={Home} />
          <Route path="/react-website-1/services" component={Services}/>
          <Route path="/react-website-1/products" component={Products}/>
          <Route path="/react-website-1/sign-up" component={SignUp}/>
        </Switch>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
