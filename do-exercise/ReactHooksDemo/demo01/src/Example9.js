import React, { useCallback, useEffect, useState } from 'react';

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onReSize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onReSize)
        return () => {
            window.removeEventListener('resize', onReSize)
        }
    }, [])

    return size
}

function Example9() {
    const size = useWinSize()

    return (
        <div>页面Size:{size.width} x {size.height}</div>
    )
}

export default Example9