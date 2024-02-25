<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address (your Gmail)
    $to = "blessingechukwunwike@gmail.com";

    // Set email subject
    $subject = "New Contact Form Submission";

    // Compose the email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    $success = mail($to, $subject, $body, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo "Message sent successfully. Thank you!";
    } else {
        echo "Error sending message. Please try again.";
    }
} else {
    // Handle non-POST requests (optional)
    echo "Invalid request method.";
}
?>
