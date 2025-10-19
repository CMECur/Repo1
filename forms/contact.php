<?php
  /**
  * Contact form for Camille’s Multipurpose Employment
  * 
  * Make sure the "PHP Email Form" library exists at:
  * ../assets/vendor/php-email-form/php-email-form.php
  * 
  * If you don't have the pro version, you can replace this with your own mail() script later.
  */

  // Ontvanger: jouw echte bedrijfsadres
  $receiving_email_address = 'info@cm-employment.com';

  // Controleer of de PHP Email Form library bestaat
  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    die('Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;

  // Basisinstellingen
  $contact->to = $receiving_email_address;
  $contact->from_name = isset($_POST['name']) ? $_POST['name'] : 'Anonymous';
  $contact->from_email = isset($_POST['email']) ? $_POST['email'] : 'no-reply@cm-employment.com';
  $contact->subject = isset($_POST['subject']) ? $_POST['subject'] : 'Contact Form Submission';

  // SMTP (optioneel, alleen invullen als je via hostingprovider SMTP moet gebruiken)
  /*
  $contact->smtp = array(
    'host' => 'mail.cm-employment.com',
    'username' => 'info@cm-employment.com',
    'password' => 'JOUW_EMAIL_WACHTWOORD_HIER',
    'port' => '587'
  );
  */

  // Berichten toevoegen
  $contact->add_message($_POST['name'], 'From');
  $contact->add_message($_POST['email'], 'Email');
  $contact->add_message($_POST['message'], 'Message', 10);

  echo $contact->send();
?>
