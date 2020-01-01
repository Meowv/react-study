import { Breadcrumb, Col, Icon, Row } from 'antd'
import Head from 'next/head'
import React from 'react'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../static/style/pages/detailed.css'

const Detailed = () => (
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

                        <div className="detailed-content" >
                            详细内容
                        </div>

                    </div>

                </div>
            </Col>

            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />
                <Advert />

            </Col>
        </Row>
        <Footer />
    </>
)

export default Detailed