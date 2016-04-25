'use strict';

var expect = require('chai').expect;


describe('random-domains: ', function () {

  var randomDomains = require('../../');

  it('randomDomains()', function () {
    var ret = randomDomains();

    expect(ret).to.be.a('string');
    expect(ret.split('.')).to.have.length(2);
  });


  it('randomDomains({ level: 2 })', function () {
    expect(randomDomains({ level: 2 }).split('.')).to.have.length(3);
  });

  it('randomDomains({ tld: "com" })', function () {
    expect(randomDomains({ tld: 'com' })).to.be.match(/\.com$/);
  });

  it('randomDomains({ tld: "com", level: 2 })', function () {
    expect(randomDomains({ tld: 'com', level: 2 })).to.be.match(/\.com$/);
  });
});
