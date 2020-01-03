import { Col, Icon, Menu, Row } from 'antd'
import axios from 'axios'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import api from '../config/apiUrl'
import '../static/style/components/header.css'

const Header = () => {
	const [navArray, setNavArray] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(api.getTypeInfo).then((res) => {
				return res.data.data
			})
			setNavArray(result)
		}

		fetchData();
	}, [])

	const handleClick = (e) => {
		if (e.key == 0) {
			Router.push('/index')
		} else {
			Router.push('/list?id=' + e.key)
		}
	}

	return (
		<div className="header">
			<Row type="flex" justify="center">
				<Col xs={24} sm={24} md={10} lg={15} xl={12}>
					<span className="header-logo">阿星Plus</span>
					<span className="header-txt">生命不息，奋斗不止</span>
				</Col>
				<Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
					<Menu mode="horizontal" onClick={handleClick}>
						<Menu.Item key="0">
							<Icon type="home" />首页
						</Menu.Item>
						{
							navArray.map((item, index) => {
								return (
									<Menu.Item key={item.id}>
										<Icon type={item.icon} />{item.typeName}
									</Menu.Item>
								)
							})
						}
					</Menu>
				</Col>
			</Row>
		</div>
	);
}

export default Header