import { f, a } from './chunk-HON2WJ2K.mjs';
import p from 'qs';

function l(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function b(){return f(this,arguments,function*(t={},u={}){let o=a({headers:{"Content-Type":"application/json"}},t),e=p.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}}),s=`${l(`/api/nav-datas${e?`?${e}`:""}`)}`,a$1=yield fetch(s,o);if(!a$1.ok)return console.error(a$1),null;let r=yield a$1.json();return r.data.length>0?r.data[0].attributes:null})}

export { b as fetchNavData, l as getStrapiURL };
