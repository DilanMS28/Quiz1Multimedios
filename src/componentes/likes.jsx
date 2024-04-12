import React, { useState } from 'react'

function Likes() {
  const [like, setLike] = useState(0)


  return (
    <div>
        <p>Cantidad de Likes: {like}</p>
        <button onClick={ () => setLike(like + 1)}>Like</button>
        <button onClick={ () => setLike(like - 1)}>Dislike</button>
    </div>
  )
}

export default Likes;



