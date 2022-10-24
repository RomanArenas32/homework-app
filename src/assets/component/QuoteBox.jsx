import React, { Fragment, useState } from 'react'
import quotes from "../../Quotes.json";



const QuoteBox = () => {

    

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(0);



    function changeAll() {
        const anotherRandom = Math.floor(Math.random() * quotes.length);
        setIndex(anotherRandom);
        
    }

    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#f0f06e",
        "#F85676",
        "#002cbd",
        "#08d3ee",
        "#07cc2",
        "#06d463",
        "#d406a7",
        "#d40639",
        "#d40606af",
        "#175fa3",
        "#c3c8cc"
    ];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColorIndex]}`;

    

    return (
        <Fragment>
            <div className='app' style={{ color: colors[randomColorIndex] }}>
                <h1>{quotes[index].author}</h1>
                <h2>{quotes[index].quote}</h2>
                <button className='buttonNext' onClick={changeAll}>Next</button>
            </div>
        </Fragment>
    );
}

export default QuoteBox