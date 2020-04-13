import React, { Component } from 'react'

class GifSearch extends Component{

    state = {
        search: ""
    }

    handleChange = (event) => {
        // event.persist()
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render(){
        console.log(this.state.search)
        return(
            <div className="SearchBar">
                <label> Enter a Search Term: </label>
                <form onSubmit={(e)=>this.props.handleSubmit(e)}>
                    <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
                    <button type="submit"> Find Gifs </button>
                </form>
            </div>
        )
    }
    
}

export default GifSearch

// The <GifSearch /> component will render a form that receives the user input for the giphy search. The text input should be a controlled component that stores the value of the input in its component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.

// <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.