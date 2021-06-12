import React from 'react'
import "./wallet.css"
import { Link } from "react-router-dom"

export default function Wallet(props) {
    return (
        <Link to={`/wallet/${props.name}`} className="link">
            <div className="wallet">
                <div className="container">
                    <img src={require(`../../assets/${props.img}`)} alt="wallet"/>
                    <p>{props.name}</p>
                </div>
            </div>
        </Link>
    )
}
