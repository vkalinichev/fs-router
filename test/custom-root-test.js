const path = require('path')
const test = require('tape')
const router = require('..')

// set up config to filter only paths ending `index.js`
const config = {root: '/root'}
const match = router(path.join(__dirname, '/fixtures/root'), config)

test('matches paths with custom root', t => {
  t.plan(2)
  let req = { url: '/root/foo/bar', method: 'GET' }
  t.equal(typeof match(req), 'function', 'returns the route function')
  t.equal(match(req)(), 'bar', 'route function is callable')
})
