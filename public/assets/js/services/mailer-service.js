//console.log('assets/js/mailer-service.js chargé ✅');

/**
 * Envoi d'un email via le service EmailJS
 * @param {Object} infoContact
 * objet contenant les informations soumises du formulaire {name : String, email : String, message : String}
 */
function sendMail(infoContact) {
  console.log(infoContact);
  // TODO: Appel du service EmailJS pour envoyer un email
  // avec les informations soumises du formulaire
  // en paramètre
  // Créer un compte sur https://smtpjs.com/
  // Créer des identifiants pour le service EmailJS SMTP
  // Reporter les identifiants dans le code ci-dessous
  // L'envoie d'email peut se vérifier dans l'interface d'EmailJS
  // Vérifier si les champs obligatoires sont vides

  if (!infoContact.name || !infoContact.email || !infoContact.message) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return; // Stop execution if any required field is empty
  }

  return Email.send({
    Host: "smtp.elasticemail.com",
    Username: "schadevwwm@gmail.com",
    Password: "2950093606A67EB780B77704ABD0D97425F9",
    To: "contact@gmail.com",
    From: "schadevwwm@gmail.com",
    Subject: "Une demande de contact depuis le site Space Tour",
    Body:
      "Une demande de contact a été envoyée depuis le site, Space Tour." +
      infoContact.name +
      infoContact.email +
      infoContact.message,
  })
    .then(
      // si l'email est envoyé, afficher une alerte de succès
      (message) => alert(message + "\nVotre message a bien été envoyé !")
    )

    .catch(
      // si une erreur survient lors de l'envoi de l'email, afficher une alerte d'erreur
      (error) =>
        alert(
          error + "\n Une erreur est survenue lors de l'envoi de votre message."
        )
    );
}
// Function to validate email address format
