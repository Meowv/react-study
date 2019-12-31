import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Xiaojiejie = ({ router, list }) => {
    return (
        <>
            <div>{router.query.name}来为我服务了</div>

            <div>{list}</div>

            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

Xiaojiejie.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.fastmock.site/mock/7a3e574fb43c5b6aba4be91d34925a65/react/todos').then(
            (res) => {
                console.log('远程数据结果：', res)
                resolve(res.data.data)
            }
        )
    })
    return await promise
}

export default withRouter(Xiaojiejie)