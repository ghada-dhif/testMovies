import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Views/Homepage"
import Login from "../Views/Login"
import Movies from '../Views/Movies'
import LikedMovies from 'Views/Movies/likedMovies';
import DislikedMovies from 'Views/Movies/dislikedMovies';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="movies-list" element={<Movies/>}/>
      <Route path="*" element={<Navigate to="/" />}/>
      < Route path="likedMovies" element={<LikedMovies/>} />
      <Route path="dislikedMovies" element={<DislikedMovies/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;