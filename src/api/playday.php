<?php
    require('api.lib.php');

    $playday = getLastSpieltag($db);

    if($playday === null) {
        $playday = 1;
    }

    $nextspieltag = getNextSpieltag($db);
    $tippdatum = getSpieldatum($nextspieltag, $db);

    if(time() > $tippdatum) {
        $playday++;
    }

    $return = array(
        'playday' => $playday,
        'tipptime' => $tippdatum,
        'time' => time()
    );



    $json = json_encode($return);
    print_r($json);

    //close the db connection
    mysqli_close($db);