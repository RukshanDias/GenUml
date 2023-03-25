<?php
header("Access-Control-Allow-Origin: *"); //enable any domain to send HTTP requests to these endpoints:

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dict = $_POST['dictionary'];
    $dict = str_replace('"', "'", $dict);
            
    $result = '';

    $escapedArgument = escapeshellarg("import sys; sys.path.append('./draw'); import draw_diagram; print(draw_diagram.generate_plantuml_code($dict))");
    $result = shell_exec("python -c $escapedArgument");

    
    $data = array("code" => $result);
    echo json_encode($data);

    }
?>