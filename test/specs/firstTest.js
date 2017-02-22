var assert = require('assert');

describe('page', function() {
  it('blog', function() {
    browser.url('http://baidu.com');
    var title = browser.getTitle();
    assert.equal(title, '百度一下，你就不知道 ');
  });
});
