import request from 'supertest'
import { app, server } from '../src/app';

describe('GET /hello', () => {
    test('should return "Hello, World!"', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});

afterAll((done) => {
    server.close(done);
});