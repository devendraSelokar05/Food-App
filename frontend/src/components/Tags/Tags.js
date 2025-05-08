import React from 'react';
import { Link } from 'react-router-dom';
import classes from './tags.module.css';
const API_URL = process.env.REACT_APP_API_BASE_URL;

export default function Tags({ tags=[], forFoodPage }) {
  if (!Array.isArray(tags)) {
    console.error("Expected 'tags' to be an array, but got:", tags);
    return null;
  }
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forFoodPage ? 'start' : 'center',
      }}
    >
      {tags.map(tag => (
        <Link key={tag.name} to={`${API_URL}/tag/${tag.name}`}>
          {tag.name}
          {!forFoodPage && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
