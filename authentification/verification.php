<?php
function existeUser($login, $password) {
    
	// Connexion � la base de donn�es
	require "config.inc.php";
	$db = mysql_connect($db_host, $db_login, $db_password);
	mysql_select_db($db_base, $db);
	
	// Cr�ation de la requ�te SQL
	$sql_login = mysql_real_escape_string($login); // Eviter les injections SQL
	$sql_password = mysql_real_escape_string($password); // Eviter les injections SQL
	$query ="SELECT * FROM user WHERE login='$sql_login' AND password='$sql_password'" ;
	
    
	// Ex�cution de la requ�te SQL
	$result = mysql_query($query, $db);
	
    
	if (mysql_num_rows($result) > 0) {
        return true;
    } else {
        return false;
    }
    
    
    /*
    if ($login == "dupont" && $password == "dupont") {
        return true;
    }
    return false;
    */
} 



session_start() ; // initialisation de la session
$data = json_decode(file_get_contents('php://input'), true);
print_r($data);
$login = null;
if (isset($_POST['login'])){
    $login = $_POST['login'];
}

$password = null;
if (isset($_POST['password'])){
    $password = $_POST['password'];
}


$isAuth = false;
if ($login && $password) {
	if (existeUser($login, $password)) {
        $isAuth = true;
		// sauvegarde de l'identifiant dans la session
		$_SESSION['login'] = $login ;
		$_SESSION['nomComplet'] = "Jean Dupont" ;
	}
}

if ($isAuth){
    // On redirige sur la home
    $user = array();
    $user['login'] = "j.dupont";
    $user['nomComplet'] = "Jean Dupont";
	exit();
} else {
    // On redirige sur la page d'authentification
    echo 'pas co';
	exit();
}

