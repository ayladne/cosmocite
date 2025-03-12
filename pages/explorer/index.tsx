import Link from 'next/link';

export default function Explorer() {
  return (
    <div>
      <h1>Explorer</h1>
      <ul>
        <li><Link href="/explorer/terre-univers">Expo de la Terre à l'Univers</Link></li>
        <li><Link href="/explorer/planetarium">Planétarium</Link></li>
        <li><Link href="/explorer/salle-immersive">Salle immersive</Link></li>
        <li><Link href="/explorer/cosmo-kids">CosmoKids</Link></li>
        <li><Link href="/explorer/belvedere">Belvédère</Link></li>
        <li><Link href="/explorer/boutique">Boutique</Link></li>
      </ul>
    </div>
  );
} 