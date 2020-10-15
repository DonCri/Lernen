
  /**
  * Infos:
  * https://www.symcon.de/forum/threads/40111-Websocket
  */

  var wsUri = "ws://192.168.0.26:3777/wfc/34374/api/";		// no authentication (WebFront API)
  //var wsUri = "wss://f1bcf6ee94a306786955d43b0dd7cd03.ipmagic.de/wfc/34374/api/";		// no authentication (WebFront API) SSH
  //var wsUri = "ws://f1bcf6ee94a306786955d43b0dd7cd03.ipmagic.de/api/";				// Full API 
  //var wsUri = "ws://192.168.49.51:3777/wfc/14134/api/";		// needs authentication (webfront:2222)
  var output;

  function init()
  {
    output = document.getElementById("output");
    testWebSocket();
  }

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
	  //websocket = new WebSocket(wsUri, [encodeURIComponent(btoa('webfront:2222'))]);
    //websocket = new WebSocket(wsUri, [encodeURIComponent(btoa('c.fanciullo@me.com:ja93ja'))]);
    //websocket = new WebSocket(wsUri, [encodeURIComponent(btoa('<fernzugriff-user>:<fernzugriff-passwd>'))]);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
     writeToScreen("CONNECTED");
     doSend('{jsonrpc: "2.0", method: "WFC_GetConfigurators", params: [], id: 1588239526125}');
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  } 

  function onMessage(evt)
  {
          let Object = JSON.parse(evt.data);
          InstanzValue(Object);

    writeToScreen('<span style="color: black;">RESPONSE: ' + evt.data+'</span>');
    // websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    //output.appendChild(pre);
  }

  window.addEventListener("load", init, false);

  

 

 // <!-- <h2>WebSocket Test</h2>

  // <div><p id="output"></p></div> -->