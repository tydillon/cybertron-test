import { test, assert } from 'tape-modern'
import tapeBrowserColor from './tap-browser-color'
import { equals } from 'ramda'

import level1 from './level1'
import level2 from './level2'
import level3 from './level3b'

assert.same = (a,b,msg) => {
  const result = equals(a,b)
  if (!result) {
    console.log(`expected: ${JSON.stringify(b)}`)
    console.log('actual: ', JSON.stringify(a))
  }
  assert.ok(equals(a,b), msg)
}


// level3()
// level2()
level1()

window.test = test
tapeBrowserColor()

console.log('Welcome to Cybertron\n')
