import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCash } from '../../slices/money';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [success, setSuccess] = useState(false);
    const [tencoin, setTencoin] = useState(null);
    const [fivecoin, setFivecoin] = useState(null);
    const [messageMoney, setMessageMoney] = useState('Insert money');
    const [messageProduct, setMessageProduct] = useState('/');

    const balance = useSelector((state) => state.money.balance);
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const addCashHandler = (e) => {
        if (e.key === 'Enter') {
            const isValidateCash = [50, 100, 200, 500].some((item) => {
                return item === +e.target.value;
            });

            if (isValidateCash) {
                dispatch(addCash(e.target.value));
            } else {
                setMessageMoney('Money is not accepted');
            }
        }
    };

    useEffect(() => {
        if (balance) {
            setMessageMoney(`Inserted money: ${balance} ₽`);
        } else {
            setMessageMoney('Insert money');
        }
    }, [balance]);

    const getDelivery = (price) => {
        const coinsCents = [1, 2, 5, 10];
        const getChange = (amountInCents) => {
            return coinsCents
                .reverse()
                .map((coin) => {
                    let amountCoin = Math.floor(amountInCents / coin);
                    amountInCents -= amountCoin * coin;
                    return amountCoin;
                })
                .reverse();
        };
        if (balance > price) {
            let delivery = getChange(balance - price);
            setTencoin(delivery[3]);
            setFivecoin(delivery[2]);
            setSuccess(true);
        } else {
            setMessageProduct('Not enough money');
        }
    };

    const selectProductHandler = (e) => {
        if (e.key === 'Enter') {
            let productIdArray = products.map((product) => product.id);

            const isValidateId = productIdArray.some((item) => {
                return item === +e.target.value;
            });

            if (isValidateId) {
                let product = products.find(
                    (product) => product.id === +e.target.value
                );
                setSelectedProduct(product);

                let price = products.find(
                    (product) => product.id === +e.target.value
                ).price;

                e.target.value = '';

                getDelivery(price);
            } else {
                setMessageProduct('Money is not accepted');
            }
        }
    };

    useEffect(() => {
        if (success) {
            setMessageProduct('Success');
        } else {
            setMessageProduct('Choose product');
        }
    }, [success]);

    const resetHandler = () => {
        window.location.reload();
    };

    return (
        <section className={styles.dashboard}>
            <form onSubmit={submitHandler}>
                <label>{messageMoney}</label>
                <input
                    onKeyDown={addCashHandler}
                    name='money'
                    type='text'
                    placeholder='...'
                    defaultValue=''
                    disabled={success}
                ></input>
                <p>
                    Available banknotes: 50, 100, 200 or 500 ₽. The machine gives
                    change in 1, 2, 5 and 10 ₽ coins.
                </p>
            </form>

            <form onSubmit={submitHandler}>
                <label>{messageProduct}</label>
                <input
                    onKeyDown={selectProductHandler}
                    name='product'
                    type='text'
                    placeholder='...'
                    defaultValue=''
                    disabled={success}
                ></input>
            </form>

            <div className={styles.output}>
                <div className={styles.change_output}>
                    {tencoin ? <span>10₽: {tencoin} coins</span> : null}
                    {fivecoin ? <span>5₽: {fivecoin} coins</span> : null}
                </div>

                <div className={styles.product_block} onClick={resetHandler}>
                    {success ? (
                        <>
                            <div className={styles.product}>
                                <h3>{selectedProduct.title}</h3>
                                <p>{selectedProduct.description}</p>
                                <span>{selectedProduct.price} ₽</span>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
