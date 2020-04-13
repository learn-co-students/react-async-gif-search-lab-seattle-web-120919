import React, { Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_KEY = 'mDDduUb7LWneMuqUsaP1xVfKBzpET4iq'
// const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?q=${event}&api_key=dc6zaTOxFJmzC&rating=g`
const DB_URL = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${API_KEY}&rating=g`

class GifListContainer extends Component {
    state = {
        // result: "",
        gifs: []
    }
     
    // componentDidMount() {
    //     fetch(DB_URL)
    //     .then(res => res.json())
    //     .then(res => this.setState({
    //         result: res.data, 
    //     }))
    // }

    handleSubmit = (event) => {
        console.log(event.target.search.value)
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.search.value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            this.setState({
            gifs: res.data.map(gif => ({
                url: gif.images.original.url
            })
        )})
    })
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     this.props.fetchGIFs(this.state.query)
    //   }

    render() {
        console.log(this.state.gifs)
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer;