import React, { useState, useMemo } from 'react';

function Example7() {
    const [wushuang, setWushuang] = useState('wushuang love qix')
    const [shuangwu, setShuangwu] = useState('shuangwu love qix')

    return (
        <>
            <button onClick={() => { setWushuang(new Date().getTime()) }}>wushuang</button>
            <button onClick={() => { setShuangwu(new Date().getTime() + 'shuangwu') }}>shuangwu</button>
            <ChildComponent name={wushuang}>
                {shuangwu}
            </ChildComponent>
        </>
    )
}

function ChildComponent({ name, children }) {
    function changeShuangwu() {
        console.log('wushuang 她来了，她来了')
        return name + 'wushuang 她来了，她来了'
    }

    const actionWushuang = useMemo(() => changeShuangwu(name), [name])

    return (
        <>
            <div>{actionWushuang}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7