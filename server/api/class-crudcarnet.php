<?php
/**
 * Created by PhpStorm.
 * User: Wendannor
 * Date: 04/02/2014
 * Time: 22:44
 */
class CRUDCarnet {
    private $this->mysqli;

    private function __construct($mysqli){
        $this->mysqli = $mysqli;
    }

    public function get_by_id($id) {
        echo '<br /> get_by_id of CRUDCarnet with id '.$id;
    }

    public function get_all() {
        if ($this->mysqli->connect_errno) {
            echo "Echec lors de la connexion à MySQL : " . $this->mysqli->connect_error;
        }

        $res = $this->mysqli->query("SELECT * FROM carnet");


        $tab = array();
        while($row = $res->fetch_assoc()) {
           $tab[]= $row;
        }
        return $tab;
    }

    public function update($data) {
        echo '<br /> update of CRUDCarnet with data '.print_r($data, true);
    }

    public function delete($id) {
        echo '<br /> delete of CRUDCarnet with id '.$id;
    }

    public function add($data) {
        echo '<br /> add of CRUDCarnet with data '.print_r($data, true);
    }


}