import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, BookOpen, Briefcase, Home, UserCheck, Sparkles } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  const segmentations = [
    {
      title: "BERANI",
      description: "Edukasi pencegahan seks bebas dan pernikahan dini untuk remaja usia 10-14 tahun",
      icon: <Heart className="h-8 w-8" />,
      color: "from-pink-400 via-rose-400 to-red-400",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/10 dark:to-rose-900/10",
      cardBg: "bg-white dark:bg-gray-800/50 backdrop-blur-sm",
      age: "10-14 Tahun",
      image: "/teenagers-health-education.png"
    },
    {
      title: "BERAKSI",
      description: "Aksi nyata dalam pencegahan dan edukasi untuk remaja usia 15-17 tahun",
      icon: <Target className="h-8 w-8" />,
      color: "from-blue-400 via-indigo-400 to-purple-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/10 dark:to-indigo-900/10",
      cardBg: "bg-white dark:bg-gray-800/50 backdrop-blur-sm",
      age: "15-17 Tahun",
      image: "/teenagers-community-service.png"
    },
    {
      title: "BERKOLABORASI",
      description: "Kerjasama dalam membangun generasi berkualitas untuk remaja usia 18-21 tahun",
      icon: <Users className="h-8 w-8" />,
      color: "from-green-400 via-emerald-400 to-teal-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/10 dark:to-emerald-900/10",
      cardBg: "bg-white dark:bg-gray-800/50 backdrop-blur-sm",
      age: "18-21 Tahun",
      image: "/young-adults-collaboration.png"
    }
  ]

  const lifeTransitions = [
    {
      title: "Mempraktikan Hidup Sehat",
      description: "Membangun pola hidup sehat sejak dini untuk masa depan yang lebih baik",
      icon: <Sparkles className="h-6 w-6" />,
      color: "border-l-4 border-l-green-400 dark:border-l-green-500",
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Melanjutkan Pendidikan",
      description: "Pentingnya pendidikan berkelanjutan untuk pengembangan diri",
      icon: <BookOpen className="h-6 w-6" />,
      color: "border-l-4 border-l-blue-400 dark:border-l-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Mencari Pekerjaan",
      description: "Persiapan dan strategi memasuki dunia kerja dengan baik",
      icon: <Briefcase className="h-6 w-6" />,
      color: "border-l-4 border-l-purple-400 dark:border-l-purple-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Menikah dan Berkeluarga",
      description: "Memahami kesiapan dan tanggung jawab dalam berumah tangga",
      icon: <Home className="h-6 w-6" />,
      color: "border-l-4 border-l-pink-400 dark:border-l-pink-500",
      bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Menjadi Anggota Masyarakat",
      description: "Berperan aktif dan positif dalam kehidupan bermasyarakat",
      icon: <UserCheck className="h-6 w-6" />,
      color: "border-l-4 border-l-orange-400 dark:border-l-orange-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <img 
            src="/hero-background-beranda.png" 
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              SIGMA SI KENCANA
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 opacity-90">
              <span className="font-semibold">Aksi Genre Mencegah Ancaman Seks Bebas dan Pernikahan Dini Menuju Keluarga Berencana</span>
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 lg:py-24">
        {/* Segmentasi Section */}
        <section id="materi" className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Segmentasi Program
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tiga pilar utama dalam membangun generasi yang berkualitas dan bertanggung jawab, 
              disesuaikan dengan tahap perkembangan remaja
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {segmentations.map((segment, index) => (
              <Card key={index} className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden h-full ${segment.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
                <div className="relative">
                  <img 
                    src={segment.image || "/placeholder.svg"} 
                    alt={segment.title}
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-semibold backdrop-blur-sm">
                      {segment.age}
                    </Badge>
                  </div>
                </div>
                
                <div className={`p-6 lg:p-8 ${segment.bgColor}`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 lg:p-4 rounded-full bg-gradient-to-r ${segment.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {segment.icon}
                    </div>
                  </div>
                  <CardHeader className="text-center p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {segment.title}
                    </CardTitle>
                  </CardHeader>
                </div>
                
                <CardContent className={`p-6 lg:p-8 ${segment.cardBg}`}>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                    {segment.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Life Transitions Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              5 Transisi Kehidupan Remaja
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tahapan penting dalam perjalanan hidup remaja menuju kedewasaan yang bertanggung jawab
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {lifeTransitions.map((transition, index) => (
              <Card key={index} className={`group hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 ${transition.color} ${transition.bgGradient} border-0 h-full ${transition.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
                <CardHeader className="pb-4 p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 lg:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {transition.icon}
                    </div>
                    <Badge variant="secondary" className="bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-semibold">
                      Transisi {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {transition.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 lg:p-8 pt-0">
                  <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                    {transition.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
