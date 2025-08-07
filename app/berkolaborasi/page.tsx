"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Users, Building, Handshake, Globe, BookOpen, Trophy, CheckCircle, Brain, HelpCircle } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BerkolaborasiPage() {
  const [mbtiStep, setMbtiStep] = useState(0)
  const [mbtiAnswers, setMbtiAnswers] = useState<string[]>([])
  const [mbtiResult, setMbtiResult] = useState("")
  const [showMbtiResult, setShowMbtiResult] = useState(false)
  
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [quizScore, setQuizScore] = useState(0)
  const [showQuizResult, setShowQuizResult] = useState(false)

  const materials = [
    {
      title: "Kemitraan Strategis",
      description: "Membangun kemitraan dengan organisasi, pemerintah, dan stakeholder lainnya",
      icon: <Handshake className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/10 dark:to-emerald-900/10",
      iconColor: "text-green-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/strategic-partnership-handshake.png"
    },
    {
      title: "Program Komunitas",
      description: "Mengembangkan program berkelanjutan untuk komunitas lokal",
      icon: <Users className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/10 dark:to-indigo-900/10",
      iconColor: "text-blue-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/community-program-development.png"
    },
    {
      title: "Advokasi Kebijakan",
      description: "Berpartisipasi dalam pembuatan kebijakan yang mendukung generasi muda",
      icon: <Building className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/10 dark:to-violet-900/10",
      iconColor: "text-purple-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/policy-advocacy-meeting.png"
    },
    {
      title: "Jaringan Global",
      description: "Membangun jaringan internasional untuk pertukaran best practices",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/10 dark:to-cyan-900/10",
      iconColor: "text-teal-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/global-network-collaboration.png"
    },
    {
      title: "Penelitian Kolaboratif",
      description: "Melakukan penelitian bersama untuk menghasilkan solusi inovatif",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/10 dark:to-amber-900/10",
      iconColor: "text-orange-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/collaborative-research.png"
    },
    {
      title: "Sustainability Program",
      description: "Memastikan keberlanjutan program melalui kolaborasi multi-sektor",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/10 dark:to-rose-900/10",
      iconColor: "text-pink-600",
      cardBg: "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm",
      image: "/sustainability-green-program.png"
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
      question: "Apa kunci utama dalam membangun kemitraan strategis yang efektif?",
      options: [
        "Mencari partner yang memiliki dana besar",
        "Memiliki visi dan misi yang sejalan serta saling menguntungkan",
        "Memilih partner yang terkenal dan populer",
        "Fokus pada keuntungan jangka pendek"
      ],
      correct: 1
    },
    {
      question: "Dalam mengembangkan program komunitas, hal pertama yang harus dilakukan adalah:",
      options: [
        "Menentukan budget yang dibutuhkan",
        "Mengidentifikasi kebutuhan dan masalah komunitas",
        "Mencari sponsor dan donatur",
        "Membuat proposal yang menarik"
      ],
      correct: 1
    },
    {
      question: "Bagaimana cara efektif untuk berpartisipasi dalam advokasi kebijakan?",
      options: [
        "Melakukan demonstrasi dan aksi massa",
        "Menyampaikan aspirasi melalui media sosial saja",
        "Membangun dialog konstruktif dengan pembuat kebijakan",
        "Mengkritik kebijakan yang ada tanpa solusi"
      ],
      correct: 2
    },
    {
      question: "Manfaat utama dari membangun jaringan global adalah:",
      options: [
        "Mendapat pengakuan internasional",
        "Pertukaran pengetahuan dan best practices",
        "Meningkatkan popularitas organisasi",
        "Mendapat funding dari luar negeri"
      ],
      correct: 1
    },
    {
      question: "Apa yang membuat program kolaborasi menjadi berkelanjutan?",
      options: [
        "Dukungan finansial yang besar",
        "Komitmen jangka panjang dari semua pihak dan evaluasi berkala",
        "Popularitas program di media",
        "Dukungan dari tokoh terkenal"
      ],
      correct: 1
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
    quizAnswers.forEach((answer, index) => {
      if (parseInt(answer) === quizQuestions[index].correct) {
        score++
      }
    })
    setQuizScore(score)
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
    setShowQuizResult(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-teal-900/20">
      <Navbar />
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <img 
            src="/hero-background-berkolaborasi.png" 
            alt="Berkolaborasi Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 backdrop-blur-sm">
              Segmentasi BERKOLABORASI
            </Badge>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Kerjasama Membangun Generasi Berkualitas
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md">
              Untuk Remaja Usia 18-21 Tahun
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 lg:py-24">
        {/* Materials Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Materi Kolaborasi
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pelajari berbagai strategi kolaborasi untuk membangun generasi yang berkualitas dan berkelanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {materials.map((material, index) => (
              <Card key={index} className={`group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-2 h-full border-0 overflow-hidden ${material.cardBg} border border-gray-200/50 dark:border-gray-700/50`}>
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
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-3">
                    {material.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base lg:text-lg">
                    {material.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <ul className="text-sm lg:text-base text-gray-700 dark:text-gray-300 space-y-2">
                      {material.title === "Kemitraan Strategis" && (
                        <>
                          <li>• Identifikasi partner potensial yang sejalan</li>
                          <li>• Membangun proposal kemitraan yang menarik</li>
                          <li>• Negosiasi dan perjanjian kemitraan</li>
                          <li>• Evaluasi dan pemeliharaan hubungan</li>
                        </>
                      )}
                      {material.title === "Program Komunitas" && (
                        <>
                          <li>• Analisis kebutuhan dan potensi komunitas</li>
                          <li>• Desain program yang berkelanjutan</li>
                          <li>• Implementasi dengan partisipasi aktif</li>
                          <li>• Monitoring dan evaluasi dampak</li>
                        </>
                      )}
                      {material.title === "Advokasi Kebijakan" && (
                        <>
                          <li>• Penelitian dan analisis kebijakan</li>
                          <li>• Strategi komunikasi dengan stakeholder</li>
                          <li>• Membangun koalisi dan dukungan</li>
                          <li>• Monitoring implementasi kebijakan</li>
                        </>
                      )}
                      {material.title === "Jaringan Global" && (
                        <>
                          <li>• Identifikasi organisasi internasional</li>
                          <li>• Partisipasi dalam forum global</li>
                          <li>• Pertukaran program dan best practices</li>
                          <li>• Kolaborasi lintas negara</li>
                        </>
                      )}
                      {material.title === "Penelitian Kolaboratif" && (
                        <>
                          <li>• Desain metodologi penelitian</li>
                          <li>• Koordinasi tim peneliti multi-disiplin</li>
                          <li>• Pengumpulan dan analisis data</li>
                          <li>• Publikasi dan diseminasi hasil</li>
                        </>
                      )}
                      {material.title === "Sustainability Program" && (
                        <>
                          <li>• Perencanaan jangka panjang</li>
                          <li>• Diversifikasi sumber pendanaan</li>
                          <li>• Pengembangan kapasitas lokal</li>
                          <li>• Sistem monitoring dan evaluasi</li>
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
              Uji pemahamanmu tentang strategi kolaborasi dan kemitraan
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
                  <div className={`p-8 lg:p-12 rounded-2xl ${quizScore >= 4 ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20' : quizScore >= 3 ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' : 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'}`}>
                    <CheckCircle className={`h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-6 ${quizScore >= 4 ? 'text-green-600' : quizScore >= 3 ? 'text-yellow-600' : 'text-red-600'}`} />
                    <h3 className={`text-3xl lg:text-4xl font-bold mb-4 ${quizScore >= 4 ? 'text-green-800 dark:text-green-400' : quizScore >= 3 ? 'text-yellow-800 dark:text-yellow-400' : 'text-red-800 dark:text-red-400'}`}>
                      Skor: {quizScore}/5
                    </h3>
                    <p className={`text-lg lg:text-xl ${quizScore >= 4 ? 'text-green-600 dark:text-green-400' : quizScore >= 3 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'}`}>
                      {quizScore >= 4 && 'Excellent! Kamu siap memimpin kolaborasi yang efektif!'}
                      {quizScore === 3 && 'Good! Terus kembangkan kemampuan kolaborasimu!'}
                      {quizScore < 3 && 'Perlu belajar lebih banyak tentang kolaborasi. Tetap semangat!'}
                    </p>
                  </div>
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
