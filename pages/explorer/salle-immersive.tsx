import { useRouter } from 'next/router';

export default function SalleImmersive() {
  const router = useRouter();

  return (
    <div>
      <h1>Salle immersive</h1>
      <p>
        Plongez au cœur de l’image et du son en vous déplaçant entre les deux écrans installés au sol et au mur. Interagissez avec l'environnement visuel et sonore pour vivre une expérience unique mêlant découverte, aventure, contemplation ou jeu...
      </p>
      <h2>À chacun·e son expérience</h2>
      <p>
        Dans la salle immersive, chaque expérience est unique.
      </p>
      <p>
        Des productions exclusives vous attendent et sont programmées chaque semaine ou à l’occasion d'événements spéciaux.
      </p>
      <p>
        Entrez dans la salle immersive et plongez directement au coeur de l’image et du son. Seul ou à plusieurs, découvrez cette salle unique en son genre à Grenoble et vivez une expérience immersive décoiffante. Marchez sur une méduse, évitez un astéroïde, écoutez les forêts, rêvez en admirant des volutes et turbulences ou jouez pour résoudre un escape game… La programmation évolue et vous réserve des surprises !
      </p>
      <p>
        Pour une expérience unique, la salle immersive est équipée d’écrans interactifs au sol et au mur de 12m x 7m, image haute résolution 2D et 3D et son 5.1.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}