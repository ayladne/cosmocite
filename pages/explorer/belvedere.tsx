import { useRouter } from 'next/router';

export default function Belvedere() {
  const router = useRouter();
  return (
    <div>
      <h1>Belvédère</h1>
      <p>
        A 25 mètres de hauteur, le belvédère offre une vue unique sur les paysages de la vallée grenobloise et sur les massifs montagneux de la Chartreuse, de Belledonne et du Vercors !
      </p>
      <p>
        Saviez-vous qu’il y a 25 000 ans, la glace recouvrait Grenoble sur plus de 1 000 mètres ?
      </p>
      <p>
        Le paysage que nous observons nous semble avoir toujours été le même. Pourtant, il est le résultat de multiples épisodes qui l’ont façonné au cours du temps, et dont les héritages sont encore visibles aujourd’hui.
      </p>
      <p>
        Découvrez la maquette de la vallée grenobloise sous la glace pour en savoir plus et pointez quelques-uns des sommets les plus hauts de la chaîne de Belledonne et du massif de la Chartreuse.
      </p>
      <p>
        A découvrir au dernier étage.
      </p>
      <p>
        En compagnie des médiateurs et médiatrices, venez observer le ciel étoilé depuis le belvédère de Cosmocité.
      </p>
      <p>
        Les soirées d’observation ont lieu le jeudi une fois par mois quand la météo le permet. Ces soirées sont l’occasion de s’initier à la découverte du ciel à l’œil nu, aux instruments et techniques utiles à l’observation des planètes et mystères du ciel profond.
      </p>
      <p>
        A partir de 15 ans.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}