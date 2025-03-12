import Link from 'next/link';

export default function InfosPratiques() {
  return (
    <div>
      <h1>Infos pratiques</h1>
      <ul>
        <li><Link href="/infos-pratiques/preparer-ma-visite">Préparer ma visite</Link></li>
        <li><Link href="/infos-pratiques/horaires">Horaires</Link></li>
        <li><Link href="/infos-pratiques/tarifs-billetterie">Tarifs et billetterie</Link></li>
        <li><Link href="/infos-pratiques/comment-venir">Comment venir ?</Link></li>
        <li><Link href="/infos-pratiques/contacts">Contacts</Link></li>
        <li><Link href="/infos-pratiques/prolonger-sa-visite">Prolonger sa visite</Link></li>
      </ul>
    </div>
  );
}