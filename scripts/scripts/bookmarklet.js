javascript:(function(){ 
  var curr_url = location.href; 

  alert(curr_url);
  alert(document.cookie);
}
)();

  // var cookies = document.cookies.get({
    // firstPartyDomain: ".adventofcode.com",
    // name: "session"
  // });

javascript:!function(){
  var t='adventofcode.com',o='';
  
  if(location.host!=t)
    alert('Not for this host, but for '+t);
  else{
    var e=atob(o).split(';'),i=new Date();
    i.setTime(i.getTime()+31536e6);
    for(var r='expires='+i.toUTCString(),a=0;a<e.length;a++)
      document.cookie=e[a].trim()+';'+r+';path=/';location.reload()
    }
  }();
    void(0);


// NOTE
// not sure if im accessing the correct object
// document.cookie is returning blank string