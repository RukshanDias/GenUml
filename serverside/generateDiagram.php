<?php
header("Access-Control-Allow-Origin: *"); //enable any domain to send HTTP requests to these endpoints:

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $para = $_POST['userinput-textarea'];
            
    $result = '';
    $python_file = "mainGenerate.py";
    $function_name = "runGenerator";
    $escapedArgumment = escapeshellarg($para);

    $result = shell_exec("python $python_file \"$para\"");
    
    $lines = explode("\n\n\n", $result);
    $result1 = trim($lines[0]);  // First line
    $result2 = trim($lines[1]);  // Second line

    $data = array("link" => $result2, "dictionary" => $result1);
    echo json_encode($data);

    }
?>