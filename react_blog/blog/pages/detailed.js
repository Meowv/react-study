import { Affix, Breadcrumb, Col, Icon, Row } from 'antd'
import axios from 'axios'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import Head from 'next/head'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../static/style/pages/detailed.css'

const Detailed = (props) => {
    const renderer = new marked.Renderer();

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    let html = marked(props.article_content);
    return (
        <>
            <Head>
                <title>博客详细页</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <div className="detailed-title">
                                50元加入小密圈 胖哥带你学一年
                            </div>
                            <div className="list-icon center">
                                <span><Icon type="calendar" /> 2020-01-01</span>
                                <span><Icon type="folder" /> 视频教程</span>
                                <span><Icon type="fire" /> 5498人</span>
                            </div>
                            <div className="detailed-content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            >
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <MarkNav
                                className="article-menu"
                                source={html}
                                ordered={false}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

Detailed.getInitialProps = async (context) => {
    let id = context.query.id;
    console.log(id);
    const promise = new Promise((resolve) => {
        axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
            (res) => {
                console.log(res)
                resolve(res.data.data[0])
            }
        )
    })
    return await promise
}

export default Detailed