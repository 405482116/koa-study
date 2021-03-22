import Router from "koa-router";
const router = new Router();
router.prefix('/v1/books');

router.get('/', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: 123
            }
        ]
    }
    return next
});
router.get('/new', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: 123
            }
        ]
    }
    return next
});
router.get('/:id', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: ctx.params.id
            }
        ]
    }
    return next
});
router.get('/:id/edit', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: 123
            }
        ]
    }
    return next
});
router.post('/', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: ctx.request.body.userId
            }
        ]
    }
    return next
});
router.patch('/:id', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: 123
            }
        ]
    }
    return next
});
router.delete('/:id', async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: 'Success',
        data: [
            {
                bookId: 123
            }
        ]
    }
    return next
});

export default router;