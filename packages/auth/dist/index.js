'use strict';

var x = require('next-auth/providers/google');
var faunadb = require('faunadb');
var next = require('next-auth/next');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var x__default = /*#__PURE__*/_interopDefault(x);

var k=Object.defineProperty,m=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,s,r)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,p=(e,s)=>{for(var r in s||(s={}))g.call(s,r)&&h(e,r,s[r]);if(f)for(var r of f(s))w.call(s,r)&&h(e,r,s[r]);return e},T=(e,s)=>m(e,E(s));var t=(e,s,r)=>new Promise((c,n)=>{var _=o=>{try{a(r.next(o));}catch(i){n(i);}},d=o=>{try{a(r.throw(o));}catch(i){n(i);}},a=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,d);a((r=r.apply(e,s)).next());});var u,L=(u=process.env.FAUNADB_SECRET)!=null?u:"",l=new faunadb.Client({secret:L}),S=l.query;function v(){return t(this,null,function*(){return yield next.getServerSession(R)})}function q(){return t(this,null,function*(){let e=yield v();return e==null?void 0:e.user})}function I(e){return t(this,null,function*(){if(e)try{return (yield l.query(S.Get(faunadb.Match(faunadb.Index("user_by_email"),e))).then(r=>r||{data:null}).catch(r=>console.error("Error: [%s] %s: %s",r.name,r.message,r.errors()[0].description))).data.role}catch(s){console.error(s);}})}function N(e){return t(this,null,function*(){var s;try{let r="https://oauth2.googleapis.com/token?"+new URLSearchParams({client_id:process.env.GOOGLE_CLIENT_ID,client_secret:process.env.GOOGLE_CLIENT_SECRET,grant_type:"refresh_token",refresh_token:e.refreshToken}),c=yield fetch(r,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}),n=yield c.json();if(!c.ok)throw n;return T(p({},e),{idToken:n.id_token,accessToken:n.access_token,accessTokenExpires:Date.now()+n.expires_in*1e3,refreshToken:(s=n.refresh_token)!=null?s:e.refreshToken})}catch(r){return console.log(r),T(p({},e),{error:"RefreshAccessTokenError"})}})}var R={providers:[x__default.default({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET})],callbacks:{jwt(c){return t(this,arguments,function*({token:e,user:s,account:r}){return r&&s?{idToken:r.id_token,accessToken:r.access_token,accessTokenExpires:r.expires_at*1e3,refreshToken:r.refresh_token,roleFromFauna:yield I(s.email),user:s}:Date.now()<e.accessTokenExpires?e:N(e)})},session(r){return t(this,arguments,function*({session:e,token:s}){return e.user=s.user,e.accessToken=s.accessToken,e.error=s.error,e.idToken=s.idToken,e.userRole=s.roleFromFauna,e})}}};

exports.authOptions = R;
exports.getCurrentUser = q;
exports.getRole = I;
exports.getSession = v;
