
<?php

require_once('JSONRPC.php');

$rpc = new JSONRPC("http://c.fanciullo@me.com:ja93ja@192.168.0.26:3777/api/");


    $CategoryList = $rpc->IPS_GetChildrenIDs(33603);
    $var = "";

    foreach ($CategoryList as $CategoryChildren ) {
        $var .= $CategoryChildren  . ";" ;
        $array = explode(";", $var);
        //var_dump($var);
    }
    //var_dump($Objects);
?>

<script> 
    var PHPtoString = '<?php echo json_encode($CategoryList) ?>'; 
    var Child = '<?php echo json_encode($array) ?>';
    //console.log(Snapshot);
</script> 






