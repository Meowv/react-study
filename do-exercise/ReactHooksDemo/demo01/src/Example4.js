import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Example() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>你点击了 {count} 次</p>
            <button onClick={() => { setCount(count + 1) }}>点点点我</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example;