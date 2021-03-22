import Router from "koa-router";

const router = new Router();
router.prefix('/v1/users')

router.get('/', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                userId: 123,
            }
        ]
    }
});
export default router;