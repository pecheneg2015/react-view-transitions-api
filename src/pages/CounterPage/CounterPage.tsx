import {useState} from "react";

import styles from './CounterPage.module.css';

export const CounterPage = () => {
    const [val, setVal] = useState(0)

    const onIncCLick = ()=>{
        // @ts-ignore
        if (document.startViewTransition) {
            // @ts-ignore
            const transition = document.startViewTransition(() => setVal((prev)=>++prev));
            transition.ready.then(() => {
                document.documentElement.animate(
                    {
                        opacity:[1,0,0],
                        transform: ['rotateX(0deg)','rotateX(360deg)']
                    },
                    {
                        duration: 250,
                        easing: 'ease-in',
                        pseudoElement: '::view-transition-old(count-item)',
                    }
                );
                document.documentElement.animate(
                    {
                        opacity:[0,1,1],
                        transform: ['rotateX(180deg)','rotateX(360deg)']
                    },
                    {
                        duration:250,
                        easing: 'ease-in',
                        pseudoElement: '::view-transition-new(count-item)',
                    }
                );
            });
        } else {
            setVal((prev)=>++prev);
        }


    }
    const onDecCLick = ()=>setVal((prev)=>--prev)

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onDecCLick}>-</button>
            <span className={styles.count}>{val}</span>
            <button className={styles.button}  onClick={onIncCLick}>+</button>
        </div>
    )
}
