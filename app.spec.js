var shell = require('shelljs');
var request = require('supertest');
var app = require('./app');

describe('api', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:create');
    shell.exec('npx sequelize db:migrate:undo:all');
    shell.exec('npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  describe('Test GET /api/v1/foods path', () => {
    test('should return a 200 status', () => {
      return request(app).get('/api/v1/foods').then(response => {
        expect(response.status).toBe(200);
      });
    });

    test('should return an array of foods', () => {
      return request(app).get('/api/v1/foods').then(response => {
        expect(response.body.length).toBe(6),
        expect(Object.keys(response.body[0])).toContain('name'),
        expect(Object.keys(response.body[0])).toContain('calories')
      });
    });

    test('should return a 404 if there are no foods in DB', () => {
      shell.exec('npx sequelize db:seed:undo:all');
      return request(app).get('/api/v1/foods').then(response => {
        expect(response.status).toBe(404);
      });
    });
  });

  describe('Test GET /api/v1/foods/:id path', () => {
    test('should return a 200 status', () => {
      return request(app).get('/api/v1/foods/1').then(response => {
        expect(response.status).toBe(200);
      });
    });

    test('should return a food object by id', () => {
      return request(app).get('/api/v1/foods/1').then(response => {
        expect(Object.keys(response.body)).toContain('name'),
        expect(Object.keys(response.body)).toContain('calories'),
        expect((response.body.id)).toBe(1);
      });
    });

    test('should return a 404 if the food does not exist in DB', () => {
      return request(app).get('/api/v1/foods/100').then(response => {
        expect(response.status).toBe(404)
      });
    });
  });

  describe('Test DELETE /api/v1/foods/:id path', () => {
    test('should return a 204 status', () => {
      return request(app).delete('/api/v1/foods/1').then(response => {
        expect(response.status).toBe(204);
      });
    });

    test('should return a 404 if the food does not exist in DB', () => {
      return request(app).delete('/api/v1/foods/100').then(response => {
        expect(response.status).toBe(404)
      });
    });
  });
});
