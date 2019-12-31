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
import '../static/test.css'

function Header() {
    return (
        <>
            <MyHeader />
            <div>meowv.com</div>
        </>
    )
}

export default Header