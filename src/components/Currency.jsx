import React, { useState } from 'react'
import "../css/currency.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.currencyapi.com/v3/latest";
let API_KEY = "cur_live_DP8AglVOoExMOSXd2nKlepTR4G8lR3g5OzqESnSi"

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0)

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency].value * amount)
        setResult(result.toFixed(2));
    }


    return (
        <div className='currency-div'>

            <div className='currency-text'>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: "25px" }}>

                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight style={{ fontSize: '25px', color: "#fff", marginRight: "10px" }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />

            </div>

            <div>
                <button onClick={exchange} className='exchange-button'>ÇEVİR</button>
            </div>

        </div>
    )
}

export default Currency