'use strict';

var expect = require('chai').expect;


describe('random-domains: ', function () {

  var randomDomains = require('../../');

  it('randomDomains()', function () {
    var ret = randomDomains();

    expect(ret).to.be.a('string');
    expect(ret.split('.').length).to.equal(2);
  });


  it('randomDomains(2)', function () {
    expect(randomDomains(2).split('.').length).to.equal(3);
  });

  it('randomDomains("com")', function () {
    expect(randomDomains('com')).to.be.match(/\.com$/);
  });

  it('randomDomains(2, "com")', function () {
    expect(randomDomains(2, 'com')).to.be.match(/\.com$/);
  });

  it('randomDomains(2, "")', function () {
    expect(randomDomains(2, '').split('.').length).to.equal(3);
  });
});
