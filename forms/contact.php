<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST["name"]) ? strip_tags($_POST["name"]) : '';
    $email = isset($_POST["email"]) ? strip_tags($_POST["email"]) : '';
    $subject = isset($_POST["subject"]) ? strip_tags($_POST["subject"]) : '';
    $message = isset($_POST["message"]) ? strip_tags($_POST["message"]) : '';
    $to = "info@cm-employment.com";
    $headers = "From: $email";
    $body = "Naam: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Onderwerp: $subject\n\n";
    $body .= "Bericht:\n$message\n";
    mail($to, "Nieuw bericht van contactformulier", $body, $headers);
    echo "Bedankt, uw bericht is verzonden. We nemen spoedig contact met u op.";
} else {
    echo "Er is iets misgegaan. Probeer het alstublieft opnieuw.";
}
?>
