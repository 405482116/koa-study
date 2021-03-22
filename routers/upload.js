import Router from "koa-router";
import multer from "koa-multer";


const router = new Router();
const upload = multer({ dest: 'uploads/' });
router.prefix('/v1/file');

router.post('/upload', upload.any(), async (ctx, next) => {
    console.log(ctx.req.files);
    ctx.body = {
        code: 0,
        message: 'upload success',
        data: {
            body: ctx.req.body,
            files: ctx.req.files
        }
    }

});

export default router;