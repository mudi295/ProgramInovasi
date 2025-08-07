import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Heart, Award, BookOpen, Globe, Lightbulb, Shield } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TentangPage() {
  const visionMission = [
    {
      title: "Visi",
      description: "Menjadi platform edukasi digital terdepan dalam mencegah seks bebas dan pernikahan dini, serta membangun generasi Indonesia yang berkualitas dan bertanggung jawab.",
      icon: <Target className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/10 dark:to-indigo-900/10",
      iconColor: "text-blue-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Misi",
      description: "Memberikan edukasi komprehensif, memfasilitasi aksi nyata, dan membangun kolaborasi strategis untuk menciptakan generasi yang paham akan kesehatan reproduksi dan siap menghadapi masa depan.",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/10 dark:to-rose-900/10",
      iconColor: "text-pink-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    }
  ]

  const values = [
    {
      title: "Edukasi Berkualitas",
      description: "Menyediakan materi edukasi yang akurat, relevan, dan mudah dipahami",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Inklusivitas",
      description: "Terbuka untuk semua kalangan tanpa memandang latar belakang",
      icon: <Users className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Inovasi Digital",
      description: "Memanfaatkan teknologi untuk pembelajaran yang interaktif dan menarik",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "Perlindungan Remaja",
      description: "Mengutamakan keselamatan dan perlindungan generasi muda",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    }
  ]

  const programs = [
    {
      title: "BERANI",
      subtitle: "Usia 10-14 Tahun",
      description: "Program edukasi dasar tentang kesehatan reproduksi, pencegahan seks bebas, dan bahaya pernikahan dini. Fokus pada pemahaman perubahan tubuh dan komunikasi yang sehat.",
      features: ["Materi Edukasi Interaktif", "Test Kepribadian MBTI", "Quiz Pemahaman", "Konsultasi Online"],
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
      icon: <Heart className="h-8 w-8" />,
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "BERAKSI",
      subtitle: "Usia 15-17 Tahun",
      description: "Program aksi nyata untuk remaja yang ingin berkontribusi dalam pencegahan. Meliputi kampanye, peer education, dan program volunteer.",
      features: ["Pelatihan Peer Educator", "Workshop Kampanye", "Program Volunteer", "Media Sosial Advocacy"],
      color: "bg-gradient-to-br from-blue-500 to-indigo-500",
      icon: <Target className="h-8 w-8" />,
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    {
      title: "BERKOLABORASI",
      subtitle: "Usia 18-21 Tahun",
      description: "Program kolaborasi strategis untuk membangun kemitraan dan kebijakan yang mendukung generasi muda. Fokus pada leadership dan sustainability.",
      features: ["Kemitraan Strategis", "Advokasi Kebijakan", "Penelitian Kolaboratif", "Program Sustainability"],
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      icon: <Users className="h-8 w-8" />,
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    }
  ]

  const achievements = [
    { 
      number: "10,000+", 
      label: "Remaja Teredukasi", 
      icon: <Users className="h-6 w-6" />,
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    { 
      number: "50+", 
      label: "Sekolah Partner", 
      icon: <BookOpen className="h-6 w-6" />,
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    { 
      number: "25+", 
      label: "Kota Jangkauan", 
      icon: <Globe className="h-6 w-6" />,
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm"
    },
    { 
      number: "95%", 
      label: "Tingkat Kepuasan", 
      icon: <Award className="h-6 w-6" />,
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
            src="/protection-shield-young-people.png" 
            alt="Tentang Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Tentang Kami
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-90 leading-relaxed">
              Membangun generasi Indonesia yang berkualitas melalui edukasi digital yang inovatif dan komprehensif
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 lg:py-24">
        {/* Vision & Mission */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Visi & Misi
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Komitmen kami dalam membangun masa depan yang lebih baik untuk generasi muda Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {visionMission.map((item, index) => (
              <Card key={index} className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${item.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
                <div className={`${item.color} p-8 lg:p-12`}>
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah dan program yang kami jalankan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`group hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 ${value.color} border-0 h-full ${value.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
                <CardHeader className="text-center pb-4 p-6 lg:p-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6 lg:p-8 pt-0">
                  <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Program Kami
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tiga segmentasi program yang dirancang khusus sesuai dengan tahap perkembangan remaja
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {programs.map((program, index) => (
              <Card key={index} className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden ${program.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
                <div className="md:flex">
                  <div className={`${program.color} p-8 lg:p-12 md:w-1/3 flex flex-col justify-center items-center text-white`}>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">{program.title}</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-base lg:text-lg px-3 py-1">
                      {program.subtitle}
                    </Badge>
                  </div>
                  <div className={`p-8 lg:p-12 md:w-2/3 ${program.cardBg}`}>
                    <CardDescription className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed mb-6">
                      {program.description}
                    </CardDescription>
                    <div className="grid md:grid-cols-2 gap-3 lg:gap-4">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-sm lg:text-base font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Pencapaian Kami
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Dampak positif yang telah kami ciptakan bersama komunitas dan mitra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`group hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 border-0 text-center ${achievement.cardBg} border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm`}>
                <CardContent className="p-8 lg:p-12">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-base lg:text-lg">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800 text-white border-0 overflow-hidden">
            <CardContent className="p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Bergabunglah dengan Gerakan Kami
              </h2>
              <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Bersama-sama kita dapat menciptakan generasi Indonesia yang lebih berkualitas, 
                bertanggung jawab, dan siap menghadapi masa depan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
                  <p className="text-lg lg:text-xl font-semibold">Hubungi Kami</p>
                  <p className="opacity-90 text-base lg:text-lg">info@sigmasikencana.id</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
                  <p className="text-lg lg:text-xl font-semibold">Follow Us</p>
                  <p className="opacity-90 text-base lg:text-lg">@sigmasikencana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
