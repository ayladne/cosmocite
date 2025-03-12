import { useRouter } from 'next/router';

export default function PreparerMaVisite() {
  const router = useRouter();
  return (
    <div>
      <h1>Préparer ma visite</h1>
      <h2>Conditions d'accueil</h2>
      <p>Qu'allez-vous trouver à Cosmocité ? Pour qui ?</p>
      <p>
        Cosmocité propose à la visite différents espaces qui s’adressent à des publics d’âges différents.
      </p>
      <h3>En détail, vous pourrez découvrir :</h3>
      
      <h4>Pour les plus jeunes</h4>
      <ul>
        <li>l’exposition jeune public adaptée pour les enfants de 3 à 7 ans accompagnés de leur(s) parent(s) et ou grand(e) soeur ou frère (dans la limite de 2 accompagnants par enfant)</li>
        <li>la séance de planétarium jeune public pour les enfants à partir de 5 ans</li>
      </ul>

      <h4>Dès 8 ans</h4>
      <ul>
        <li>Les séances de planétarium ou Nous sommes des étoiles</li>
        <li>La découverte du parcours ludique de l’exposition de la Terre à l’Univers</li>
        <li>Les expériences de la salle immersive à l’exception de l’escape game Ice Core Adventure</li>
      </ul>

      <h4>De 12 ans à 99 ans et plus</h4>
      <ul>
        <li>L’exposition de la Terre à l’Univers</li>
        <li>Les séances de planétarium</li>
        <li>Les expériences de la salle immersive</li>
      </ul>

      <h4>Pour tout public</h4>
      <p>
        Le belvédère ravira petits et grands en leur permettant de contempler la métropole et les massifs alentours.
        Accessible dès le hall d’accueil, le pendule de Foucault est un objet fascinant à tout âge.
      </p>

      <h3>Combien de temps dure une visite à Cosmocité ?</h3>
      <p>
        Chaque visiteur est différent, entre ceux qui lisent tout avec attention et souhaitent tester tous les dispositifs de l’exposition, ceux qui déambulent en fonction de leurs centres d’intérêts, ceux qui font un court passage après avoir nagé à flotibulle ou pratiqué la clarinette au conservatoire intercommunale de musique.
      </p>
      <p>
        Voici néanmoins quelques repères :
      </p>
      <ul>
        <li>La visite de l’exposition en autonomie prend entre 45 min et 1h30 selon la manière dont vous la parcourez.</li>
        <li>Une séance de planétarium dure 50 minutes environ.</li>
        <li>Elles sont programmées à heure fixe, comprennent une partie médiée et la diffusion d’un film et sont animées par un médiateur.</li>
        <li>La visite jeune public dure 1h environ.</li>
        <li>Elle est programmée à heure fixe et animée par un médiateur.</li>
        <li>En salle immersive, à l’exception de l’escape game Ice Core Adventure qui dure 1h environ, une grande partie des expériences proposées n’a pas de début ni de fin. Vous pouvez donc y passer le temps que vous voulez. Comptez en moyenne de 15 min à 30 min.</li>
        <li>En cas de forte affluence, nous nous réservons le droit de limiter le temps passé dans la salle pour permettre à tous d’y accéder.</li>
        <li>Le belvédère. Amoureux des panoramas, vous y passerez des heures là où d’autres prendront une quinzaine de minutes pour découvrir les sommets emblématiques du paysage et l’extension du glacier qui recouvrait autrefois la métropole.</li>
        <li>Compte tenu du temps nécessaire à la visite des expositions et pour vous garantir une expérience agréable, le dernier accès aux espaces d’expositions et au belvédère est fixé à 45 minutes avant l’heure de fermeture.</li>
        <li>A noter : la dernière séance de planétarium de la journée est prévue à 17h. Si vous souhaitez pouvoir y assister et visiter les expositions, nous vous recommandons d’arriver environ 1h avant l’heure de la séance.</li>
      </ul>

      <h3>Les équipements sur place ?</h3>
      <p>
        Lors de votre visite, vous pourrez sur place bénéficier :
      </p>
      <ul>
        <li>d’un vestiaire muni de casiers verrouillables gratuit (jetons disponibles à l’accueil). Pour éviter tout risque de perte ou de vol, nous vous invitons à ne pas laisser d’objets de valeur dans les vestiaires. Cosmocité décline toute responsabilité en cas d’incidents.</li>
        <li>d’un espace détente où pique-niquer pendant la pause méridienne, prendre un goûter … Nous ne mettons pas à disposition de four micro-ondes. Il est interdit de manger ou boire dans tout autre espace de Cosmocité.</li>
        <li>d’une table à langer dans les toilettes pour personnes à mobilité réduite situées au niveau R-1 à proximité de l’espace détente.</li>
        <li>des sièges et fauteuils sont à disposition dans les espaces pour les personnes pour lesquelles une station debout prolongée est synonyme d’inconfort.</li>
      </ul>

      <h3>Accessibilité</h3>
      <p>
        L’équipe de Cosmocité travaille en faveur de l’accueil et de la visite de tous les publics. Aussi, un certain nombre de propositions sont offertes pour les personnes en situation de handicap. N’hésitez pas à vous annoncer à l’accueil ou nous contacter pour tout complément d’information.
      </p>
      <h4>Personnes à mobilité réduite</h4>
      <p>
        Cosmocité est accessible aux personnes à mobilité réduite (hauteur des mobiliers, ascenseurs, accès aux salles de projection, rampes). 4 places PMR sont disponibles dans le planétarium.
      </p>
      <p>
        Les personnes à mobilité réduite et en fauteuil peuvent accéder à la salle immersive. A noter : seul l’expérience immersive astéroïdes, nécessitant des déplacements rapides et fins, peut être source de difficultés.
      </p>

      <h4>Personnes malentendantes</h4>
      <p>
        5 systèmes de boucle magnétique amplifiant le son du planétarium pour les personnes appareillées sont disponibles sur demande.
      </p>

      <h4>Cas particulier des salles de projection</h4>
      <p>
        Attention, les projections des salles planétarium et immersive peuvent impacter les personnes sensibles et porteuses de certains troubles cognitifs.
      </p>

      <h3>Visites adaptées</h3>
      <p>
        Contactez l’équipe pour en savoir plus sur les visites et ateliers accessibles selon votre situation.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}