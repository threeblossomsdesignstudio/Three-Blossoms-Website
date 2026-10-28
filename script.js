const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navlinks');
menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);menu.setAttribute('aria-label',expanded?'Open navigation':'Close navigation')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}));
document.querySelector('#year').textContent=new Date().getFullYear();
const reveal=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}})},{threshold:0.1});
document.querySelectorAll('.section,.statement,.band').forEach(e=>{e.classList.add('reveal');reveal.observe(e)});

// Portfolio lightbox: only photo buttons open the overlay. Escape closes the native dialog.
const photoDialog=document.querySelector('#photo-dialog');
if(photoDialog){const enlarged=photoDialog.querySelector('img');document.querySelectorAll('[data-lightbox]').forEach(button=>{button.addEventListener('click',()=>{enlarged.src=button.dataset.lightbox;enlarged.alt=button.dataset.alt||'';photoDialog.showModal()})});photoDialog.addEventListener('click',event=>{if(event.target===photoDialog)photoDialog.close()});photoDialog.addEventListener('close',()=>{enlarged.removeAttribute('src')})}
