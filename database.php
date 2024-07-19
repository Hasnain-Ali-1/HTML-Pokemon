<?php
// Establish a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pokemon";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to retrieve a specific Pokemon's information based on its number
function getPokemon($pokemonNumber) {
    global $conn;

    $pokemonNumber = mysqli_real_escape_string($conn, $pokemonNumber);

    // Change 'number' to 'Num' in the SQL query
    $sql = "SELECT * FROM pokemon WHERE Num = $pokemonNumber";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    return $data;
}


// Function to retrieve movesets based on type and stage
function getMoveset($type, $stage) {
    global $conn;

    $type = mysqli_real_escape_string($conn, $type);
    $stage = mysqli_real_escape_string($conn, $stage);

    $sql = "SELECT * FROM moveset WHERE type = '$type' AND stage = '$stage'";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    return $data;
}

// Function to retrieve move information based on move name
function getMove($moveName) {
    global $conn;

    $moveName = mysqli_real_escape_string($conn, $moveName);

    $sql = "SELECT * FROM moves WHERE name = '$moveName'";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    return $data;
}
?>
