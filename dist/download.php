

<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['content'])) {
        $content = $_GET['content'];
        $filename = 'content.pdf';

        // Set appropriate headers
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $filename . '"');

        // Output the content and exit
        echo $content;
        exit;
    }
}
?>
