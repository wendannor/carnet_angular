<?php
/**
 * Created by PhpStorm.
 * User: Wendannor
 * Date: 04/02/2014
 * Time: 22:44
 */

@include_once('class-dbconnexion.php');
@include_once('class-cruduser.php');
@include_once('class-crudcarnet.php');

class APIManager {

    public function user() {
        return get_class(new CRUDUser());
    }

    public function carnet() {
        $db = DBConnexion::getInstance();
        $mysqli = $db->getConnexion();
        
        return get_class(new CRUDCarnet($mysqli));
    }

}



