/**
 * Created by hao.zuo on 2017/8/31.
 */

/******************** Make ramda.js globally *******************/
const ramda = require('ramda');
ramda.forEachObjIndexed((v, k) => window[k] = v, ramda);
