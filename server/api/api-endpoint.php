<?php
@include_once('class-apimanager.php');
$url_params = explode('/', $_SERVER['REQUEST_URI']);

//ex : urls_params = /carnet_angular/api/user
//ex : urls_params = /carnet_angular/api/carnet

$ressource = $url_params[3];

$result = '{}';

//Récuperation de la definition de la classe APIManager
$service_manager_class = new ReflectionClass('APIManager');
try {
    $methode_manager = $service_manager_class->getMethod($ressource);
    //Utilisation de la méthode, elle retourne une instance d'une ressource (exemple: Carnet, Note, Utilisateur...)
    $ressource_class = $methode_manager->invoke(new APIManager());
    //Création de la reflexion de classe
    $ressource_class = new ReflectionClass($ressource_class);
    //Instanciation d'un objet de type $serviceClasse
    $ressource_object = $ressource_class->newInstanceArgs();

    switch ($_SERVER['REQUEST_METHOD']) {

        case "GET":
            $id = $url_params[4];

            if (isset($id) && !empty($id)) {
                $result = $ressource_object->get_by_id($id);
            } else {
                $result = $ressource_object->get_all();
            }
            break;

        case "POST":
            $data = json_decode(file_get_contents("php://input"), false);
            $result = $ressource_object->add($data);
            break;

        case "PUT":
            $data = json_decode(file_get_contents("php://input"), false);
            $result = $ressource_object->update($data);
            break;

        case "DELETE":
            $id = $url_params[4];

            if (isset($id) && !empty($id)) {
                $result = $ressource_object->delete($id);
            }
            break;

    }

} catch (ReflectionException $e) {
    //@TODO improve this temporary log
    echo $e;
}

$json = json_encode($result);
 echo $json;

return;