import React from 'react';
import styles from './Display.module.scss';
import { useSelector } from 'react-redux';

const Display = () => {
    const balance = useSelector((state) => state.money.balance);
    const products = useSelector((state) => state.products);

    return (
        <section className={styles.display}>
            <ul className={styles.list_item}>
                {products.map((product) => (
                    <li
                        key={product.id}
                        className={`${styles.item} ${
                            product.price <= balance ? styles.item_active : null
                        }`}
                    >
                        <h3>{product.title}</h3>
                        <p className={styles.description}>{product.description}</p>
                        <div className={styles.price}>
                            <span>{product.price} ₽</span>
                            <span className={styles.id}>{product.id}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Display;
