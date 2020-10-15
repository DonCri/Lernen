<?php

require_once('JSONRPC.php');

$rpc = new JSONRPC("https://c.fanciullo@me.com:ja93ja@f1bcf6ee94a306786955d43b0dd7cd03.ipmagic.de/api/");

$rpc->HUE_SetState(35969, false) ."<br>";

echo "<a href='getinfo.php'>Licht ein</a>";

?>


