import React from 'react'

const GifSearch = (props) => {
  return (
    <form onSubmit={props.getSearch}>
      <input type="text" placeholder="Search for a Gif"/>
      <input type="submit" value="Search" />
    </form>
  )
}

export default GifSearch
