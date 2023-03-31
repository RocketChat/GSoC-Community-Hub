'use strict';

var chunkOWCFWPAL_js = require('./chunk-OWCFWPAL.js');
var p = require('qs');

function l(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function c(){return chunkOWCFWPAL_js.d(this,arguments,function*(t={},g={}){let o=chunkOWCFWPAL_js.a({headers:{"Content-Type":"application/json"}},t),e=p.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}}),s=`${l(`/api/nav-datas${e?`?${e}`:""}`)}`,a=yield fetch(s,o);if(!a.ok)throw console.error(a),new Error("An error occured please try again");let r=yield a.json();return r.length>0?r.data[0].attributes:[]})}

exports.fetchNavData = c;
exports.getStrapiURL = l;
