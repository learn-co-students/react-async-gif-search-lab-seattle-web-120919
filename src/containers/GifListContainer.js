import React, {Component} from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifList: [],
        searchFor: 'dolphin'
    }

    first3Gifs = (data) => {
        this.setState({
            ...this.state,
            gifList: data.slice(0, 3)
        }) 
    }

    componentDidMount(){
        this.searchGiphy()
    }

    searchGiphy = () => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchFor}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(res => res.json())
        .then(data => this.first3Gifs(data.data))
        .catch(err => console.log(err))
    }

    changeSearch = (value) => {
        this.setState({
            ...this.state,
            searchFor: value
        })
    }

    render(){
        return(
            <div>
            <GifSearch searchGiphy={this.searchGiphy} changeSearch={this.changeSearch}/>
            <GifList gifList={this.state.gifList}/>
            </div>

        )
    }
}

export default GifListContainer;