export default function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <p>Vous souhaitez un renseignement, réserver un créneau pour une classe ou un groupe, contacter un membre de l’équipe ? Contactez-nous par mail à l’adresse <a href="mailto:accueil@cosmocite.fr">accueil@cosmocite.fr</a> ou par téléphone au 04 80 42 34 34. Vous pouvez également dialoguer avec nous sur les réseaux sociaux (X, Facebook, Instagram).</p>
      <button onClick={() => window.scrollTo(0, 0)}>Retour</button>
    </div>
  );
}