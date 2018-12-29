<?php

try{
	
	$conn = new \PDO ("mysql:host=localhost;dbname=eclectic","root","");
}catch(\PDOException $e){
	
	echo "Error! Message:".$e->getMessage()." Code:".$e->getCode();
	
}
