export default function TarifsBilletterie() {
  return (
    <div>
      <h1>Tarifs et billetterie</h1>
      <p>En fonction des événements et de vos profils, nous proposons différents tarifs, retrouvez-les sur notre billetterie</p>
      
      <h2>Ticket EXPO</h2>
      <p>Plein tarif : 7€ – Tarif réduit : 5€ – Enfant de 5 à 17 ans : 4€</p>
      <p>Vous donne accès au :</p>
      <ul>
        <li>Niveau 0 : Exposition des sciences de la Terre et de l’environnement</li>
        <li>Niveau 1 : Exposition des sciences de l’Univers</li>
        <li>Niveau 2 : Salle Immersive</li>
        <li>Niveau 3 : Belvédère</li>
      </ul>

      <h2>Ticket PLANEXPO</h2>
      <p>Plein tarif : 11€ – Tarif réduit : 7€ – Enfant de 5 à 17 ans : 5€</p>
      <p>Vous donne accès au :</p>
      <ul>
        <li>Niveau 0 : Exposition des sciences de la Terre et de l’environnement</li>
        <li>Niveau 1 : Exposition des sciences de l’Univers</li>
        <li>Niveau 1 : Planétarium</li>
        <li>Niveau 2 : Salle Immersive</li>
        <li>Niveau 3 : Belvédère</li>
      </ul>
      <p>Il est recommandé de se conformer aux âges indiqués.</p>
      <p>Attention : les séances démarrent à heure fixe. Les participants doivent se présenter à l’entrée du planétarium au 1er étage au moins 15 minutes avant. Afin de ne pas perturber la séance en cours il ne sera pas possible aux retardataires d’entrer dans le planétarium. Toute sortie est définitive.</p>

      <h2>Ticket EXPOKIDS</h2>
      <p>Accompagnateur : 2€ – Enfant de 3 à 7 ans : 4€</p>
      <p>Vous donne accès au :</p>
      <ul>
        <li>Niveau -1 : Exposition Petits Monts et Merveilles (environ 1h)</li>
      </ul>

      <h2>Tarifs réduits</h2>
      <p>Nos tarifs réduits sont soumis à des conditions, ils concernent les personnes suivantes :</p>
      <ul>
        <li>Étudiant(e) de moins de 26 ans</li>
        <li>Demandeurs d’emploi</li>
        <li>Allocataires des minima sociaux</li>
        <li>Enseignants</li>
        <li>Groupes spontanés de 10 personnes n’ayant pas réservé une prestation sur mesure</li>
        <li>Personnes en situation de handicap se déplaçant à titre individuel</li>
      </ul>
      <p>Pour plus d’informations, contacter l’accueil à accueil@cosmocite.fr ou 04 80 42 34 34</p>

      <h2>Modalités</h2>
      <p>Paiement en ligne par carte bleue</p>
      <p>Paiement sur place par carte bleue, chèque et espèces</p>

      <h2>Quel billet choisir ?</h2>
      <p>En fonction de vos envies, choisissez le billet qui vous correspond.</p>
      <p>A noter :</p>
      <ul>
        <li>L’exposition Petits Monts et Merveilles est accessible via un ticket EXPOKIDS.</li>
        <li>Ce billet n’ouvre pas l’accès à l’exposition De la Terre à l’Univers ou à la salle immersive, ni au planétarium ou au belvédère</li>
        <li>Ce billet est payant pour les enfants à qui s’adresse l’exposition (3 à 7 ans)</li>
        <li>Les accompagnants (parents, grande soeur ou grand frère …) doivent aussi prendre un billet gratuit (limite de 2 accompagnants par enfant)</li>
        <li>Les séances de planétarium sont accessibles via un ticket PLANEXPO. Les billets planétarium, sauf mention contraire, comprennent la visite de l’exposition De la Terre à l’Univers</li>
        <li>L’accès à la salle immersive est permis aux détenteurs de tickets PLANEXPO, EXPO ou ESCAPE GAME.</li>
        <li>Pour les familles qui auraient visité l’exposition Petits Monts et Merveilles et souhaiteraient se rendre à l’exposition De la Terre à l’Univers ou à la salle immersive de Cosmocité, cela nécessite :</li>
        <ul>
          <li>L’achat d’un TICKET EXPO pour les adultes</li>
          <li>La prise d’un billet gratuit pour les enfants de moins de 5 ans pour qui l’exposition et la salle immersive sont gratuites en raison de la non adaptation des contenus qui y sont proposés</li>
        </ul>
      </ul>
      <p>Pour prendre vos billets, vous pouvez opter pour deux approches :</p>
      <ul>
        <li>Déterminez la semaine à laquelle vous souhaitez nous rendre visite et faire votre choix en fonction des activités proposées chaque jour et consultable sur notre billetterie en ligne</li>
        <li>Repérez l’expérience immersive, la séance de planétarium, l’événement auquel vous souhaitez absolument participer et rendez-vous sur la billetterie dédiée pour trouver la date qui vous convient.</li>
      </ul>

      <h2>Accès à la billetterie</h2>
      <p>Deux billetteries en ligne distinctes vous permettent d’accéder à la programmation régulière à Cosmocité et aux événements programmés en soirées.</p>
      <ul>
        <li>Billetterie Cosmocité en journée</li>
        <li>Billetterie Cosmocité en soirée</li>
      </ul>
      <p>Il vous est aussi possible d’acheter vos billets sur place au guichet pour le jour même ou une date ultérieure. L’équipe d’accueil se chargera de vous orienter au mieux.</p>
      <p>En période de forte affluence (vacances, ouverture, jours fériés) la réservation en ligne est vivement conseillée pour les séances de planétarium et les visites guidées de Petits Monts et Merveilles.</p>
      <p>Les activités affichant complet sur notre billetterie n’ont plus de places disponibles pour la date indiquées. Aucune place supplémentaire n’est vendue en guichet.</p>
      
      <button onClick={() => window.history.back()}>Retour</button>
    </div>
  );
}