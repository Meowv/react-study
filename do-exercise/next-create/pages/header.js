// import Head from 'next/head'

// function Header() {
//     return (
//         <>
//             <Head>
//                 <title>阿星Plus</title>
//                 <meta charset='utf-8' />
//             </Head>
//             <div>meowv.com</div>
//         </>
//     )
// }

import MyHeader from '../components/myheader'
import { Button } from 'antd'
import '../static/test.css'

function Header() {
    return (
        <>
            <MyHeader />
            <div>meowv.com</div>
            <div><Button>我是按钮</Button></div>
        </>
    )
}

export default Header