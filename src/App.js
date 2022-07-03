import React from 'react';
import { useEffect } from "react";
import { load } from "./store/moviesSlice";
import { useDispatch } from 'react-redux'

import Screen from './components/screen';
import movieService from './service/movieService';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await movieService();
      dispatch(load(data));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Screen />
    </div>
  );
}

export default App;
