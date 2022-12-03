/*
function sum(a,b){
    return a+b;
}

test('function sum test', () => {
    const result = sum(2,3);
    expect((result).toBe(5));
});

*/

const request = require("supertest");
const {sequelize, User} = require("../src/db/models");
const {createApp} = require("../src/app");
const { before, after } = require("lodash");
const app = createApp();

const yup = require('yup');

const user = {
    firstName: 'Test1',
    lastName: 'Test1',
    email: 'test1@mail.com',
    password: 'admin',
    role: 'customer'
};

const validSchemaUser = yup.object({});

beforeAll( () => User.create(user));
afterAll( () => sequelize.close());

describe('LOGIN test', () => {
test('login success', async () => {
    const {status, body} = await (request(app).post('/auth/login'));
    expect(status).toBe(201);
    expect(await validSchemaUser.isValid(body)).toBe(true);
});
test('login error', async () => {
    const {status, body} = await (request(app).post('/auth/login'));
    expect(status).toBeGreaterThan(400);
});
});
