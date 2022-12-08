const server = require('../src/server');
const supertest = require('supertest');

const request = supertest(server);
describe('API Server', () => {
  test('hello endpoint', async () => {
    const response = await request.get('/hello');
    expect(response.text).toBe('Hello World!!!');
  });

  test('goodbye endpoint', async () => {
    const response = await request.get('/goodbye');
    expect(response.text).toBe('Byeeee!');
  });



  it('handles requests to missing routs', async () => {
    const response = await request.get('/BadRoute');
    expect(response.status).toEqual(404);
  });

  it('handles root path /', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  });
});