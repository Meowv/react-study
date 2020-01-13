import React, { useState, useEffect } from 'react'

const Header = () => {
    const [isSwitched, setIsSwitched] = useState(false)
    const [theme, setTheme] = useState('light')
    const [menuToggle, setMenuToggle] = useState(false)

    /**
     * 获取当前主题
     */
    const currentTheme = () => {
        localStorage.getItem('theme') || theme
    }

    /**
     * 设置当前主题
     * @param {string} _theme 
     */
    const settingTheme = (_theme) => {
        localStorage.setItem('theme', _theme)
    }

    /**
     * 初始化
     */
    const ThemeInit = () => {
        // 是否白色主题
        const isLight = currentTheme() === theme

        if (isLight) {
            setTheme('light')
            settingTheme(theme)
        } else {
            setTheme('light')
            settingTheme(theme)
        }
    }

    /**
     * 切换主题
     */
    const changeTheme = () => {
        if (isSwitched) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
        ThemeInit()
    }

    useEffect(() => {
        ThemeInit()
        changeTheme()
    }, [])

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
                        <input id="switch_default" type="checkbox" className="switch_default" onChange={changeTheme} />
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