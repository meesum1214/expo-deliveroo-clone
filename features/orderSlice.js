import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.items = [...state.items, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToOrder } = orderSlice.actions

export const selectOrderItems = (state) => state.basket.items

// export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id)

// export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default orderSlice.reducer