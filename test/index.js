'use strict'

import test from "ava";
import supertest from "supertest";
import Koa from "../app";

const app = Koa.callback();

test('first test', t => {
    t.is(3, 3, 'message');
});
test('GET /v1/users', async t => {
    const res = await supertest(app).get('/v1/users');
    t.is(200, res.status, 'message');
    t.deepEqual(res.body, { code: 200, message: 'Success', data: [{ userId: 123 }] }, 'message');
});
test('GET /v1/users/3333', async t => {
    const res = await supertest(app).get('/v1/books/3333');
    t.is(200, res.status, 'message');
    t.deepEqual(res.body, { code: 200, message: 'Success', data: [{ bookId: '3333' }] }, 'message');
});
test('POST /v1/books', async t => {
    const res = await supertest(app)
        .post('/v1/books')
        .set('Accept', 'application/json')
        .send({ userId: 'john' })
    t.is(200, res.status, 'message');
    t.deepEqual(res.body, { code: 200, message: 'Success', data: [{ bookId: 'john' }] }, 'message');
});