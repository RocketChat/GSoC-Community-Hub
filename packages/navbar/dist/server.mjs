import { d, a } from './chunk-MIGENICT.mjs';
import p from 'qs';

function l(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function c(){return d(this,arguments,function*(t={},g={}){let o=a({headers:{"Content-Type":"application/json"}},t),e=p.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}}),s=`${l(`/api/nav-datas${e?`?${e}`:""}`)}`,a$1=yield fetch(s,o);if(!a$1.ok)throw console.error(a$1),new Error("An error occured please try again");let r=yield a$1.json();return r.length>0?r.data[0].attributes:[]})}

export { c as fetchNavData, l as getStrapiURL };
