import React from 'react';
import styles from './Display.module.scss';
import { useSelector } from 'react-redux';

const Display = () => {
    const products = [
        { id: 1, title: "Lay's", description: 'Chips', price: 100 },
        { id: 2, title: 'Coca-Cola', description: 'Drink', price: 180 },
        { id: 3, title: 'Light', description: 'Rusks', price: 220 },
        { id: 4, title: 'Chaka', description: 'Peanut', price: 600 },
        { id: 5, title: 'Water', description: 'Drink', price: 5 },
        { id: 6, title: 'Fanta', description: 'Cold drink', price: 400 },
        { id: 7, title: 'Nutella', description: 'Chocolate paste', price: 550 },
    ];

    const cash = useSelector((state) => state.cash.cash);

    return (
        <section className={styles.display}>
            <ul className={styles.list_item}>
                {products.map((product) => (
                    <li
                        key={product.id}
                        className={`${styles.item} ${
                            product.price <= cash ? styles.item_active : null
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
