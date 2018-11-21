import * as Router from 'koa-router';
import HelloTest from "../service/hello/HelloTest";

const router = new Router();


router.get('/HelloTest', async (ctx) => {
    ctx.body = await new HelloTest().execute();
});

router.get('/*', async (ctx) => {
    ctx.body = 404;
});


export default router;
