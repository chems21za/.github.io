document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
  
    // Récupération des valeurs des champs
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var hotel = document.getElementById('hotel').value;
    var nuit = document.getElementById('nuit').value;
    var personnes = document.getElementById('personnes').value;
  
    // Construction de l'e-mail
    var emailContent = "Nom: " + nom + "\n";
    emailContent += "Prénom: " + prenom + "\n";
    emailContent += "E-mail: " + email + "\n";
    emailContent += "Hôtel: " + hotel + "\n";
    emailContent += "Nombre de nuits: " + nuit + "\n";
    emailContent += "Nombre de personnes: " + personnes + "\n";
  
    // Envoyer l'e-mail (dans cet exemple, l'e-mail est simplement affiché dans la console)
    console.log("E-mail envoyé avec les informations suivantes :\n" + emailContent);
  
    // Vous pouvez ajouter ici du code pour envoyer l'e-mail via un service d'e-mail tel que SMTP ou une API d'e-mail
    const nodemailer = require('nodemailer');

// Créer un transporteur SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zaoualichemseddine@gmail.com', // Votre adresse e-mail
        pass: 'Nike2000!' // Votre mot de passe
    }
});

// Paramètres de l'e-mail
let mailOptions = {
    from: 'zaoualichemsedddine@gmail.com@gmail.com',
    to: 'zaoualichemseddine@example.com',
    subject: 'Nouvelle réservation d\'hôtel',
    text: emailContent // Contenu de l'e-mail
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail envoyé: ' + info.response);
    }
});

  });