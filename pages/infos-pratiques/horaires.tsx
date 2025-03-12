export default function Horaires() {
  return (
    <div>
      <h1>Horaires</h1>
      <p>Nous sommes ouverts le mercredi de 13h30 à 18h et les week-ends de 10h30 à 18h.</p>
      <p>Pendant les vacances scolaires (zone A), nous sommes ouverts du mardi au dimanche de 10h30 à 18h.</p>
      <h2>En période scolaire (zone A)</h2>
      <h3>Ouverture au grand public :</h3>
      <ul>
        <li>Le mercredi de 13h30 à 18h.</li>
        <li>Un jeudi soir par mois de 18h à minuit (selon programmation)</li>
        <li>Le samedi, le dimanche et les jours fériés de 10h30 à 18h.</li>
      </ul>
      <h3>Ouverture aux scolaires et aux groupes sur réservation (sauf jours fériés) :</h3>
      <ul>
        <li>Le mardi, jeudi et vendredi de 9h à 12h et de 13h30 à 17h.</li>
        <li>Le mercredi de 9h à 12h.</li>
      </ul>
      <h2>Pendant les vacances scolaires (zone A)</h2>
      <h3>Ouverture au grand public :</h3>
      <ul>
        <li>Du mardi au dimanche de 10h30 à 18h.</li>
        <li>Un jeudi soir par mois de 18h à minuit (selon programmation)</li>
      </ul>
      <h3>Pause méridienne</h3>
      <p>Possibilité de déjeuner sur place (repas tiré du sac).</p>
      <p>Offre de restauration à proximité.</p>
      <button onClick={() => window.history.back()}>Retour</button>
    </div>
  );
}