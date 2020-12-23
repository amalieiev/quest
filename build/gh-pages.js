var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish('dist/quest', function (err) {
    if (err) throw err
})