import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const c=document.querySelector(".form");c.addEventListener("submit",u);function u(n){n.preventDefault();const r=document.querySelector('input[name="delay"]'),i=document.querySelector('input[name="state"]:checked'),t=parseInt(r.value),o=i.value;new Promise((e,a)=>{setTimeout(()=>{o==="fulfilled"?e(t):o==="rejected"&&a(t)},t)}).then(e=>{s.success({borderRadius:"4px",backgroundColor:"#59a10d",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{s.error({borderRadius:"4px",backgroundColor:"#ef4040",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map
