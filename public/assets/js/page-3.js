(function(){
    var toggle=document.getElementById('nav-toggle'), menu=document.getElementById('mobile-menu');
    if(toggle&&menu){
      toggle.addEventListener('click',function(){
        var open=menu.classList.toggle('hidden')===false;
        toggle.setAttribute('aria-expanded',open?'true':'false');
      });
      menu.querySelectorAll('.mobile-link').forEach(function(a){
        a.addEventListener('click',function(){menu.classList.add('hidden');toggle.setAttribute('aria-expanded','false');});
      });
    }
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
    },{threshold:0.08});
    els.forEach(function(e){io.observe(e);});
  })();