<?php
session_start();

// Ecraser le tableau de session
$_SESSION = array();

// D�truire la session
session_destroy();

// On redirige sur la home
header('Location: ../index.php') ;
exit();
