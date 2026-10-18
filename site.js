(function(){
  var menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
  var dds=[].slice.call(document.querySelectorAll('.dd'));
  function closeAll(except){dds.forEach(function(d){if(d!==except){d.classList.remove('open');d.querySelector('.dd-btn').setAttribute('aria-expanded','false');}});}
  if(menuBtn){menuBtn.addEventListener('click',function(){var o=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o);menuBtn.textContent=o?'Schließen':'Menü';});}
  dds.forEach(function(d){
    var b=d.querySelector('.dd-btn');
    b.addEventListener('click',function(e){e.stopPropagation();var o=!d.classList.contains('open');closeAll(d);d.classList.toggle('open',o);b.setAttribute('aria-expanded',o);});
    d.addEventListener('mouseleave',function(){if(window.matchMedia('(min-width:1041px)').matches){d.classList.remove('open');b.setAttribute('aria-expanded','false');}});
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.dd'))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
  var f=document.querySelector('form.inq');
  if(f && f.dataset.preview==='1'){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.ok');if(ok)ok.hidden=false;});}
})();
