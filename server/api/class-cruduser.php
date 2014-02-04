<?php
/**
 * Created by PhpStorm.
 * User: Wendannor
 * Date: 04/02/2014
 * Time: 22:44
 */

class CRUDUser {

    public function get_by_id($id) {
        echo '<br /> get_by_id of CRUDUser with id '.$id;
    }

    public function get_all() {
        echo '<br /> get_all of CRUDUser';
    }

    public function update($data) {
        echo '<br /> update of CRUDUser with data '.print_r($data, true);
    }

    public function delete($id) {
        echo '<br /> delete of CRUDUser with id '.$id;
    }

    public function add($data) {
        echo '<br /> add of CRUDUser with data '.print_r($data, true);
    }


}