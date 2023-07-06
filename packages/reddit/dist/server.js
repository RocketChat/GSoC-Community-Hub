'use strict';

var chunk262UWVGV_js = require('./chunk-262UWVGV.js');
var p = require('qs');

function l(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function b(){return chunk262UWVGV_js.f(this,arguments,function*(t={},u={}){let o=chunk262UWVGV_js.a({headers:{"Content-Type":"application/json"}},t),e=p.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}}),s=`${l(`/api/nav-datas${e?`?${e}`:""}`)}`,a=yield fetch(s,o);if(!a.ok)return console.error(a),null;let r=yield a.json();return r.data.length>0?r.data[0].attributes:null})}

exports.fetchNavData = b;
exports.getStrapiURL = l;
