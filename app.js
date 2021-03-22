import Koa from "koa";
import Mount from "koa-mount";
import Static from "koa-static";
import bodyparser from "koa-bodyparser";
import { users, books, upload } from "./routers";

const app = new Koa();

app.use(Mount('/public', Static('.')));
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));

app.use(users.routes());
app.use(books.routes());
app.use(upload.routes());
app.listen(3000, () => {
    console.log('koa2 serve started.....');
})
export default app;

