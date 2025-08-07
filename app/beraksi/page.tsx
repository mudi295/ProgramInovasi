"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Target, Users, Megaphone, HandHeart, Lightbulb, Award, CheckCircle, Brain, HelpCircle, X, Check } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BeraksiPage() {
  const [mbtiStep, setMbtiStep] = useState(0)
  const [mbtiAnswers, setMbtiAnswers] = useState<string[]>([])
  const [mbtiResult, setMbtiResult] = useState("")
  const [showMbtiResult, setShowMbtiResult] = useState(false)
  
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [quizScore, setQuizScore] = useState(0)
  const [quizResults, setQuizResults] = useState<boolean[]>([])
  const [showQuizResult, setShowQuizResult] = useState(false)

  const materials = [
    {
      title: "Kampanye Anti Seks Bebas",
      description: "Cara membuat kampanye efektif untuk mencegah seks bebas di kalangan remaja",
      icon: <Megaphone className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/10 dark:to-indigo-900/10",
      iconColor: "text-blue-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/youth-activism-megaphone.png"
    },
    {
      title: "Peer Education Program",
      description: "Menjadi educator sebaya untuk menyebarkan informasi kesehatan reproduksi",
      icon: <Users className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/10 dark:to-emerald-900/10",
      iconColor: "text-green-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/peer-education-teens.png"
    },
    {
      title: "Konseling Sebaya",
      description: "Teknik konseling dan pendampingan untuk teman yang membutuhkan bantuan",
      icon: <HandHeart className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/10 dark:to-violet-900/10",
      iconColor: "text-purple-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/peer-counseling-support.png"
    },
    {
      title: "Media Sosial untuk Edukasi",
      description: "Memanfaatkan platform digital untuk menyebarkan pesan positif",
      icon: <Target className="h-6 w-6" />,
      color: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/10 dark:to-rose-900/10",
      iconColor: "text-pink-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/social-media-education-teens.png"
    },
    {
      title: "Workshop dan Seminar",
      description: "Mengorganisir acara edukasi untuk komunitas remaja",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/10 dark:to-orange-900/10",
      iconColor: "text-yellow-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/workshop-seminar-education.png"
    },
    {
      title: "Volunteer Program",
      description: "Bergabung dengan program volunteer untuk aksi nyata di masyarakat",
      icon: <Award className="h-6 w-6" />,
      color: "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/10 dark:to-cyan-900/10",
      iconColor: "text-teal-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/volunteer-community-service.png"
    }
  ]

  const mbtiQuestions = [
    {
      question: "Ketika bertemu orang baru, saya lebih suka:",
      options: [
        { value: "E", text: "Memulai percakapan dan berkenalan aktif" },
        { value: "I", text: "Menunggu mereka memulai percakapan terlebih dahulu" }
      ]
    },
    {
      question: "Dalam mengambil keputusan, saya lebih mengandalkan:",
      options: [
        { value: "T", text: "Logika dan fakta yang ada" },
        { value: "F", text: "Perasaan dan nilai-nilai pribadi" }
      ]
    },
    {
      question: "Saya lebih suka:",
      options: [
        { value: "S", text: "Fokus pada detail dan fakta konkret" },
        { value: "N", text: "Melihat gambaran besar dan kemungkinan masa depan" }
      ]
    },
    {
      question: "Dalam menyelesaikan tugas, saya:",
      options: [
        { value: "J", text: "Membuat rencana dan mengikutinya dengan disiplin" },
        { value: "P", text: "Fleksibel dan menyesuaikan dengan situasi" }
      ]
    },
    {
      question: "Ketika menghadapi masalah, saya:",
      options: [
        { value: "T", text: "Menganalisis secara objektif dan mencari solusi praktis" },
        { value: "F", text: "Mempertimbangkan dampak emosional dan nilai-nilai" }
      ]
    }
  ]

  const quizQuestions = [
    {
      question: "Apa langkah pertama yang efektif dalam membuat kampanye anti seks bebas?",
      options: [
        "Langsung membuat poster dan menyebarkannya",
        "Riset target audience dan memahami masalah yang ada",
        "Mengajak semua teman untuk ikut serta",
        "Membuat akun media sosial baru"
      ],
      correct: 1
    },
    {
      question: "Dalam peer education, hal terpenting yang harus dimiliki seorang educator adalah:",
      options: [
        "Pengetahuan yang lengkap dan kemampuan komunikasi yang baik",
        "Popularitas di kalangan teman sebaya",
        "Kemampuan berbicara di depan umum",
        "Pengalaman pribadi yang banyak"
      ],
      correct: 0
    },
    {
      question: "Bagaimana cara terbaik memberikan konseling kepada teman yang mengalami masalah?",
      options: [
        "Memberikan nasihat langsung tanpa mendengarkan",
        "Mendengarkan dengan empati dan memberikan dukungan",
        "Menceritakan pengalaman pribadi yang serupa",
        "Menyarankan untuk segera ke psikolog"
      ],
      correct: 1
    },
    {
      question: "Platform media sosial manakah yang paling efektif untuk edukasi remaja usia 15-17 tahun?",
      options: [
        "Facebook dan LinkedIn",
        "Instagram dan TikTok",
        "Twitter dan Pinterest",
        "YouTube dan WhatsApp"
      ],
      correct: 1
    },
    {
      question: "Apa yang harus dipersiapkan sebelum mengorganisir workshop edukasi?",
      options: [
        "Hanya materi presentasi",
        "Tempat dan waktu saja",
        "Materi, narasumber, peserta, dan evaluasi",
        "Budget dan sponsor"
      ],
      correct: 2
    }
  ]

  const handleMbtiAnswer = (value: string) => {
    const newAnswers = [...mbtiAnswers]
    newAnswers[mbtiStep] = value
    setMbtiAnswers(newAnswers)
  }

  const nextMbtiQuestion = () => {
    if (mbtiStep < mbtiQuestions.length - 1) {
      setMbtiStep(mbtiStep + 1)
    } else {
      calculateMbtiResult()
    }
  }

  const calculateMbtiResult = () => {
    const types = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P']
    const counts: { [key: string]: number } = {}
    
    types.forEach(type => counts[type] = 0)
    mbtiAnswers.forEach(answer => counts[answer]++)
    
    const result = 
      (counts['E'] > counts['I'] ? 'E' : 'I') +
      (counts['S'] > counts['N'] ? 'S' : 'N') +
      (counts['T'] > counts['F'] ? 'T' : 'F') +
      (counts['J'] > counts['P'] ? 'J' : 'P')
    
    setMbtiResult(result)
    setShowMbtiResult(true)
  }

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers]
    newAnswers[quizStep] = answerIndex.toString()
    setQuizAnswers(newAnswers)
  }

  const nextQuizQuestion = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      calculateQuizScore()
    }
  }

  const calculateQuizScore = () => {
    let score = 0
    const results: boolean[] = []
    
    quizAnswers.forEach((answer, index) => {
      const isCorrect = parseInt(answer) === quizQuestions[index].correct
      results.push(isCorrect)
      if (isCorrect) score++
    })
    
    setQuizScore(score)
    setQuizResults(results)
    setShowQuizResult(true)
  }

  const resetMbti = () => {
    setMbtiStep(0)
    setMbtiAnswers([])
    setMbtiResult("")
    setShowMbtiResult(false)
  }

  const resetQuiz = () => {
    setQuizStep(0)
    setQuizAnswers([])
    setQuizScore(0)
    setQuizResults([])
    setShowQuizResult(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <img 
            src="/teenagers-community-service.png" 
            alt="Beraksi Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 backdrop-blur-sm">
              Segmentasi BERAKSI
            </Badge>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Aksi Nyata Pencegahan dan Edukasi
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-90 leading-relaxed">
              Untuk Remaja Usia 15-17 Tahun
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 lg:py-24">
        {/* Materials Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Materi Aksi
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pelajari berbagai cara untuk mengambil aksi nyata dalam pencegahan seks bebas dan pernikahan dini
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {materials.map((material, index) => (
              <Card key={index} className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 h-full border-0 overflow-hidden ${material.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
                <div className="relative">
                  <img 
                    src={material.image || "/placeholder.svg"} 
                    alt={material.title}
                    className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className={`${material.color} p-6 lg:p-8`}>
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={material.iconColor}>
                      {material.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                    {material.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base lg:text-lg">
                    {material.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <ul className="text-sm lg:text-base text-gray-700 dark:text-gray-300 space-y-2">
                      {material.title === "Kampanye Anti Seks Bebas" && (
                        <>
                          <li>• Merancang pesan kampanye yang efektif</li>
                          <li>• Memilih media dan platform yang tepat</li>
                          <li>• Melibatkan komunitas dalam kampanye</li>
                          <li>• Mengukur dampak kampanye</li>
                        </>
                      )}
                      {material.title === "Peer Education Program" && (
                        <>
                          <li>• Teknik komunikasi dengan teman sebaya</li>
                          <li>• Menyampaikan informasi yang akurat</li>
                          <li>• Membangun kepercayaan dan empati</li>
                          <li>• Mengatasi resistensi dan penolakan</li>
                        </>
                      )}
                      {material.title === "Konseling Sebaya" && (
                        <>
                          <li>• Keterampilan mendengarkan aktif</li>
                          <li>• Memberikan dukungan emosional</li>
                          <li>• Mengenali tanda-tanda masalah serius</li>
                          <li>• Merujuk ke profesional jika diperlukan</li>
                        </>
                      )}
                      {material.title === "Media Sosial untuk Edukasi" && (
                        <>
                          <li>• Membuat konten edukatif yang menarik</li>
                          <li>• Menggunakan hashtag dan trending topic</li>
                          <li>• Berinteraksi positif dengan followers</li>
                          <li>• Mengatasi cyberbullying dan hate speech</li>
                        </>
                      )}
                      {material.title === "Workshop dan Seminar" && (
                        <>
                          <li>• Merencanakan agenda dan materi</li>
                          <li>• Mengundang narasumber yang kompeten</li>
                          <li>• Memfasilitasi diskusi dan tanya jawab</li>
                          <li>• Mengevaluasi efektivitas acara</li>
                        </>
                      )}
                      {material.title === "Volunteer Program" && (
                        <>
                          <li>• Bergabung dengan organisasi terpercaya</li>
                          <li>• Mengembangkan keterampilan kepemimpinan</li>
                          <li>• Berkontribusi dalam program komunitas</li>
                          <li>• Membangun jaringan dan relasi positif</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* MBTI Test Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Test Kepribadian MBTI
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kenali tipe kepribadianmu untuk memahami cara terbaik dalam berinteraksi dan mengambil keputusan
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 lg:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200">Test Kepribadian</CardTitle>
                  <CardDescription className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">5 pertanyaan untuk mengetahui tipe kepribadianmu</CardDescription>
                </div>
              </div>
              {!showMbtiResult && (
                <Progress value={(mbtiStep / mbtiQuestions.length) * 100} className="w-full h-3" />
              )}
            </CardHeader>
            <CardContent className="p-6 lg:p-8">
              {!showMbtiResult ? (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                      Pertanyaan {mbtiStep + 1} dari {mbtiQuestions.length}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">{mbtiQuestions[mbtiStep].question}</p>
                    
                    <RadioGroup value={mbtiAnswers[mbtiStep] || ""} onValueChange={handleMbtiAnswer}>
                      {mbtiQuestions[mbtiStep].options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 lg:p-6 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors border border-gray-200 dark:border-gray-700">
                          <RadioGroupItem value={option.value} id={`mbti-${index}`} className="text-purple-600" />
                          <Label htmlFor={`mbti-${index}`} className="flex-1 cursor-pointer text-base lg:text-lg text-gray-700 dark:text-gray-300">
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => setMbtiStep(Math.max(0, mbtiStep - 1))}
                      disabled={mbtiStep === 0}
                      size="lg"
                      className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
                    >
                      Sebelumnya
                    </Button>
                    <Button 
                      onClick={nextMbtiQuestion}
                      disabled={!mbtiAnswers[mbtiStep]}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
                      size="lg"
                    >
                      {mbtiStep === mbtiQuestions.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-8">
                  <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
                    <CheckCircle className="h-16 w-16 lg:h-20 lg:w-20 text-purple-600 mx-auto mb-6" />
                    <h3 className="text-3xl lg:text-4xl font-bold text-purple-800 dark:text-purple-400 mb-4">
                      Tipe Kepribadianmu: {mbtiResult}
                    </h3>
                    <p className="text-lg lg:text-xl text-purple-600 dark:text-purple-400">
                      {mbtiResult === 'ENFP' && 'Campaigner - Antusias, kreatif, dan suka bersosialisasi'}
                      {mbtiResult === 'INFP' && 'Mediator - Idealis, loyal, dan selalu mencari keharmonisan'}
                      {mbtiResult === 'ENFJ' && 'Protagonist - Karismatik, inspiratif, dan peduli pada orang lain'}
                      {mbtiResult === 'INFJ' && 'Advocate - Kreatif, insightful, dan principled'}
                      {mbtiResult === 'ENTP' && 'Debater - Cerdas, penasaran, dan suka tantangan intelektual'}
                      {mbtiResult === 'INTP' && 'Thinker - Inovatif, independen, dan suka menganalisis'}
                      {mbtiResult === 'ENTJ' && 'Commander - Natural leader, percaya diri, dan strategis'}
                      {mbtiResult === 'INTJ' && 'Architect - Imaginatif, strategis, dan sangat menentukan'}
                      {mbtiResult === 'ESFP' && 'Entertainer - Spontan, energik, dan antusias'}
                      {mbtiResult === 'ISFP' && 'Adventurer - Fleksibel, charming, dan selalu siap mengeksplorasi'}
                      {mbtiResult === 'ESFJ' && 'Consul - Caring, sosial, dan selalu siap membantu'}
                      {mbtiResult === 'ISFJ' && 'Protector - Hangat, bertanggung jawab, dan sangat loyal'}
                      {mbtiResult === 'ESTP' && 'Entrepreneur - Energik, perseptif, dan suka mengambil risiko'}
                      {mbtiResult === 'ISTP' && 'Virtuoso - Bold, praktis, dan master of tools'}
                      {mbtiResult === 'ESTJ' && 'Executive - Organized, praktis, dan suka memimpin'}
                      {mbtiResult === 'ISTJ' && 'Logistician - Praktis, fact-minded, dan dapat diandalkan'}
                    </p>
                  </div>
                  <Button onClick={resetMbti} variant="outline" size="lg" className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                    Ulangi Test
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Interactive Quiz Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Quiz Interaktif
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Uji pemahamanmu tentang aksi nyata dalam pencegahan dan edukasi
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 lg:p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-lg">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200">Quiz Pemahaman</CardTitle>
                  <CardDescription className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">5 pertanyaan untuk menguji pemahamanmu</CardDescription>
                </div>
              </div>
              {!showQuizResult && (
                <Progress value={(quizStep / quizQuestions.length) * 100} className="w-full h-3" />
              )}
            </CardHeader>
            <CardContent className="p-6 lg:p-8">
              {!showQuizResult ? (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                      Pertanyaan {quizStep + 1} dari {quizQuestions.length}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">{quizQuestions[quizStep].question}</p>
                    
                    <RadioGroup value={quizAnswers[quizStep] || ""} onValueChange={(value) => handleQuizAnswer(parseInt(value))}>
                      {quizQuestions[quizStep].options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 lg:p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-gray-200 dark:border-gray-700">
                          <RadioGroupItem value={index.toString()} id={`quiz-${index}`} className="text-blue-600" />
                          <Label htmlFor={`quiz-${index}`} className="flex-1 cursor-pointer text-base lg:text-lg text-gray-700 dark:text-gray-300">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => setQuizStep(Math.max(0, quizStep - 1))}
                      disabled={quizStep === 0}
                      size="lg"
                      className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
                    >
                      Sebelumnya
                    </Button>
                    <Button 
                      onClick={nextQuizQuestion}
                      disabled={!quizAnswers[quizStep]}
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
                      size="lg"
                    >
                      {quizStep === quizQuestions.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-8">
                  {quizScore === 5 ? (
                    <div className="p-8 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                      <div className="text-6xl mb-6">🎉</div>
                      <CheckCircle className="h-16 w-16 lg:h-20 lg:w-20 text-green-600 mx-auto mb-6" />
                      <h3 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
                        SEMPURNA! 🌟
                      </h3>
                      <p className="text-lg lg:text-xl text-green-600 dark:text-green-400 mb-4">
                        Selamat! Kamu berhasil menjawab semua pertanyaan dengan benar!
                      </p>
                      <p className="text-base lg:text-lg text-green-700 dark:text-green-300">
                        Pemahaman kamu tentang aksi nyata dalam pencegahan sangat baik. Kamu siap untuk memimpin dan mengambil aksi yang efektif!
                      </p>
                    </div>
                  ) : (
                    <div className={`p-8 lg:p-12 rounded-2xl ${quizScore >= 3 ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' : 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'}`}>
                      <CheckCircle className={`h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-6 ${quizScore >= 3 ? 'text-yellow-600' : 'text-red-600'}`} />
                      <h3 className={`text-3xl lg:text-4xl font-bold mb-4 ${quizScore >= 3 ? 'text-yellow-800 dark:text-yellow-400' : 'text-red-800 dark:text-red-400'}`}>
                        Skor: {quizScore}/5
                      </h3>
                      <p className={`text-lg lg:text-xl mb-6 ${quizScore >= 3 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'}`}>
                        {quizScore >= 3 ? 'Good! Terus kembangkan kemampuan aksimu!' : 'Perlu belajar lebih banyak sebelum beraksi. Semangat!'}
                      </p>
                      
                      <div className="space-y-4 text-left">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Review Jawaban:</h4>
                        {quizQuestions.map((question, index) => (
                          <div key={index} className="p-4 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                            <div className="flex items-start gap-3 mb-2">
                              {quizResults[index] ? (
                                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                              )}
                              <div className="flex-1">
                                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                  {index + 1}. {question.question}
                                </p>
                                {!quizResults[index] && (
                                  <div className="space-y-1">
                                    <p className="text-sm text-red-600 dark:text-red-400">
                                      Jawaban kamu: {question.options[parseInt(quizAnswers[index])]}
                                    </p>
                                    <p className="text-sm text-green-600 dark:text-green-400">
                                      Jawaban benar: {question.options[question.correct]}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Button onClick={resetQuiz} variant="outline" size="lg" className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                    Ulangi Quiz
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}
