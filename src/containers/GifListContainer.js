import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifList: [],
    searchTerm: ""
  }

  componentDidMount(){
    this.getGifs("cats")
  }

  getGifs(term=null) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term || this.state.searchTerm}&api_key=dc6zaTOxFJmzC`
    fetch(url)
    .then(res=> res.json())
    .then(json => this.setState({ gifList: json.data.slice(0,3)}))
  }

  getSearch = event => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target[0].value
    }, this.getGifs)

  }

  render() {
    return (
      <div>
        <GifList gifList={this.state.gifList} />
        <GifSearch getSearch={this.getSearch} />
      </div>
    )
  }
}
