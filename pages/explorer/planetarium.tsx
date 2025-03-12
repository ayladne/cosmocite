import { useRouter } from 'next/router';

export default function Planetarium() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Planétarium</h1>
      <p className="mb-4">
        Sous la voûte du planétarium, embarquez pour une découverte du ciel étoilé et plongez au cœur des mystères de l’Univers.
      </p>
      <p className="mb-4">
        Chaque séance comprend une animation de 20 minutes en direct avec un médiateur suivie d'une projection d'un film. Les contenus de la partie animée sont adaptés en fonction de la thématique du film ainsi qu'à l'âge du public ciblé.
      </p>
      <h2 className="text-xl font-bold mb-4">Une séance en deux parties</h2>
      <p className="mb-4">
        Confortablement assis sous le dôme de 13m de diamètre, voyagez à travers l’espace grâce à un simulateur d’Univers qui assure la reproduction fidèle du ciel nocturne.
      </p>
      <p className="mb-4">
        Lors de votre séance, vous êtes accompagné d’un médiateur ou d’une médiatrice planétariste qui vous initie à l’observation du ciel : des étoiles aux galaxies. En sa compagnie, quittez la Terre, posez le pied sur la Lune, effleurez la surface de Mars ou approchez-vous d’un trou noir, d’une nébuleuse ou d’une exoplanète.
      </p>
      <p className="mb-4">
        En deuxième partie de séance, profitez d’un des films à l’affiche pour prolonger votre découverte.
      </p>
      <p className="mb-4">
        Le planétarium assure la diffusion de productions immersives allant du film d’animation pour enfants au documentaire scientifique tous publics. Une immersion renforcée par la haute résolution de l’image et un son de qualité.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}