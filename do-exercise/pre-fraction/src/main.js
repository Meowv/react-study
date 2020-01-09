import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
    const [types, setTypes] = useState([])

    const getTypes = () => {
        axios({
            method: 'post',
            url: 'http://106.75.118.194:5001/TZY/PreFraction/V2/QueryFilter',
            data: {
                "provinceId": 856,
                "year": 2019
            }
        }).then(res => {
            setTypes(res.data.result)
            console.log(res.data.result)
        })
    }

    useEffect(() => {
        getTypes()
    }, [])

    return (
        <>
            {
                types.map((item, index) => {
                    return (
                        <>
                            <button key={index + item}>{item.type}</button> =>
                            {
                                item.subset && item.subset.map((item2, index2) => {
                                    return (
                                        <>
                                            <button key={index2 + item2}>{item2.type}</button> =>
                                            {
                                                item2.subset && item2.subset.map((item3, index3) => {
                                                    return (
                                                        <>
                                                            <button key={index3 + item3}>{item3.type}</button>
                                                            <br />
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </>
    )
}
export default Main