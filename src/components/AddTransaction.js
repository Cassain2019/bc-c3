import React, {useState, useContext} from 'react';

import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>Description</label>
                    <input id="desc1" type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter Text ..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor='transactionamount'>Transaction Amount</label>
                    <input id="tamt1" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                         placeholder="Transaction Amount"></input>
                </div>
                <button id="btn1" className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
