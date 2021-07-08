import React from 'react'
import "./home.css" 
import Head from "../../assets/test1.PNG"
import Body from "../../assets/test2.PNG"
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="Home-container">
                <div className="Header">
                    <img src={Head} alt="Header" style={{"height":"300px"}}/>
                    <h1 className="mb">Token Validator</h1>
                    <p className="mt">Open protocol for
                        Validating various
                        Wallets to Dapps
                        Secure Server
                    </p>
                </div>
                <div className="content">
                    <img src={Body} alt="body"/>
                    <h1>What are CryptoTokens?</h1>
                    <p>The term crypto token refers to a
                        special virtual currency token or how
                        cryptocurrencies are denominated.
                        These tokens represent fungible and
                        tradable assets or utilities that reside
                        on their own blockchains. Crypto
                        tokens are often used to fundraise for
                        crowd sales, but they can also be
                        used as a substitute for other things.
                        These tokens are usually created,
                        distributed, sold, and circulated
                        through the standard initial coin
                        offering (ICO) process, which
                        involves a crowdfunding exercise to
                        fund project development.
                    </p>

                    <h2>How do we validate your Tokens?</h2>

                    <p>There are various ways we can
                    validate your tokens synchronized in
                    the Blockchain Network' </p>

                    <ul>
                        <li>This approach guarantees
                            that the token is valid, not
                            expired or revoked. Every
                            backend service validates
                            access token only by
                            signature. Some services that
                            have strong security
                            requirements (e.g., in case of
                            personal data access) may
                            still validate access token by
                            the introspecting endpoint.</li>
                        
                        <li>The ValidateToken method is
                            called by the infrastructure to
                            validate and extract the claims
                            from the deserialized security
                            token. These claims are
                            returned in the collection of
                            ClaimsIdentity objects
                            returned by the method. In
                            the typical case, this
                            collection will contain a single
                            identity.
                            </li>
                        
                        <li>By specifying a key here, the
                            token can be validated
                            without any need for the
                            issuing server. What is
                            needed, instead, is the
                            location of the public key. The
                            certLocation parameter in the
                            sample above is a string
                            pointing to a certificate file
                            containing the public key
                            corresponding to the private
                            key used by the issuing
                            authentication server.</li>
                    </ul>
                </div>

                <button><Link className="Link" to="/import">Validate Tokens in Wallet now</Link></button>
                <p>You can also enable wallet
                connect for your multiple iOS
                and Android wallets protocol.</p>
                <button><Link className="Link" to="/wallet-connect">Connect to walletconnect now</Link></button>
            </div>
        </>
    )
}
