<?php
function getUser($login, $password) {
    
    // Connexion à la base de données
    require "../server/config.php";
    $db = mysql_connect($db_host, $db_login, $db_password);
    mysql_select_db($db_base, $db);

    // Création de la requète SQL
    $sql_login = mysql_real_escape_string($login); // Eviter les injections SQL
    $sql_password = mysql_real_escape_string($password); // Eviter les injections SQL
    $query ="SELECT * FROM user WHERE login='$sql_login' AND password='$sql_password'" ;

    // Exécution de la requète SQL
    $result = mysql_query($query, $db);

    $user = null;
    while ($row = mysql_fetch_array($result)) {
        $user['idUser'] = $row['id_user'];
        $user['login'] = $row['login'];
        $user['email'] = $row['email'];
        $user['nomComplet'] = $row['nom_complet'];
    }
    
    return $user;
} 



session_start();
$data = json_decode(file_get_contents('php://input'), true);

$login    = $data['login'];
$password = $data['password'];

$user = getUser($login, $password);

if ($user != null) {
    // Mise en session de l'objet
    foreach ($user as $key => $value){
        $_SESSION[$key] = $value;
    }
    echo 'connecté';
} else {
    echo 'pas connecté';
}