import React, { useState } from 'react';
import marked from 'marked'
import '../static/css/AddArticle.css'
import { Row, Col, Input, Select, Button, DatePicker } from 'antd'

const { Option } = Select;
const { TextArea } = Input;

function AddArticle() {
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={20}>
                            <Input
                                placeholder="博客标题"
                                size="large" />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                    <Select defaultValue="Sign Up" size="large">
                                <Option value="Sign Up">视频教程</Option>
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10} >
                        <Col span={12}>
                            <TextArea
                                className="markdown-content"
                                rows={35}
                                placeholder="文章内容"
                            />
                        </Col>
                        <Col span={12}>
                            <div
                                className="show-html">

                            </div>

                        </Col>
                    </Row>
                </Col>

                <Col span={6}>


                </Col>
            </Row>
        </div>
    )
}
export default AddArticle