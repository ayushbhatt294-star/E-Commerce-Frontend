import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

 const addToCart = (product) => {
  setCart((previousCart) => {

    const existingProduct = previousCart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {
      return previousCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }

        return item
      })
    }

    return [...previousCart, { ...product, quantity: 1 }]
  })
}

const removeFromCart = (productId) => {
  setCart((previousCart) => {
    return previousCart.filter((item) => item.id !== productId)
  })
}

const decreaseQuantity = (productId) => {
  setCart((previousCart) => {
    return previousCart
      .map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }

        return item
      })
      .filter((item) => item.quantity > 0)
  })
}
  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext