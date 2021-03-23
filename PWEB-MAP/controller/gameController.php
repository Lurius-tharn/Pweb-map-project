<?php

// Chargement des classes
require_once('../model/game.php');

function getCountry(){

    
    $game = new Game(); // Création d'un objet
    $country = $game->getCountry(); // Appel d'une fonction de cet objet
    echo $country["country"];
}

