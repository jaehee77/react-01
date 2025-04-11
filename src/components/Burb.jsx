import React from 'react';

export default function Burb({ sw }) {
  const burb = sw === 'OFF' ? 'gray' : 'yellow';
  return (
    <h1 style={{ backgroundColor: burb }}>{sw === 'OFF' ? 'OFF' : 'ON'}</h1>
  );
}
