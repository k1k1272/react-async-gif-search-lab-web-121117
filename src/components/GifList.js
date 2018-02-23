import React from 'react'

const GifList = (props) => {
  let gifs = props.gifList.map(gif => <li key={gif.id}> <img src={gif.images.fixed_width.url} />  </li>)
  console.log(props.gifList[0])
  return (
    <ul>
      {gifs}
    </ul>
  )

}

export default GifList
