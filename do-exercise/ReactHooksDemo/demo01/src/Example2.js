import React, { useState } from 'react';

function Example2() {
    const [age, setAge] = useState(20)
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('程序员')
    return (
        <div>
            <p>小明今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>
    )
}

export default Example2;