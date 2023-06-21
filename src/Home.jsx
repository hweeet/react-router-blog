import React from "react";
import './App.css';
import Feed from "./Feed";
import posts from "./posts";

const Home = () => {

    return (
      <main className='Home'>  
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{marginTop: '2rem'}}>
            No posts to display.
          </p>
        )}
      </main>  
    )
};

export default Home;