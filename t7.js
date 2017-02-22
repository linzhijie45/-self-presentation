var xmlhttp;
function loadXMLDoc(url)
{
xmlhttp=null;
if (window.XMLHttpRequest)
  {// code for IE7, Firefox, Mozilla, etc.
  xmlhttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {// code for IE5, IE6
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
if (xmlhttp!=null)
  {
  xmlhttp.onreadystatechange=onResponse;
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
  }
else
  {
  alert("Your browser does not support XMLHTTP.");
  }
}

function onResponse()
{
if(xmlhttp.readyState!=4) return;
if(xmlhttp.status!=200)
  {
  alert("Problem retrieving XML data");
  return;
  }


document.getElementById('copy').innerHTML=xmlhttp.responseText;
}

