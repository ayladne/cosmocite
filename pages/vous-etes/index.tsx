import Link from 'next/link';

export default function VousEtes() {
  return (
    <div>
      <h1>Vous êtes ?</h1>
      <ul>
        <li><Link href="/vous-etes/scolaires">Scolaires</Link></li>
        <li><Link href="/vous-etes/presse">Presse</Link></li>
        <li><Link href="/vous-etes/entreprises">Entreprises</Link></li>
        <li><Link href="/vous-etes/association-centre-loisirs">Association/centre de loisirs</Link></li>
      </ul>
    </div>
  );
}