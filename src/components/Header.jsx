import style from './Todo.module.css';

import React from 'react';

export default function Header() {
  return (
    <div className={style.header}>
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}
