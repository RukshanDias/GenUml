<?php
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['email'];
    $userName = $_POST['uname'];
    $password = $_POST['pwd'];

    //database connection
    $conn = new mysqli('localhost','root','','dbname');
    if($conn -> connect_error){
        die('Connection Failed :'.$conn -> connect_error);
    }else{
        $statement = $conn -> prepare("INSERT INTO tableName('','','','','')
        values(?,?,?,?,?,?)");
        $statement->bind_param("sssss",$firstName,$lastName,$email,$userName,$password);
        $statement->execute();
        echo"registration Successfully..";
        $statement -> close();
        $conn -> close();
    }
?>