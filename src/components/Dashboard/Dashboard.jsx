import React from 'react';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <section className={styles.dashboard}>
            <form action=''>
                <label>Inserted money: 500₽</label>
                <input
                    name='money'
                    type='text'
                    placeholder='...'
                    value='500'
                    disabled=''
                ></input>
                <p>
                    Available banknotes: 50, 100, 200 or 500 ₽. The machine gives
                    change in 1, 2, 5 and 10 ₽ coins.
                </p>
            </form>
            <form>
                <label>Success</label>
                <input
                    name='product'
                    type='text'
                    placeholder='...'
                    value=''
                    disabled=''
                ></input>
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
