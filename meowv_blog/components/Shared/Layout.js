import Header from './_Header'
import Footer from './_Footer'

/**
 * 网站布局，头部，内容(传递组件)，底部
 * @param {} props 
 */
const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header />
            {props.content}
            <Footer />
        </div>
    )
}

export default Layout