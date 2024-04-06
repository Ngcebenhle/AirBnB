import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Componets/Layouts/Header";
import Home from "./Componets/Home";
import Footer from "./Componets/Layouts/Footer";
import SearchPage from "./Componets/SearchPage";
import Modal from "./Componets/Modal";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="search">
            <SearchPage />
          </Route>
        </Switch>

        <Route path="/">
          <Modal />
        </Route>

        <Footer />
      </Router>

      {/* 
         Home
           Header
           banner
              search
            
              card
              footer

        search page
             Header
      
      */}
    </div>
  );
};

export default App;
