<?php
/**
 * Created by PhpStorm.
 * User: asgard
 * Date: 05/02/14
 * Time: 22:05
 */

require '../vendor/autoload.php';
require '../config.php';
require '../Utils.class.php';


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

$app->get("/notebooks", function () use ($app, $db) {

    $notebooks = $db->notebook();
    $result = array();
    foreach ($notebooks as $notebook) {
        $result[] = Utils::arraySnakeCaseToCamelCase($notebook);
    }
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($result);
});

$app->get("/notebook/:idnotebook/note/:idNote", function($idnotebook, $idNote) use ($app, $db){
    echo "We want to see in the notebook #$idnotebook the note #$idNote";
});


$app->get("/notebook/:id", function ($id) use ($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $data = $db->notebook()->where("id_notebook", $id);
    if ($notebook = $data->fetch()) {
        $notebook = Utils::arraySnakeCaseToCamelCase($notebook);
        echo json_encode($notebook);
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "notebook ID $id does not exist"
        ));
    }
});

$app->post("/notebook", function () use($app, $db) {
    echo 'POST';

    $app->response()->header("Content-Type", "application/json");
    $params = json_decode($app->request()->getBody(), true);
    $params = Utils::arrayCamelCaseToSnakeCase($params);
    echo print_r($params, true);
    $result = $db->notebook->insert($params);
    echo json_encode(array("id" => $result["id"]));
});

$app->put("/notebook/:id", function ($id) use ($app, $db) {

    $app->response()->header("Content-Type", "application/json");
    $notebook = $db->notebook()->where("id_notebook", $id);
    //@TODO better check on $result, if false still passes
    if ($notebook->fetch() != false) {
        $params = json_decode($app->request()->getBody(), true);

        $result = $notebook->update(Utils::arrayCamelCaseToSnakeCase($params));
        echo json_encode(array(
            "status" => (bool)$result,
            "message" => "notebook updated successfully"
        ));
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "notebook id $id does not exist"
        ));
    }
});

$app->delete("/notebook/:id", function ($id) use($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $notebook = $db->notebook()->where("id_notebook", $id);
    if ($notebook->fetch()) {
        $result = $notebook->delete();
        echo json_encode(array(
            "status" => true,
            "message" => "notebook deleted successfully"
        ));
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "notebook id $id does not exist"
        ));
    }
});

$app->run();