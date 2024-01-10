import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
function First() {
    const [typeEffect] = useTypewriter({
        words: ['Front End Developer', 'Maker', 'Robotics Trainer', 'Biomedical Service Engineer', 'Indigenous Farmer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })
    return (
        <> 
            <div className="first" >
                <p class="d-blocks">.
                </p>
                <div class="d-block"> <h1 >Ishwar Pal</h1>
                <div class='col'><h3>I'm </h3></div>
                    <div class='col'><h3>{typeEffect}</h3></div>
                </div>
            </div>
        </>
    )
}

export default First