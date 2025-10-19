<?php
  /**
  * Quote request form for Camille’s Multipurpose Employment
  *
  * Requires the "PHP Email Form" library (included in the pro version)
  * File should exist at: ../assets/vendor/php-email-form/php-email-form.php
  *
  * If you don't have it, you can later replace this with your own mail() script.
  */

  // Ontvanger: jouw bedrijfsadres
  $receiving_email_address = 'info@cm-employment.com';

  // Controleer of de PHP Email Form library aanwezig is
  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    die('Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;

  // Basisinformatie
  $contact->to = $receiving_email_address;
  $contact->from_name = isset($_POST['name']) ? $_POST['name'] : 'Anonymous';
  $contact->from_email = isset($_POST['email']) ? $_POST['email'] : 'no-reply@cm-employment.com';
  $contact->subject = 'Request for a Quote - Camille’s Multipurpose Employment';

  // SMTP (optioneel, alleen invullen als je hosting dat vereist)
  /*
  $contact->smtp = array(
    'host' => 'mail.cm-employment.com',
    'username' => 'info@cm-employment.com',
    'password' => 'JOUW_EMAIL_WACHTWOORD_HIER',
    'port' => '587'
  );
  */

  // Berichtinhoud
  $contact->add_message($_POST['name'], 'From');
  $contact->add_message($_POST['email'], 'Email');
  $contact->add_message($_POST['phone'], 'Phone');
  $contact->add_message($_POST['message'], 'Message', 10);

  echo $contact->send();
?>
