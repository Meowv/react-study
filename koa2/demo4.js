const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix: '/qix'
});

router.get('/', function (ctx, next) {
    ctx.body = 'Hello Koa!';
})
.get('/todo',(ctx, next) =>{
    ctx.body = 'Todo page'
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})