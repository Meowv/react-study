import React from 'react'
import List from '../components/Posts'
import HeadTitle from '../components/Shared/HeadTitle'
import Layout from '../components/Shared/Layout'

const Posts = () => {
    return (
        <>
            <HeadTitle title="Posts - " />
            <Layout content={<List />} />
        </>
    )
}

export default Posts