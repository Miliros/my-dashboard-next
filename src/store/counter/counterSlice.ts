import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
  bag: number,
  tshirt:number,
  cap:number
}

const initialState: CounterState = {
  count: 1,
  isReady: false,
  cap:1,
  bag:1, 
  tshirt:1
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.isReady = true;
    },
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload === 0) action.payload = 0;
      state.count = action.payload;
    },
    initCounterStateCap(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.isReady = true;
    },
    addOneCap(state) {
      state.cap++;
    },
    addOneBag(state) {
      state.bag++;
    },
    addOneTshirt(state) {
      state.tshirt++;
    },

  },
});

export const { addOne, addOneBag, addOneCap, addOneTshirt } = CounterSlice.actions;

export default CounterSlice.reducer;
