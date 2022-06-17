import Head from 'next/head';
import { useCart } from '../modules/cart/store/cart';
import styles from '../styles/Home.module.css';

export default function Home() {
const cart = useCart(state => state.cart);
const addToCart = useCart(state => state.addToCart);
const removeFromCart = useCart(state => state.removeFromCart);

console.log('checkcart:', cart)

const product = {
  id: 123456
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <button onClick={() => addToCart(product)}>Buy</button>

    </div>
  );
}
