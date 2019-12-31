import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
    function gotoA() {
        Router.push('/qixA')
    }
    return (
        <>
            <div>我是首页</div>
            <div><Link href="/qixA"><a>去Qix A Page</a></Link></div>
            <div><Link href="/qixB"><a>去Qix B Page</a></Link></div>
            <div>
                <button onClick={gotoA}>去Qix A Page</button>
            </div>
        </>
    )
}
export default Home