import React, { useState, useEffect } from 'react';

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);

  useEffect(async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <p>사진제목: {photo.title}</p>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </>
  );
}
