import React from 'react'
import './App.css'
import WalletContainer from "./pages/wallet-container/wallet-container"
import Import from "./pages/import/import"
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
          <Route path="/" exact component={WalletContainer} />
          <Route path="/wallet/:name" component={Import} />
        </Switch>
      </Router>
    </>
  )
}

export default App
