(()=>{
// Drafting crosshair with live coordinates (mouse only, skipped on touch / reduced motion)
if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
const x=document.createElement('div');x.id='xh';x.setAttribute('aria-hidden','true');x.innerHTML='<i class="h"></i><i class="v"></i><b></b>';document.body.append(x);
const [h,v,b]=x.children;
addEventListener('pointermove',e=>{x.style.display='block';h.style.top=e.clientY+'px';v.style.left=e.clientX+'px';b.style.cssText=`left:${e.clientX}px;top:${e.clientY}px`;b.textContent=`x ${e.clientX}  y ${e.clientY+scrollY}`});
document.addEventListener('pointerleave',()=>x.style.display='none')}
// Lightbox
const lb=document.createElement('div');lb.id='lb';lb.innerHTML='<img alt="">';document.body.append(lb);
document.querySelectorAll('.gal img').forEach(i=>i.addEventListener('click',()=>{lb.firstChild.src=i.src;lb.classList.add('on')}));
lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'));
// Contact form (Formspree, no secrets involved)
const f=document.querySelector('form[data-ajax]');
if(f)f.addEventListener('submit',async e=>{e.preventDefault();const s=f.querySelector('.st');
try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
s.textContent=r.ok?'Message sent.':'Could not send. Check the form ID in Site settings.';if(r.ok)f.reset()}catch{s.textContent='Network error. Try again.'}});
})();
