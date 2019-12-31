import Link from 'next/link'
import Router from 'next/router'
import React from 'react'

const Home = () => {
    function gotoXiaojiejie() {
        // Router.push('/xiaojiejie?name=井空')
        Router.push({
            pathname: '/xiaojiejie',
            query: {
                name: '井空'
            }
        })
    }
    return (
        <>
            <div>我是首页</div>
            <div>
                <Link href="/xiaojiejie?name=结衣"><a>选择结衣</a></Link>
                <br />
                <Link href="/xiaojiejie?name=井空"><a>选择井空</a></Link>
                <br />
                <Link href={{ pathname: '/xiaojiejie', query: { name: '结衣' } }}><a>选择结衣</a></Link>
            </div>

            <div>
                <button onClick={gotoXiaojiejie}>选择井空</button>
            </div>
        </>
    )
}
export default Home