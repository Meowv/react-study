const Home = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="intro">
                    <div className="avatar">
                        <a href="javascript:;">
                            <img src="https://static.meowv.com/images/avatar.jpg" />
                        </a>
                    </div>
                    <div className="nickname">阿星Plus</div>
                    <div className="description">
                        <p>
                            生命不息，奋斗不止
                        <br />
                            Cease to struggle and you cease to live
                        </p>
                    </div>
                    <div className="links">
                        <a className="link-item" title="Blog" href="/posts">
                            <i className="iconfont iconread"></i>
                        </a>
                        <a target="_blank" className="link-item" title="Notes" href="https://notes.meowv.com/">
                            <i className="iconfont iconnotes"></i>
                        </a>
                        <a target="_blank" className="link-item" title="API" href="https://api.meowv.com/">
                            <i className="iconfont iconapi"></i>
                        </a>
                        <a className="link-item" title="Manage" href="/account/auth">
                            <i className="iconfont iconcode"></i>
                        </a>
                        <a target="_blank" className="link-item" title="Github" href="https://github.com/Meowv/">
                            <i className="iconfont icongithub"></i>
                        </a>
                        <a className="link-item weixin" title="点击关注阿星Plus，带你飙车不迷路" href="javascript:;">
                            <i className="iconfont iconweixin">
                            </i>
                        </a>
                        <div className="qrcode hidden">
                            <img src="https://static.meowv.com/images/wx_qrcode.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home