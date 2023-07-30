<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input values from the form
    $heading = $_POST["getHeading"];
    $imageURL = $_POST["getImage"];
    $description = $_POST["getDesc"];

    // Generate the HTML for the page
    $html = "
        <!DOCTYPE html>
        <html>
        <head>
            <title>$heading</title>
        </head>
        <body>
            <h1>$heading</h1>
            <img src='$imageURL' alt='Image'>
            <p>$description</p>
        </body>
        </html>
    ";

    // Set the appropriate headers for file download
    header("Content-Type: text/html");
    header("Content-Disposition: attachment; filename=downloaded_page.html");
    header("Access-Control-Allow-Methods", "PUT, GET,POST");
    // Output the generated HTML to the user's browser
    echo $html;
}
?>




