const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set('name', 'qix');
        ctx.body = 'cookie is ok';
    } else {
        ctx.body = 'hello';
    }
});

app.listen(3000, () => {
    console.log('starting at port 3000');
});