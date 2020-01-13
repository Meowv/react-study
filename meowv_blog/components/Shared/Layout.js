import Header from './_Header'
import Footer from './_Footer'

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