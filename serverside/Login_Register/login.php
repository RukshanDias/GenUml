<?php 
session_start(); 
header("Access-Control-Allow-Origin: *");

// include "db_connect.php";

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "genuml"; 
 
$con = mysqli_connect($host, $user, $password,$dbname);
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }

  if (isset($_POST['email']) && isset($_POST['pass'])) {
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $sql = "SELECT * FROM users WHERE emailAddress='".$email."'";
    $result = mysqli_query($con, $sql);
    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        // verify the password using password_verify() function
        if (password_verify($pass, $row['password'])) {
            // password is correct, set session variables and send response
            $_SESSION['email'] = $row['emailAddress'];
            $_SESSION['fname'] = $row['firstName'];
            $_SESSION['lname'] = $row['lastName'];
            echo json_encode($_SESSION);
            exit();
        } else {
            // password is incorrect, send response
            echo false; // response
            exit();
        }
    } else {
        // user not found, send response
        echo false; // response
        exit();
    }
} else {
    // invalid request, send response
    echo "error";
}
