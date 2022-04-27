import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCash } from '../../slices/cash';
// import { balance } from '../../slices/balance';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    // const [cash, setCash] = useState('');
    const cash = useSelector((state) => state.cash.cash);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const addCashHandler = (e) => {
        if (e.key === 'Enter') {
            dispatch(addCash(e.target.value));
            e.target.value = '';
        }
    };

    return (
        <section className={styles.dashboard}>
            <form action='' onSubmit={submitHandler}>
                <label>Inserted money: {cash} ₽</label>
                <input
                    // onChange={({ target }) => setCash(target.value)}
                    onKeyDown={addCashHandler}
                    name='money'
                    type='text'
                    placeholder='...'
                    defaultValue=''
                    // disabled=''
                ></input>
                <p>
                    Available banknotes: 50, 100, 200 or 500 ₽. The machine gives
                    change in 1, 2, 5 and 10 ₽ coins.
                </p>
            </form>
            <form onSubmit={submitHandler}>
                <label>Success</label>
                {/* <input
                    name='product'
                    type='text'
                    placeholder='...'
                    // value=''
                    // defaultValue='...'
                    // disabled=''
                ></input> */}
            </form>
            <div className={styles.output}>
                <div className={styles.change_output}>
                    <span>10₽: 46 coins</span>
                </div>

                <div className={styles.product_block}>
                    <div className={styles.product}>
                        <h3>Water</h3>
                        <p>Drink</p>
                        <span>40 ₽</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
