import { useState } from "react";
import styles from './Counter.module.scss';

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	return (
		<>
			<div>Counter {count}</div>
			<button className={styles.btn} onClick={increment}>Click me</button>
			<button className={styles.grreen} onClick={() => setCount(0)}>Start again</button>
		</>
	);
};

export default Counter;
