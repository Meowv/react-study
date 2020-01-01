import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://static.meowv.com/images/avatar.jpg" /></div>
            <div className="author-introduction">
                生命不息，奋斗不止<br />Cease to struggle and you cease to live.
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />

            </div>
        </div>
    )
}

export default Author