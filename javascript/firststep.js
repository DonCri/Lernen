function InstanzValue(value) {
        
    document.getElementById("Instanz").innerHTML = value.SenderID;
    document.getElementById("InstanzValue").innerHTML = value.Data[0];
   // console.log(value);
    SetValue(value.SenderID ,value.Data[0], value.Data[3])
}

/**
 * 
 * @param {*} ID // ObjektID die gefiltert werden soll
 * @param {*} Value // Wert der ObjektID
 * @param {*} TimeStamp // Unix Timestamp
 */
function SetValue(ID, Value, TimeStamp) {
    if(ID == 11132) {
        document.getElementById("TFKStatus").innerHTML = Value;
        // Unix Timestamp in lesericher String konvertieren
        var TimeMilli = TimeStamp * 1000;
        var DateObject = new Date(TimeMilli);
        var FormattedTime = DateObject.toLocaleString();
        document.getElementById("TFKTime").innerHTML = FormattedTime;
    }
}

