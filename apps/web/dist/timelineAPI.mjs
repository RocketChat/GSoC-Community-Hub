var u=(s,a,n)=>new Promise((o,r)=>{var i=t=>{try{c(n.next(t));}catch(e){r(e);}},m=t=>{try{c(n.throw(t));}catch(e){r(e);}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(i,m);c((n=n.apply(s,a)).next());});function d(a){return u(this,arguments,function*({num:s}){return yield (yield fetch(`https://dummyjson.com/products?limit=${s}`)).json()})}

export { d as default };
