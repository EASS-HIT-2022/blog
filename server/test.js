const request = require("supertest")
const dotenv = require("dotenv");
const app = require("./index");
dotenv.config();

describe('Good Home Routes', function () {
    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('IM ALIVE');
    });
    test('responds to /hello', async () => {
        const res = await request(app).get('/hello');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('IM Yossi');
    });

});