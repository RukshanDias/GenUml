<?php
    
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['email'];
    $userName = $_POST['uname'];
    $password = $_POST['pwd'];
    $cpassword = $_POST['cpwd'];

    //database connection
    $conn = mysqli_connect('localhost','root','','genuml',3308);
    if(!$conn){
        die('Connection Failed :'.mysqli_error($conn));
    }else{
        if(!empty($firstName) && !empty($lastName) && !empty($email) && !empty($userName) && !is_numeric($firstName) && !is_numeric($lastName) && !is_numeric($userName)) {
            if($password == $cpassword){
            $query = "INSERT INTO users (firstName,lastName,emailAddress,userName,password) VALUES ('$firstName','$lastName','$email','$userName','$password')";
            mysqli_query($conn,$query);
            echo"registration Successfully..";
            $conn -> close();
            } else {
                echo "check your password";
            }
        } else {
            echo "please fill the form correctly";
        }
    }
?>
