<?php
/**
 * Created by PhpStorm.
 * User: asgard
 * Date: 05/02/14
 * Time: 22:05
 */

require '../vendor/autoload.php';
require '../config.php';


$dsn = "mysql:dbname=".DB_NAME.";host=".DB_HOST;
$username = DB_USER;
$password = DB_PASS;

$pdo = new PDO($dsn, $username, $password);
$db = new NotORM($pdo);

$app = new \Slim\Slim(array(
    'debug' => true,
    "MODE" => "development",
    "TEMPLATES.PATH" => "./templates"
));

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

$app->get("/", function() {
    echo "<h1>Hello Slim World</h1>";
});

$app->get("/carnets", function () use ($app, $db) {

    $carnets = $db->carnet();

    $app->response()->header("Content-Type", "application/json");
    echo json_encode($carnets);
});

$app->get("/carnet/:idCarnet/note/:idNote", function($idCarnet, $idNote) use ($app, $db){
    echo "We want to see in the carnet #$idCarnet the note #$idNote";
});


$app->get("/carnet/:id", function ($id) use ($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $data = $db->carnet()->where("id_carnet", $id);
    if ($carnet = $data->fetch()) {
        echo json_encode($carnet);
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "Carnet ID $id does not exist"
        ));
    }
});

$app->post("/carnet", function () use($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $carnet = $app->request()->post();
    $result = $db->carnet->insert($carnet);
    echo json_encode(array("id" => $result["id"]));
});

$app->put("/carnet/:id", function ($id) use ($app, $db) {
    echo 'put   ';
    $app->response()->header("Content-Type", "application/json");
    $carnet = $db->carnet()->where("id_carnet", $id);
    //@TODO better check on $result, if false still passes
    if ($carnet->fetch()) {
        $put = json_decode($app->request()->getBody(), true);
        echo '   params   ' . print_r($put, true);
        $result = $carnet->update($put);
        echo json_encode(array(
            "status" => (bool)$result,
            "message" => "Carnet updated successfully"
        ));
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "Carnet id $id does not exist"
        ));
    }
});

$app->delete("/carnet/:id", function ($id) use($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $carnet = $db->carnet()->where("id_carnet", $id);
    if ($carnet->fetch()) {
        $result = $carnet->delete();
        echo json_encode(array(
            "status" => true,
            "message" => "Carnet deleted successfully"
        ));
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "Carnet id $id does not exist"
        ));
    }
});

$app->run();