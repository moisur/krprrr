// utils/cartUtils.ts

import { CartItem } from '../components/cart/CartContext'

// Fonction pour ajouter un article au panier
export const handleAddToCart = (
  cart: CartItem[],
  item: CartItem,
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(
      i => i.id === item.id && i.size === item.size && i.color === item.color
    )
    if (existingItem) {
      return prevCart.map(i => 
        i.id === item.id && i.size === item.size && i.color === item.color
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      )
    } else {
      return [...prevCart, item]
    }
  })
}

// Fonction pour modifier la quantité d'un article dans le panier
export const updateCartItemQuantity = (
  cart: CartItem[],
  itemId: string,
  size: string,
  color: string,
  newQuantity: number,
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === itemId && item.size === size && item.color === color
        ? { ...item, quantity: newQuantity }
        : item
    )
  )
}

// Fonction pour supprimer un article du panier
export const removeCartItem = (
  cart: CartItem[],
  itemId: string,
  size: string,
  color: string,
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCart(prevCart =>
    prevCart.filter(
      item => !(item.id === itemId && item.size === size && item.color === color)
    )
  )
}

// Fonction pour calculer le total du panier
export const calculateCartTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

// Fonction pour obtenir le nombre total d'articles dans le panier
export const getTotalItems = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

// Fonction pour vider le panier
export const clearCart = (
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
) => {
  setCart([])
}