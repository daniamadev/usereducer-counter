import React, { useReducer } from 'react';

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    case "reset":
      return initialState
    default:
      return initialState
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="container text-center my-6">
      <h1 className="text-lg m-2">Count: {state.count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={() => dispatch({ type: "decrement" })}>
        Decrement
          </button>
    </div>
  );
}

export default App;
