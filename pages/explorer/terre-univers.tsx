import { useRouter } from 'next/router';

export default function TerreUnivers() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Expo de la Terre à l'Univers</h1>
      <p className="mb-4">
        Des profondeurs de la Terre à l’immensité de l’Univers, Cosmocité vous invite à explorer les interactions dans la nature.
      </p>
      <h2 className="text-xl font-bold mb-4">Infos</h2>
      <p className="mb-4">
        Temps de visite libre : 1h30<br />
        300 m² d'espace
      </p>
      <h2 className="text-xl font-bold mb-4">Public</h2>
      <p className="mb-4">
        À partir de 8 ans
      </p>
      <h2 className="text-xl font-bold mb-4">Thématiques</h2>
      <p className="mb-4">
        Sciences de la Terre, de l’Univers et de l’Environnement
      </p>
      <h2 className="text-xl font-bold mb-4">Tarifs / Parcours</h2>
      <p className="mb-4">
        Accès avec un ticket EXPO ou PLANEXPO
      </p>
      <h2 className="text-xl font-bold mb-4">Exposition "De la Terre à l'Univers"</h2>
      <p className="mb-4">
        + 8 ans<br />
        Exposition
      </p>
      <p className="mb-4">
        L’exposition sur deux étages s’organise autour de grandes questions que se posent les curieux et les scientifiques de notre époque : comment se transforme notre planète ? Est-il possible de tout prévoir ? La Terre est-elle unique ? Comment se forment les étoiles et les planètes ? Par le biais d’expériences ludiques et de jeux interactifs, trouvez quelques pistes de réponse.
      </p>
      <p className="mb-4">
        ⚠️ Accès uniquement avec les tickets PLANEXPO ou EXPO.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}