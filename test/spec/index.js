'use strict';

var char   = require('chai');
var expect = char.expect;


describe('pick-some: ', function () {

  var pickSome = require('../../index');

  it('pickSome([])', function () {

    var arr = [];
    var ret = pickSome(arr);

    expect(ret).to.eql(arr);
  });

  it('pickSome([1, 2, 4])', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr);

    expect(ret).to.have.length.most(arr.length);
    expect(arr).to.include.members(ret);
  });

  it('pickSome([1, 2, 4], { count: 0 })', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: 0 });

    expect(ret).to.have.length.most(0);
    expect(arr).to.include.members(ret);
  });

  it('pickSome([1, 2, 4], { count: 1 })', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: 1 });

    expect(ret.length).to.equal(1);
    expect(arr).to.include.members(ret);
  });

  it('pickSome([1, 2, 4], 2)', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, 2);

    expect(ret.length).to.equal(2);
    expect(arr).to.include.members(ret);
    expect(arr[0]).to.be.below(arr[1]);

  });

  it('pickSome([1, 2, 4], { count: 2 })', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: 2 });

    expect(ret.length).to.equal(2);
    expect(arr).to.include.members(ret);
    expect(arr[0]).to.be.below(arr[1]);

  });

  it('pickSome([1, 2, 4], { count: 2, shuffled: true})', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: 2, shuffled: true });

    expect(ret.length).to.equal(2);
    expect(arr).to.include.members(ret);

  });

  it('pickSome([1, 2, 4], { count: 10 })', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: 10 });

    expect(ret.length).to.equal(3);
    expect(arr).to.include.members(ret);
  });

  it('pickSome([1, 2, 4], { count: 10 })', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: -10 });

    expect(ret.length).to.equal(2);
    expect(arr).to.include.members(ret);
  });

  it('pickSome([1, 2, 4], { count: "1" })', function () {

    var arr = [1, 2, 4];
    var ret = pickSome(arr, { count: '1' });

    expect(ret.length).to.equal(1);
    expect(arr).to.include.members(ret);
  });

  it('pickSome() -> throws an Error', function () {
    expect(pickSome).to.throw(Error);
    expect(pickSome).to.throw(TypeError);
    expect(pickSome).to.throw(/array or array like object/);
  });

  it('pickSome(null) -> throws an Error', function () {

    var fn = pickSome.bind(null)

    expect(fn).to.throw(Error);
    expect(fn).to.throw(TypeError);
    expect(fn).to.throw(/array or array like object/);
  });

  it('pickSome(1) -> throws an Error', function () {
    var fn = pickSome.bind(1)

    expect(fn).to.throw(Error);
    expect(fn).to.throw(TypeError);
    expect(fn).to.throw(/array or array like object/);
  });

  it('pickSome("abc") -> throws an Error', function () {
    var fn = pickSome.bind("abc")

    expect(fn).to.throw(Error);
    expect(fn).to.throw(TypeError);
    expect(fn).to.throw(/array or array like object/);
  });

  it('pickSome({}) -> throws an Error', function () {
    var fn = pickSome.bind({})

    expect(fn).to.throw(Error);
    expect(fn).to.throw(TypeError);
    expect(fn).to.throw(/array or array like object/);
  });
});
