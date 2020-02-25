import React from 'react';

const GifList = (props) => {
    const gifs = () => {
        return props.gifList.map(gif => {
            return <li><img src={gif.images.original.url}></img></li>
        })
    }

    return(
        <ul>
            {gifs()}
        </ul>
    )
}

export default GifList;