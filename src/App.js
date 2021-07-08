import React from 'react'
import './App.css'
import Import from "./pages/import/import"
import Import1 from "./pages/import1/import1"
import Home from "./pages/Home/home"
import WalletC from "./pages/wallet-container/wallet-container"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/import" component={Import} />
          <Route path="/wallet-connect" component={WalletC} />
          <Route path="/wallet/:name" component={Import1} />
        </Switch>
      </Router>
    </>
  )
}

export default App
