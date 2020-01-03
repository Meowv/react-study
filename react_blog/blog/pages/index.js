import { Col, Icon, List, Row } from 'antd'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Header from '../components/Header'
import api from '../config/apiUrl'
import '../static/style/pages/index.css'

const Home = (list) => {
	const [lists, setList] = useState(list.data)

	return (
		<>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
					<List
						header={<div>最新日志</div>}
						itemLayout="vertical"
						dataSource={lists}
						renderItem={item => (
							<List.Item>
								<div className="list-title">
									<Link href={{ pathname: '/detailed', query: { id: item.id } }}>
										<a>{item.title}</a>
									</Link>
								</div>
								<div className="list-icon">
									<span><Icon type="calendar" /> {item.addTime}</span>
									<span><Icon type="folder" /> {item.typeName}</span>
									<span><Icon type="fire" /> {item.view_count}人</span>
								</div>
								<div className="list-context">{item.introduce}</div>
							</List.Item>
						)}
					/>
				</Col>

				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
				</Col>
			</Row>
			<Footer />
		</>
	);
}

Home.getInitialProps = async () => {
	const promise = new Promise((resolve) => {
		axios(api.getArticleList).then((res) => {
			resolve(res.data)
		})
	})
	return await promise
}

export default Home