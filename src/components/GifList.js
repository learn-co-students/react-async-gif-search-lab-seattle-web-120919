import React from 'react'

const GifList = (props) => {
    // gifs: res.data.map(gif => gif.images.original.url)
    // props passed down as "search"
    const { gifs } = props
    console.log(`gifs loaded ${gifs}`)

    return (
        <div>
            <ul>
                {gifs.map(gif => <img alt="" src={gif.url}/>)}
            </ul>
        </div>
    )
}

export default GifList