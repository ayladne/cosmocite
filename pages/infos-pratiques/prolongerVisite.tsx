export default function ProlongerSaVisite() {
  return (
    <div>
      <h1>Prolonger sa visite</h1>
      <p>Contenu de la page Prolonger sa visite.</p>
      <h2>Pour étendre votre visite à une journée, voici quelques sources d’inspiration</h2>
      <h3>La Casemate à Grenoble</h3>
      <p>
        Centre de culture scientifique, technique et industrielle historique de l’agglomération grenobloise, La Casemate propose des activités et événements en lien avec sa Galerie d’exposition, ainsi que son Fab Lab et son Media Lab. La Casemate et Cosmocité sont les deux équipements gérés par Territoire de sciences, établissement public de coopération culturelle pour la diffusion de la culture scientifique Grenoble-Alpes.
      </p>
      <p>Découvrez les événements de la Casemate</p>

      <h3>La culture scientifique à Grenoble et en Isère</h3>
      <p>
        La plateforme Echosciences Grenoble est une mine d’information sur les acteurs, les actualités et les événements culturels et scientifiques de la région grenobloise !
      </p>
      <p>Découvrez la carte des acteurs de culture scientifique</p>
      <p>Consultez l’agenda de la culture scientifique locale</p>

      <h3>Tourisme autour de Cosmocité</h3>
      <p>Pour découvrir d’autres lieux culturels et sportifs de la région :</p>
      <p>
        L’office de tourisme de Grenoble-Alpes Métropole vous accueille au 14 rue de la République à Grenoble.
      </p>
      <p>
        Pour préparer votre visite dans le département, rendez vous sur le site Isère Tourisme.
      </p>
      <button onClick={() => window.history.back()}>Retour</button>
    </div>
  );
}