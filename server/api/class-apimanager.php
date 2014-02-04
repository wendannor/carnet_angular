<?php
/**
 * Created by PhpStorm.
 * User: Wendannor
 * Date: 04/02/2014
 * Time: 22:44
 */

@include_once('class-cruduser.php');

class APIManager
{

    public function user()
    {
        return get_class(new CRUDUser());
    }
}