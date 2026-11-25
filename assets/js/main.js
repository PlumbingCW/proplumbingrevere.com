(function(){
  var d=document, root=d.documentElement;
  var drawer=d.getElementById('mob-drawer'), overlay=d.getElementById('mob-overlay');
  var toggle=d.getElementById('mob-toggle'), closeBtn=d.getElementById('drawer-close');
  function openD(){drawer.classList.add('open');overlay.classList.add('visible');root.style.overflow='hidden';toggle.setAttribute('aria-expanded','true');if(closeBtn)closeBtn.focus();}
  function closeD(){drawer.classList.remove('open');overlay.classList.remove('visible');root.style.overflow='';toggle.setAttribute('aria-expanded','false');}
  if(toggle&&drawer){
    toggle.addEventListener('click',openD);
    if(closeBtn)closeBtn.addEventListener('click',closeD);
    if(overlay)overlay.addEventListener('click',closeD);
    drawer.addEventListener('click',function(e){if(e.target.closest('a'))closeD();});
    d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer.classList.contains('open')){closeD();toggle.focus();}});
    window.addEventListener('resize',function(){if(window.innerWidth>900)closeD();});
  }
  var fc=d.getElementById('float-call'), ft=d.querySelector('footer');
  if(fc&&ft&&'IntersectionObserver' in window){
    new IntersectionObserver(function(en){en.forEach(function(x){fc.classList.toggle('is-hidden',x.isIntersecting);});}).observe(ft);
  }
})();
