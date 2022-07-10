import { createContext, useContext } from 'react';

const ACTION_TYPES = {};

let initialeState = [
  {
    id: 1,
  },
];

const State = createContext(initialeState);

const useRestaurantsContext = () => useContext(State);

function reducer(state, action) {}

export { reducer, initialeState, State, useRestaurantsContext, ACTION_TYPES };
