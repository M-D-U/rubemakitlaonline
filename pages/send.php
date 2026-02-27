<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Validate required fields
    if (!$name || !$email || !$message) {
        header("Location: index.html?error=1");
        exit();
    }

    $to = "info@rubbenmakitla.co.za"; // ✅ Make sure spelling is correct
    $subject = "New Contact Form Message";

    $body = "You have received a new message from your website.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    $headers = "From: info@rubbenmakitla.co.za\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: ../pages/contact.html?success=1");
        exit();
    } else {
        header("Location: ../pages/contact.html?error=1");
        exit();
    }
}

?>