(()=>{
  var a=(n,p,m)=>{
    if(!m)m=0;
    try {
    new Array(p).fill(0).forEach(i=>{n=n.parentNode});
    new Array(m).fill(0).forEach(i=>{n=n.childNodes[0]});
    } catch {
      return null;
    }
    return n
  };
  Array.from(document.querySelectorAll('div[data-testid="primaryColumn"] .css-901oao')).filter(i=>i.innerHTML==='Promoted').forEach((b)=>{
    if(b){
      var c=a(b,10,0),
      d=a(b,4,5);
      if(d)d=d.href;
      if(!d||!c){
        return;
      }
      var e=window.open(d,"_blank","width=500,height=500");
      c.remove();
      setTimeout(()=>{
        var z=e.document.querySelector('div[role="button"][aria-expanded="false"][aria-label="More"]');
        if(z)z.click();
        setTimeout(()=>{
          e.document.querySelector('div[data-testid="mute"]').click()
        },100);
        setTimeout(()=>{
          e.close()
        },200)
      },5000)
    }
  });
})()
