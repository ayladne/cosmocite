eximport { useRouter } from 'next/router';

export default function CommentVenir() {
  const router = useRouter();
  
  return (
    <div>
      <h1>Comment venir ?</h1>
      <h2>Localisation et modes de transport</h2>
      <p>Organisez votre trajet, retrouvez toutes les informations pour faciliter votre arrivée.</p>
      
      <h3>Plan d'accès à Cosmocité</h3>
      <h4>Localisation :</h4>
      <ul>
        <li>Coordonnées postales : 85 Cours Saint-André 38800 Le Pont-de-Claix</li>
        <li>Coordonnées GPS (Apple) : 45.14051553692622, 5.702764165173165</li>
        <li>Coordonnées GPS (Google Map) : 4PR3+54 Le Pont-de-Claix</li>
      </ul>

      <h4>En voiture :</h4>
      <ul>
        <li>À 5 minutes de la Rocade Sud, sortie 8 Pont de Claix par le Cours Jean Jaurès.</li>
        <li>À 4 minutes de la A480, sortie 7 Pont de Claix.</li>
        <li>Un parking public et gratuit est accessible par la rue Firmin Robert, derrière le bâtiment.</li>
      </ul>

      <h4>En transports en commun :</h4>
      <ul>
        <li>Par le Tram A depuis Fontaine, Grenoble ou Echirolles, arrêt Pont-de-Claix l’Etoile puis 5 minutes à pied.</li>
        <li>Par le bus Chrono C2 depuis Grenoble arrêt “Ecureuil” puis 3 minutes à pied.</li>
        <li>Par le bus Chrono C2 depuis Pont-de-Claix arrêt “l’Etoile” puis 4 minutes à pied.</li>
      </ul>

      <h4>Transports scolaires :</h4>
      <p>Des places de parking sont disponibles pour les bus le long de la rue Firmin Robert.</p>

      <h4>À vélo :</h4>
      <p>Piste Chronovélo 3. Des arceaux pour accrocher votre vélo sont accessibles sur le parvis Thomas Pesquet.</p>

      <h4>En fusée :</h4>
      <p>Attention, les places de parking pour les fusées sont à réserver à l’avance 🙂</p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}