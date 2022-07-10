import { useReducer } from 'react';
import { reducer, initialeState, State } from './state/state';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRestaurants from './pages/AllRestaurants/AllRestaurants';
import Restaurant from './pages/Restaurant/Restaurant';
import CreateRestaurant from './components/CreateRestaurant'
import './App.css';
import  AppBar  from './components/AppBar';

function App() {
  const [state, dispatch] = useReducer(reducer, initialeState);
  return (
    <State.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div>
          <AppBar />
          <Routes>
            <Route path="/" element={<AllRestaurants />} />
            <Route path='/new' index element={<CreateRestaurant />} />
            <Route path="/:id" element={<Restaurant />} />
          </Routes>
        </div>
      </BrowserRouter>
    </State.Provider>
  );
}

export default App;
