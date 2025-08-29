"use client";
import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartCtx = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((it) => it.id === action.item.id);
      let items;
      if (existing) {
        items = state.items.map((it) =>
          it.id === action.item.id ? { ...it, qty: it.qty + 1 } : it
        );
      } else {
        items = [...state.items, { ...action.item, qty: 1 }];
      }
      return { ...state, items };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((it) => it.id !== action.id) };
    case "QTY":
      return {
        ...state,
        items: state.items.map((it) =>
          it.id === action.id ? { ...it, qty: Math.max(1, action.qty) } : it
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      return action.state || state;
    default:
      return state;
  }
}

const initial = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  // 🔹 UI state for MiniCart open/close
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => {
    setIsCartOpen(true);
    // keep custom-event behavior for any legacy listeners
    document.dispatchEvent(new CustomEvent("open-minicart"));
  };
  const closeCart = () => {
    setIsCartOpen(false);
    document.dispatchEvent(new CustomEvent("close-minicart"));
  };
  const toggleCart = () => (isCartOpen ? closeCart() : openCart());

  // Bridge: listen to custom events and reflect into state (back-compat)
  useEffect(() => {
    const onOpen = () => setIsCartOpen(true);
    const onClose = () => setIsCartOpen(false);
    document.addEventListener("open-minicart", onOpen);
    document.addEventListener("close-minicart", onClose);
    return () => {
      document.removeEventListener("open-minicart", onOpen);
      document.removeEventListener("close-minicart", onClose);
    };
  }, []);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      if (raw) dispatch({ type: "HYDRATE", state: JSON.parse(raw) });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(state));
    } catch {}
  }, [state]);

  const itemCount = state.items.reduce((n, it) => n + it.qty, 0);
  const subtotal = state.items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const api = useMemo(
    () => ({
      items: state.items,
      itemCount,
      subtotal,
      addItem: (item) => dispatch({ type: "ADD", item }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      updateQuantity: (id, qty) => dispatch({ type: "QTY", id, qty }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      // UI controls
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
    }),
    [state.items, itemCount, subtotal, isCartOpen]
  );

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export const useCart = () => useContext(CartCtx);
