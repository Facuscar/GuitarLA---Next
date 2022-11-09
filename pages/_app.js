import { useState, useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState(typeof window !== 'undefined' ? (JSON.parse(localStorage.getItem('cart')) || []) : null);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

  const addToCart = (guitar) => {
    setCart((cart) => {
        if(cart.some(guitarState => guitarState.id === guitar.id)) {
          return cart.map(guitarState => {
            if(guitarState.id === guitar.id) {
                guitarState.amount += guitar.amount;
            }
            return guitarState;
          });
        }
        return [...cart, guitar];
    })
}

  const updateAmount = (guitar) => {
      const updatedCart = cart.map(guitarState => {
          if (guitarState.id === guitar.id) {
              guitarState.amount = guitar.amount;
          }

          return guitarState;
      })

      setCart(updatedCart);
  }

  const deleteGuitar = (id) => {
      setCart(cart => {
          return cart.filter( (guitar) => guitar.id != id)
      });
  }

  return <Component {...pageProps} cart={cart } addToCart={addToCart} deleteGuitar={deleteGuitar} updateAmount={updateAmount} />
}

export default MyApp
