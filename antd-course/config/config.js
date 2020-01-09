export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes: [{
        path: '/',
        component: './HelloWorld',
    }],
    singular: true,
}

// npm install -g cnpm --registry=https://registry.npm.taobao.org

// cnpm install umi --save-dev

// cnpm install umi-plugin-react --save-dev

// cnpm install serve -g

// cnpm install --save antd