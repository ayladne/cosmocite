import { useRouter } from 'next/router';

export default function Boutique() {
  const router = useRouter();

  return (
    <div>
      <h1>Boutique</h1>
      <p>
        Gardez un souvenir de votre visite
      </p>
      <p>
        Dans notre boutique située au rez-de-chaussée de Cosmocité, nous avons déniché pour vous une sélection originale de produits pour prolonger votre visite, en écho à nos espaces d’expositions et à notre programmation :
      </p>
      <ul>
        <li>des ouvrages ludiques et éducatifs pour petits et grands sur l’astronomie, notre planète, le climat ou encore l’environnement,</li>
        <li>des jeux et des activités scientifiques, des jeux de société,</li>
        <li>des cartes postales et de la papeterie et encore plein d’autres idées cadeaux</li>
      </ul>
      <p>
        Pensez à effectuer vos achats avant la fermeture de la boutique à 17h45.
      </p>
      <button onClick={() => router.back()} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Retour
      </button>
    </div>
  );
}