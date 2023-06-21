
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Root from './Root';

  

function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  

  

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home/>}/>
      <Route path='/post' element={<NewPost />} />
      <Route path='/post/:id' element={<PostPage />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Missing />} />
    </Route>
  ))  

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
