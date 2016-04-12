<?php

 function basic_auth_message(){
  header("WWW-Authenticate: Basic realm=\"Enter User name and password\"");
  header("HTTP\ 1.0 401 Unauthorized");
  echo 'There was a validation error';
  exit;
 }

 //basic authentication function
 function authenticate(){

  if(empty($_SERVER['PHP_AUTH_USER']))
   {
    basic_auth_message();
   }

  else if($_SERVER['PHP_AUTH_USER'] !== 'admin@bizmeet' && $_SERVER['PHP_AUTH_PW'] !== 'admin@123')
   {
    basic_auth_message();
   }

 }

authenticate();

?>
<?php include_once("home.html"); ?>