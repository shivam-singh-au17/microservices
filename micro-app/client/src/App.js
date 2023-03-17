import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className='container my-3'>
      <h1 >Create Post:</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
