import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AdvertsPage from './Components/Adverts/AdvertsPage';
import AdminLogin from './Components/Admin/AdminLogin';
import RegisterAdverts from './Components/RegisterAdverts';
import LegalNotices from './Components/Footer/LegalNotices';
import Advert from './Components/Adverts/Advert';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';
import Download from './Components/Footer/Download';
import CtxAdvert from './Components/CtxAdvert';
import './Components/css/communCSS.css';

const App = () => {
  const [adverts, setAdverts] = useState([]);

  return (
    <Router>
      <div className="App" >
        <CtxAdvert.Provider value={[adverts, setAdverts]}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/advertsPage" component={AdvertsPage} />
            <Route path="/advert/:id" component={Advert} />
            <Route path="/adminLogin" component={AdminLogin} />
            <Route path="/registerAdverts" component={RegisterAdverts} />
            <Route path="/legalNotices" component={LegalNotices} />
            <Route path="/download" component={Download} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CtxAdvert.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
