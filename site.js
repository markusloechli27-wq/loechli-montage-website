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
  if(f && f.dataset.mail){f.addEventListener('submit',function(e){
    e.preventDefault();
    function v(n){var el=f.elements[n];return el&&el.value?el.value.trim():'';}
    var zeilen=[['Ich bin',v('art')],['Firma',v('firma')],['Ansprechpartner',v('name')],['Telefon',v('telefon')],['E-Mail',v('email')],['Ort des Objekts',v('ort')],['Elemente ca.',v('elemente')],['Montagezeitraum',v('zeitraum')]];
    var text='Guten Tag,\n\nhiermit möchte ich ein Projekt anfragen.\n\n';
    zeilen.forEach(function(z){if(z[1])text+=z[0]+': '+z[1]+'\n';});
    if(v('nachricht'))text+='\n'+v('nachricht')+'\n';
    text+='\nViele Grüße\n'+v('name');
    var betreff='Anfrage über loechli-montage.de'+(v('ort')?' – '+v('ort'):'');
    window.location.href='mailto:'+f.dataset.mail+'?subject='+encodeURIComponent(betreff)+'&body='+encodeURIComponent(text);
    var ok=f.querySelector('.ok');if(ok)ok.hidden=false;
  });}
})();
