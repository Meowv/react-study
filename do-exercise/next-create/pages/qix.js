import React, { useState } from 'react'

function Qix() {
    const [color, setColor] = useState('blue')

    const changeColor = () => {
        setColor(color == 'blue' ? 'red' : 'blue')
    }

    return (
        <>
            <div>我是阿星Plus</div>

            <div><button onClick={changeColor}>改变颜色</button></div>

            {/* <div className="qix">我是阿星Plus</div> */}

            <style jsx>
                {`
                    div{color:${color};}
                    .qix{color:red;}
                `}
            </style>
        </>
    )
}

export default Qix