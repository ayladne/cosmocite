import { useRouter } from 'next/router';

export default function CosmoKids() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">CosmoKids</h1>
      <p className="mb-4">
        Dans ce lieu dédié aux 3-7 ans, les enfants peuvent éveiller leur curiosité et leur goût pour les sciences. Tester, se questionner, manipuler, recommencer, tout est mis en place pour que les enfants découvrent par eux-mêmes. Ils sont acteurs de leur visite et il est interdit de NE PAS toucher !
      </p>
      <h2 className="text-xl font-bold mb-4">Visite Petits Monts et Merveilles - De 3 à 7 ans</h2>
      <p className="mb-4">
        L’exposition Petits Monts et Merveilles s’adresse aux enfants de 3 à 7 ans. Elle les entraîne dans une exploration ludique et interactive de la montagne. Animaux, plantes, métiers, protection de l’environnement, habitats, risques... Le milieu montagnard n’aura plus de secret pour eux. L’exposition place les enfants dans l’attitude de petits scientifiques en herbe. Accompagnés par leurs parents, les enfants partent explorer le milieu montagnard à travers les nombreux jeux et manipulations proposés. Ils seront invités à observer, expérimenter, réfléchir et se questionner pour percer les secrets de la montagne et de ses habitants.
      </p>
      <p className="mb-4">
        ⚠️ Le ticket EXPOKIDS ne donne accès qu'à l'exposition jeune public. Pour accéder aux autres espaces de Cosmocité (planétarium, belvédère, exposition, salle immersive), un ticket EXPO ou PLANEXPO vous sera demandé.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}