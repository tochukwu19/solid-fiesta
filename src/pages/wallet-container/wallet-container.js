import React from 'react'
import './wallet-container.css'
import Wallet from "../../components/wallet/wallet"
import Hero from "../../components/hero/hero"

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><p>Github</p></li>
          <li><p>Docs</p></li>
          <li className="logo"><img src={require("../../assets/walletconnect.PNG")} alt="Logo"/></li>
          <li><p>Wallets</p></li>
          <li><p>Apps</p></li>
        </ul>
      </nav>
      <Hero />
      <div className="wallet-container">
          <Wallet name="MetaMask" img="metamask.PNG"/>
          <Wallet name="MEW Wallet" img="mew.PNG"/>
          <Wallet name="Trust Wallet" img="Trust.PNG"/>
          <Wallet name="Wallet Connect" img="walletconnect.PNG"/>
          <Wallet name="Coinbase Wallet" img="Coinbase.PNG"/>
          <Wallet name="Atomic Wallet" img="atomic.PNG"/>
          <Wallet name="Binance Smart Chain" img="binance.PNG"/>
          <Wallet name="BNB" img="bnb.PNG"/>
          <Wallet name="Polkadot" img="polkadot.PNG"/>
          <Wallet name="XRP" img="xrp.PNG"/>
          <Wallet name="Stellar" img="stellar.PNG"/>
          <Wallet name="Tezos" img="tezos.PNG"/> 
          <Wallet name="Theta" img="theta.PNG"/>
          <Wallet name="Tron" img="tron.PNG"/>
          <Wallet name="Cosmos" img="cosmos.PNG"/>
          <Wallet name="Kava" img="kava.PNG"/>  
           <Wallet name="Filecoin" img="filecoin.PNG"/>
          <Wallet name="Solana" img="solana.PNG"/>  
           <Wallet name="Ethereum Classic" img="ethereum.PNG"/>
          <Wallet name="Zilliqa" img="ziliqua.PNG"/>  
           <Wallet name="Elrond" img="elrond.PNG"/>
          <Wallet name="Waves" img="waves.PNG"/> 
           <Wallet name="Icon" img="icon.PNG"/>
          <Wallet name="Ontology" img="ontology.PNG"/> 
           <Wallet name="Harmony" img="harmony.PNG"/>
          <Wallet name="Parasiq" img="parasiq.PNG"/>         
      </div>
      <footer>
        <div className="container">
          <ul>
            <li>Discord</li>
            <li>Telegram</li>
            <li>Twitter</li>
            <li>Github</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
