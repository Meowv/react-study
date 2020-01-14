import React, { useEffect, useState } from 'react'

/**
 * 头部导航菜单
 * TODO:可配置化博客名称
 */
const Header = () => {
    const [isSwitched, setIsSwitched] = useState(false)
    const [theme, setTheme] = useState('Light')
    const [menuClass, setMenuClass] = useState('')

    /**
     * 初始化
     */
    const themeInit = () => {
        const storege = localStorage.getItem('theme') || 'light'
        const isDark = storege === 'dark'
        if (isDark) {
            _settingDark()
        } else {
            _settingLight()
        }
    }

    /**
     * 切换主题
     */
    const changeTheme = () => {
        if (isSwitched) {
            _settingLight()
        } else {
            _settingDark()
        }
    }

    /**
     * 黑色主题设置
     */
    const _settingDark = () => {
        localStorage.setItem('theme', 'dark')
        setTheme('Dark')
        setIsSwitched(true)
        document.body.classList.add('dark-theme')
    }

    /**
     * 白色主题设置
     */
    const _settingLight = () => {
        localStorage.setItem('theme', 'light')
        setTheme('Light')
        setIsSwitched(false)
        document.body.classList.remove('dark-theme')
    }

    /**
     * 菜单显示与隐藏
     */
    const menuToggle = () => {
        if (menuClass === '') {
            setMenuClass('active')
        } else {
            setMenuClass('')
        }
    }

    useEffect(() => {
        themeInit()
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
                        <input id="switch_default" type="checkbox" className="switch_default" onChange={changeTheme} checked={isSwitched} />
                        <label htmlFor="switch_default" className="toggleBtn"></label>
                    </div>
                </div>
            </nav>
            <nav className="navbar-mobile" id="nav-mobile">
                <div className="container">
                    <div className="navbar-header">
                        <div>
                            <a href="/">😍阿星Plus</a>
                            <a onClick={changeTheme}>&nbsp;·&nbsp;{theme}</a>
                        </div>
                        <div className="menu-toggle" onClick={menuToggle}>&#9776; Menu</div>
                    </div>
                    <div className={'menu ' + menuClass}>
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