import { useState, type CSSProperties } from "react";
// import './ItemCounter.css';import './ItemCounter.module.css';
import styles from './ItemCounter.module.css';

interface ItemCounterProps {
    productName: string;
    quantity: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: ItemCounterProps) => {

    const [counter, setCounter] = useState(quantity);

    const handleClick = (type: 'add' | 'remove') => {
        if (type === 'add') {
            setCounter(counter + 1);
        } else {
            setCounter(counter - 1);
        }
    }

    const stylesProperties: CSSProperties = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: counter > 5 ? 'green' : 'red',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    }

    return (
        <>
            <div>
                <h1>{productName}</h1>
                {/* <div className="item-counter"> */}
                <div className={styles['item-counter']}>
                    <button onClick={() => handleClick('remove')}>-1</button>
                    <p
                        style={{ color: counter > 5 ? 'green' : 'red' }}
                    >{counter}</p>
                    <button onClick={() => handleClick('add')}>+1</button>
                </div>
            </div>
        </>
    )
}