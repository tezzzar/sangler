<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Поштова адреса отримувача
    $to = 'sangler@sangler.com.ua';

    // Тема листа
    $subject = 'Нове повідомлення з форми зворотного зв’язку';

    // Тіло листа
    $body = "Імʼя: $name\n";
    $body .= "Телефон: $phone\n";
    if (!empty($email)) {
        $body .= "Email: $email\n";
    }
    if (!empty($message)) {
        $body .= "Повідомлення:\n$message";
    }

    // Заголовки
    $headers = "From: sangler@sangler.com.ua\r\n" . // Замість noreply@вашдомен.com вкажіть адресу вашого сайту або реальний домен
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=utf-8\r\n" .
               "MIME-Version: 1.0\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Відправлення листа
    if (mail($to, $subject, $body, $headers)) {
        // Перенаправлення на сторінку email_sent_successfully.html після успішного відправлення
        header('Location: email_sent_successfully.html');
    } else {
        echo 'Сталася помилка під час відправлення повідомлення. Спробуйте ще раз.';
    }
} else {
    echo 'Будь ласка, заповніть форму.';
}
?>
