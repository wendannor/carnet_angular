<?php
/** 
* MYSQLi DB Connection Class - implementing Singleton Design Pattern 
* 
* Usage : 
* $db = DBConnexion::getInstance();
* $mysqli = $db->getConnexion();
*/
class DBConnexion{
    //TODO : les parametres de connexion devraient être exterieurs...
    private $this->_host = "localhost";
    private $this->_user = "root";
    private $this->_pass = "";
    private $this->_name = "carnet";

    private $_connexion;  
    private static $_instance;  

    /** constructeur private => classe instanciée depuis elle-même. */
    private function __construct(){
        $this->_connexion = new mysqli($this->_host, $this->_user, $this->_pass, $this->_name);
        if (mysqli_connect_error()) {
            trigger_error("Failed to connect to MySQL: " . mysql_connect_error(), E_USER_ERROR);
        }
        //if ($this->_connexion->connect_error){  
        //   throw new Exception("Could not connect to Database.");  
        //}
    }  
    
    public static function getInstance(){
        if (is_null(self::$_instance)){  
            self::$_instance= new DBConnexion();  
        }  
        return self::$_instance;  
    }
    
    
    /** Get mysqli connection */
    public function getConnexion() {
        return $this->_connexion;
    }
    
    /** Magic method clone is empty to prevent duplication of connection */
    private function __clone() { 
    }
}