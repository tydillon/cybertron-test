import test from 'tape'
import tapeBrowserColor from 'tap-browser-color'

import level1 from './level1'
import level2 from './level2'
import level3 from './level3b'

// level3()
// level2()
level1()

window.test = test
tapeBrowserColor()

console.log('Welcome to Cybertron\n')
