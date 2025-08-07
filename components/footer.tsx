import Link from "next/link"
import { Heart, Target, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SIGMA SI KENCANA
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed text-lg">
              Platform edukasi digital yang berkomitmen untuk mencegah seks bebas dan pernikahan dini, 
              serta membangun generasi yang berkualitas dan bertanggung jawab.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-300 dark:text-blue-400">Program</h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li><Link href="/berani" className="hover:text-pink-300 dark:hover:text-pink-400 transition-colors flex items-center gap-2"><Heart className="h-4 w-4" /> Berani</Link></li>
              <li><Link href="/beraksi" className="hover:text-blue-300 dark:hover:text-blue-400 transition-colors flex items-center gap-2"><Target className="h-4 w-4" /> Beraksi</Link></li>
              <li><Link href="/berkolaborasi" className="hover:text-green-300 dark:hover:text-green-400 transition-colors flex items-center gap-2"><Users className="h-4 w-4" /> Berkolaborasi</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-lg">
            © 2025 SIGMA SI KENCANA. Muhamad Hamudi | Duta Genre Kota Sukabumi
          </p>
        </div>
      </div>
    </footer>
  )
}
