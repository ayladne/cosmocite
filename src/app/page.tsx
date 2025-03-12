"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <header className="w-full flex justify-between items-center p-4 space-x-4 bg-white shadow-md rounded-lg">
        <img src="/logo_cosmocite.png" alt="img ici" className="h-12" />
        {isClient && (
          <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative bg-blue-500 text-white px-4 py-2 rounded">
              Menu
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <div className="p-2">
                    <h3 className="font-bold text-black">Explorer</h3>
                    <ul>
                      <li><Link href="/explorer/terre-univers" className="text-black">Expo de la Terre à l'Univers</Link></li>
                      <li><Link href="/explorer/planetarium" className="text-black">Planétarium</Link></li>
                      <li><Link href="/explorer/salle-immersive" className="text-black">Salle immersive</Link></li>
                      <li><Link href="/explorer/cosmo-kids" className="text-black">CosmoKids</Link></li>
                      <li><Link href="/explorer/belvedere" className="text-black">Belvédère</Link></li>
                      <li><Link href="/explorer/boutique" className="text-black">Boutique</Link></li>
                    </ul>
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold text-black">Vous êtes ?</h3>
                    <ul>
                      <li><Link href="/vous-etes/scolaires" className="text-black">Scolaires</Link></li>
                      <li><Link href="/vous-etes/presse" className="text-black">Presse</Link></li>
                      <li><Link href="/vous-etes/entreprises" className="text-black">Entreprises</Link></li>
                      <li><Link href="/vous-etes/association-centre-loisirs" className="text-black">Association/centre de loisirs</Link></li>
                    </ul>
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold text-black">Infos pratiques</h3>
                    <ul>
                      <li><Link href="/infos-pratiques/preparer-ma-visite" className="text-black">Préparer ma visite</Link></li>
                      <li><Link href="/infos-pratiques/horaires" className="text-black">Horaires</Link></li>
                      <li><Link href="/infos-pratiques/tarifs-billetterie" className="text-black">Tarifs et billetterie</Link></li>
                      <li><Link href="/infos-pratiques/comment-venir" className="text-black">Comment venir ?</Link></li>
                      <li><Link href="/infos-pratiques/contacts" className="text-black">Contacts</Link></li>
                      <li><Link href="/infos-pratiques/prolonger-sa-visite" className="text-black">Prolonger sa visite</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </button>
            <Link href="/calendar">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Voir le calendrier</button>
            </Link>
          </>
        )}
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        <Link href="/explorer/planetarium">
          <div className="p-4 border rounded shadow-lg cursor-pointer bg-white">
            <h2 className="font-bold text-xl mb-2">Ticket Planexpo</h2>
            <p>
              Permet d'avoir accès à l'ensemble de Cosmocité sauf petits monts et merveilles. Inclus : les plateaux d'exposition permanentes Terre et Univers, la salle immersive, le belvédère et la séance de planétarium en fonction du film choisi.
            </p>
          </div>
        </Link>
        <Link href="/explorer/terre-univers">
          <div className="p-4 border rounded shadow-lg cursor-pointer bg-white">
            <h2 className="font-bold text-xl mb-2">Ticket Expo</h2>
            <p>
              Donne accès aux plateaux d'exposition permanentes Terre et Univers, la salle immersive, le belvédère.
            </p>
          </div>
        </Link>
        <Link href="/explorer/cosmo-kids">
          <div className="p-4 border rounded shadow-lg cursor-pointer bg-white">
            <h2 className="font-bold text-xl mb-2">Ticket Expokids</h2>
            <p>
              Valable uniquement pour l'activité "petits monts et merveilles".
            </p>
          </div>
        </Link>
      </main>
      <footer className="mt-8">
        <button onClick={() => setIsContactFormOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Contact</button>
        {isContactFormOpen && (
          <div className="mt-4 p-4 border rounded shadow-lg bg-white">
            <h2 className="font-bold text-xl mb-4">Contactez-nous</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nom*</label>
                <input type="text" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Prénom*</label>
                <input type="text" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email*</label>
                <input type="email" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full p-2 border rounded" required></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Joindre un fichier (PDF ou photo)</label>
                <input type="file" className="w-full p-2 border rounded" accept=".pdf, image/*" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
              <button type="button" onClick={() => setIsContactFormOpen(false)} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
            </form>
          </div>
        )}
      </footer>
    </div>
  );
}