import React from "react"

const Paral = function () {
    function parralaxEffect(){       
        const text = document.getElementById('parallax-text')
        
        let value = window.scrollY
        
        text.style.marginBottom = value * 2.5 + 'px'
    }

    return (
        <section class="parallax" onScroll={parralaxEffect}>
            <h2 id="parallax-text">Some Website</h2>
        </section>
    )
}

export default Paral