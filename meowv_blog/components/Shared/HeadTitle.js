import Head from 'next/head'

const HeadTitle = (props) => {
    return (
        <Head>
            <title>😍{props.title}阿星Plus⭐⭐⭐</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeadTitle