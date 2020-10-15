<?php

require_once('JSONRPC.php');

$rpc = new JSONRPC("http://c.fanciullo@me.com:ja93ja@192.168.0.26:3777/api/");

$Snapshot = $rpc->WFC_GetSnapshot(34374); // 34374
//$Coded = json_encode($Snapshot["objects"]["ID0"]); 


echo json_encode($Snapshot["objects"]["ID0"]); 

?> 
