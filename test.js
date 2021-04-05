import test from 'tape'
import {fillers} from './index.js'

test('fillers', function (t) {
  t.equal(typeof fillers, 'object', 'should be an array #1')
  t.equal(Array.isArray(fillers), true, 'should be an array #2')
  t.notEqual(fillers.indexOf('basically'), -1, 'should contain words')

  t.end()
})
