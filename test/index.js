const assert = require('assert');
const limit = require('../src/limit');

describe('lim-it', () => {
  it('should return 1 from limit(1, 0, 2)', () => {
    assert.equal(1, limit(1, 0, 2));
  });
  it('should return 1 from limit(0, 1, 2)', () => {
    assert.equal(1, limit(0, 1, 2));
  });
  it('should return 1 from limit(1, 2)', () => {
    assert.equal(1, limit(1, 2));
  });
  it('should return 1 from limit(1, 2, -1)', () => {
    assert.equal(1, limit(1, 2, -1));
  });
});
