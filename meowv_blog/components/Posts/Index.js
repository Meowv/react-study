import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import api from '../../config/api';

const Index = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pageHtml, setPageHtml] = useState('')
    const [list, setList] = useState([])

    /**
     * 获取文章列表
     */
    const getList = async () => {
        const limit = 15

        const result = await axios(api.post.query, {
            params: {
                page: page,
                limit: limit,
            }
        }).then(response => {
            return response.data
        })

        setList(result.result)

        var totalPage = Math.ceil(result.total / limit);
        renderPageHtml(totalPage)

        setIsLoading(false)
    }

    /**
     * 渲染分页HTML
     */
    const renderPageHtml = (total) => {
        let paginationHtml = ''
        for (var i = 1; i <= total; i++) {
            paginationHtml += page == i ? `<span class="page-number current">${i}</span>` : `<a class="page-number" href="/posts/page/${i}/">${i}</a>`;
        }
        setPageHtml(paginationHtml)
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <div className="main">
            {
                isLoading && <div className="loader"></div>
            }
            <div className="post-wrap archive">
                {
                    list.map(item => {
                        return (
                            <Fragment key={item.year}>
                                <h3>{item.year}</h3>
                                {
                                    item.posts.map(post => {
                                        return (
                                            <article className="archive-item" key={post.url}>
                                                <a className="archive-item-link" href={'/post' + post.url}>{post.title}</a>
                                                <span className="archive-item-date">{post.creationTime}</span>
                                            </article>
                                        )
                                    })
                                }
                            </Fragment>
                        )
                    })
                }
                <nav className="pagination" dangerouslySetInnerHTML={{ __html: pageHtml }} />
            </div>
        </div>
    )
}

export default Index