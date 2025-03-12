import { useRouter } from 'next/router';

export default function Presse() {
  const router = useRouter();

  return (
    <div>
      <h1>Presse</h1>
      <p>Contenu de la page Presse.</p>
      <p>Rendez-vous sur le site de Territoire de sciences</p>
      <p>
        Cosmocité est une composante de Territoire de sciences, l’établissement public de diffusion de la culture scientifique, technique et industrielle Grenoble-Alpes.
      </p>
      <button onClick={() => router.back()}>Retour</button>
    </div>
  );
}