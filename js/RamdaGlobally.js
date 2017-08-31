/**
 * Created by hao.zuo on 2017/8/31.
 */
const ramda = require('ramda');

const MakeRamdaGlobal = _ =>
  ramda.forEachObjIndexed((v, k) => window[k] = v, ramda);


module.exports = MakeRamdaGlobal;
