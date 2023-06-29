'use strict';

var chunk262UWVGV_js = require('./chunk-262UWVGV.js');
var p = require('qs');

function l(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function c(){return chunk262UWVGV_js.f(this,arguments,function*(t={},u={}){let o=chunk262UWVGV_js.a({headers:{"Content-Type":"application/json"}},t),e=p.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}}),s=`${l(`/api/nav-datas${e?`?${e}`:""}`)}`,a=yield fetch(s,o);if(!a.ok)return console.error(a),null;let r=yield a.json();return r.data.length>0?r.data[0].attributes:null})}var b=["logo","nav","nav-data","variant1","variant2","variant3"];

exports.fetchNavData = c;
exports.getStrapiURL = l;
exports.strapiSchemas = b;
