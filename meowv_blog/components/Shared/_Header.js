const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header header-logo">
                        <a href="/">😍阿星Plus</a>
                    </div>
                    <div className="menu navbar-right">
                        <a className="menu-item" href="/posts">Posts</a>
                        <a className="menu-item" href="/categories">Categories</a>
                        <a className="menu-item" href="/tags">Tags</a>
                        <a className="menu-item apps" href="/apps">Apps</a>
                        <input id="switch_default" type="checkbox" className="switch_default" />
                        <label htmlFor="switch_default" className="toggleBtn"></label>
                    </div>
                </div>
            </nav>
            <nav className="navbar-mobile" id="nav-mobile">
                <div className="container">
                    <div className="navbar-header">
                        <div>
                            <a href="/">😍阿星Plus</a>
                            <a id="mobile-toggle-theme">&nbsp;·&nbsp;Light</a>
                        </div>
                        <div className="menu-toggle">&#9776; Menu</div>
                    </div>
                    <div className="menu" id="mobile-menu">
                        <a className="menu-item" href="/posts">Posts</a>
                        <a className="menu-item" href="/categories">Categories</a>
                        <a className="menu-item" href="/tags">Tags</a>
                        <a className="menu-item apps" href="/apps">Apps</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header