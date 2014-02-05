<?php
/**
 * Created by PhpStorm.
 * User: Wendannor
 * Date: 04/02/2014
 * Time: 22:44
 */

class CRUDCarnet {

    public function get_by_id($id) {
        echo '<br /> get_by_id of CRUDCarnet with id '.$id;
    }

    public function get_all() {
            require "../config.inc.php";

            $db = mysql_connect($db_host, $db_login, $db_password);
            mysql_select_db($db_base, $db);

            // Création de la requète SQL
            $query ="SELECT * FROM carnet" ;

            // Exécution de la requète SQL
            $result = mysql_query($query, $db);

            $tab = array();
            while ($row = mysql_fetch_assoc($result)) {
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