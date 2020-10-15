var websocket = null;

var app = document.getElementById("app");			// app element holen
var template = Handlebars.compile(app.innerHTML);	// template daraus machen

// meine Daten
var data = {
	letzterWert: 0,
	letzteNachricht: {},
	letzteSenderID: 0,
	alleNachrichten: [],
}


// meine Verarbeitung
function nachrichtVerarbeiten(nachricht){
	data.letzterWert = nachricht.Data[0];
	data.letzteNachricht = nachricht;
	data.letzteSenderID = nachricht.SenderID;
	data.alleNachrichten.push(nachricht);
	aktualisieren();
}


/***********************
 **  Hilfsfunktionen  **
 ***********************/

function verbinden(){
	console.log('verbinden..');
	websocket = new WebSocket(
		"ws://192.168.0.26:3777/wfc/34374/api/",
		[encodeURIComponent(btoa('c.fanciullo@me.com:ja93ja'))]
	);
    websocket.onmessage = function(evt) { nachrichtErhalten(evt) };
}

function trennen(){
	console.log('trennen..');
	websocket.close();
}

function nachrichtErhalten(evt){
	console.log(evt.data);
	var objekt = JSON.parse(evt.data);
	nachrichtVerarbeiten(objekt);
}

function aktualisieren(){
	app.innerHTML = template(data);				// alle werte im template ersetzen
}
aktualisieren();
