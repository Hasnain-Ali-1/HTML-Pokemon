<?php
require_once 'database.php'; // The file with your PHP functions

$functionToCall = $_POST['function'];

switch ($functionToCall) {
    case 'getPokemon':
        $pokemonNumber = $_POST['pokemonNumber'];
        $result = getPokemon($pokemonNumber);
        break;
    case 'getMoveset':
        $type = $_POST['type'];
        $stage = $_POST['stage'];
        $result = getMoveset($type, $stage);
        break;
    case 'getMove':
        $moveName = $_POST['moveName'];
        $result = getMove($moveName);
        break;
    default:
        $result = array('error' => 'Invalid function name provided');
        break;
}

echo json_encode($result);
?>
