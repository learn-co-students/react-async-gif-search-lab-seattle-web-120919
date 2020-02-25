import React, {Component} from 'react'

class GifSearch extends Component{
    render(){
        return(
            <form onSubmit={e => {
                e.preventDefault()
                this.props.searchGiphy()
                }}>
                <input type="text" onChange={e => this.props.changeSearch(e.target.value)}></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default GifSearch