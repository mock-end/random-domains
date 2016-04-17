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
    var ret = randomDomains(2);
    expect(ret.split('.').length).to.equal(3);
  });
});
