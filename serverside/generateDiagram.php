<?php
header("Access-Control-Allow-Origin: *"); //enable any domain to send HTTP requests to these endpoints:

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $para = $_POST['userinput-textarea']; // get user story
            
    $result = '';
    $python_file = "mainGenerate.py";
    $escapedArgumment = escapeshellarg($para);

    // run python file
    $result = shell_exec("python $python_file \"$para\"");
    
    $lines = explode("\n\n\n", $result);

    // error handling - check isset
    if (isset($lines[0])) {
        $result1 = trim($lines[0]);  // First line
    } else {
        $result1 = '';
    }
    
    if (isset($lines[1])) {
        $result2 = trim($lines[1]);  // Second line
    } else {
        $result2 = '';
    }
    
    $data = array("link" => $result2, "dictionary" => $result1);
    echo json_encode($data);

    }
?>