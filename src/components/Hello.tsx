import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <h1>Sort out</h1>
      <h1>Sort out</h1>
      <h1>Sort out</h1>
      <h1 className="tomato">Sort out</h1>
      <h1 className="green">Sort out</h1>
      <Link to="/">home</Link>
    </div>
  )
}

export default Hello;