import React from 'react';
import './PostItem.css';

export default function PostList({ post }) {
  return (
    <li>
      <p>
        No. {post.id} - {post.title}
      </p>
      <p>{post.body}</p>
    </li>
  );
}
