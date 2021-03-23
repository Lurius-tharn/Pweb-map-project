<?php
require('../controller/gameController.php');
try {
    if( isset($_POST['data'])){

        getCountry();
    }
}
catch(Exception $e) {
    echo 'Erreur : ' . $e->getMessage();
}
?>
