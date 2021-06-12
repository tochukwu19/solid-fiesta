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
          <li className="logo"><img src={require("../../assets/Capture.PNG")} alt="Logo"/></li>
          <li><p>Wallets</p></li>
          <li><p>Apps</p></li>
        </ul>
      </nav>
      <Hero />
      <div className="wallet-container">
          <Wallet name="Rainbow" img="2.PNG"/>
          <Wallet name="Trust" img="3.PNG"/>
          <Wallet name="Argent" img="4.PNG"/>
          <Wallet name="Metamask" img="5.PNG"/>
          <Wallet name="Gnosis Safe Multisig" img="6.PNG"/>
          <Wallet name="Crypto.com | DeFi Wallet" img="7.PNG"/>
          <Wallet name="Pillar" img="8.PNG"/>
          <Wallet name="imToken" img="9.PNG"/>
          <Wallet name="TokenPocket" img="10.PNG"/>
          <Wallet name="Walleth" img="11.PNG"/>
          <Wallet name="Atomic" img="12.PNG"/>
          <Wallet name="Authereum" img="13.PNG"/>
          <Wallet name="Huobi Wallet" img="14.PNG"/>
          <Wallet name="Eidoo" img="15.PNG"/>
          <Wallet name="Zelcore" img="16.PNG"/>
          <Wallet name="Nash" img="17.PNG"/>
          <Wallet name="Coinomi" img="18.PNG"/>
          <Wallet name="GridPlus" img="19.PNG"/>
          <Wallet name="CoolWallet S" img="20.PNG"/>
          <Wallet name="Alice" img="21.PNG"/>
          <Wallet name="AlphaWallet" img="22.PNG"/>
          <Wallet name="Tokenary" img="23.PNG"/>
          <Wallet name="Safepal" img="24.PNG"/>
          <Wallet name="Equal" img="25.PNG"/>
          <Wallet name="Infinito" img="26.PNG"/>
          <Wallet name="MathWallet" img="27.PNG"/>
          <Wallet name="MYKEY" img="28.PNG"/>
          <Wallet name="Spatium" img="29.PNG"/>
          <Wallet name="wallet.io" img="30.PNG"/>
          <Wallet name="Infinity Wallet" img="31.PNG"/>
          <Wallet name="Ownbit" img="32.PNG"/>
          <Wallet name="EasyPocket" img="33.PNG"/>
          <Wallet name="ONTO" img="34.PNG"/>
          <Wallet name="Bridge Wallet" img="35.PNG"/>
          <Wallet name="SparkPoint" img="36.PNG"/>
          <Wallet name="ViaWallet" img="37.PNG"/>
          <Wallet name="Coin98" img="38.PNG"/>
          <Wallet name="BitKeep" img="39.PNG"/>
          <Wallet name="Vision" img="40.PNG"/>
          <Wallet name="SWFT Wallet" img="41.PNG"/>
          <Wallet name="PeakDeFi Wallet" img="42.PNG"/>
          <Wallet name="XDC Wallet" img="43.PNG"/>
          <Wallet name="Unstoppable Wallet" img="44.PNG"/>
          <Wallet name="safepal wallet" img="45.PNG"/>
          <Wallet name="coinbase Wallet" img="46.PNG"/>
          <Wallet name="Binance Wallet" img="47.PNG"/>
          <Wallet name="MoriX Wallet" img="48.PNG"/>
          <Wallet name="Midas Wallet" img="49.PNG"/>          
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
