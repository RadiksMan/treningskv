<?php
    $subject = 'Заявка с сайта';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }
    if(isset($_POST['contact_name'])) {
        $name = substr(htmlspecialchars(trim($_POST['contact_name'])), 0, 100);
        $mess .= '<b>Имя: </b>' . $name . '<br>';
    }
    if(isset($_POST['contact_tel'])) {
        $tel = substr(htmlspecialchars(trim($_POST['contact_tel'])), 0, 100);
        $mess .= '<b>Телефон:</b> ' . $tel . '<br>';
    }
    if(isset($_POST['form_select'])) {
        $tel = substr(htmlspecialchars(trim($_POST['form_select'])), 0, 100);
        $mess .= '<b>Дата:</b> ' . $tel . '<br>';
    }
    if(isset($_POST['contact_count'])) {
        $tel = substr(htmlspecialchars(trim($_POST['contact_count'])), 0, 100);
        $mess .= '<b>Стоимость:</b> ' . $tel . '<br>';
    }
    if(isset($_POST['email'])) {
        $mail = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
        $mess .= '<b>Почта:</b> ' . $mail . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('klientmkd@gmail.com, amrmkd@gmail.com, nikita.shulpin@gmail.com','');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
	$mail->From = 'amrmkd@gmail.com';
	$mail->FromName = "";
    if(isset($_FILES['file'])) {
            if($_FILES['file']['error'] == 0){
            $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }
    }
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }?>