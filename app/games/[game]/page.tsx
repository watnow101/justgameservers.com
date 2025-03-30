import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { notFound } from "next/navigation"

// This would come from your database or API in a real application
const games = {
  minecraft: {
    name: "Minecraft",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Host your own Minecraft server with full control over mods, plugins, and settings.",
    packages: [
      {
        id: "small",
        name: "Small",
        price: "$5.99/mo",
        specs: ["2GB RAM", "2 vCPU Cores", "30GB SSD", "Up to 10 Players"],
        recommended: false,
      },
      {
        id: "medium",
        name: "Medium",
        price: "$12.99/mo",
        specs: ["4GB RAM", "3 vCPU Cores", "50GB SSD", "Up to 25 Players"],
        recommended: true,
      },
      {
        id: "large",
        name: "Large",
        price: "$24.99/mo",
        specs: ["8GB RAM", "4 vCPU Cores", "100GB SSD", "Up to 50 Players"],
        recommended: false,
      },
    ],
  },
  rust: {
    name: "Rust",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Create your own Rust server with customizable maps, plugins, and settings.",
    packages: [
      {
        id: "small",
        name: "Small",
        price: "$14.99/mo",
        specs: ["4GB RAM", "2 vCPU Cores", "50GB SSD", "Up to 50 Players"],
        recommended: false,
      },
      {
        id: "medium",
        name: "Medium",
        price: "$24.99/mo",
        specs: ["8GB RAM", "4 vCPU Cores", "100GB SSD", "Up to 100 Players"],
        recommended: true,
      },
      {
        id: "large",
        name: "Large",
        price: "$39.99/mo",
        specs: ["16GB RAM", "6 vCPU Cores", "200GB SSD", "Up to 200 Players"],
        recommended: false,
      },
    ],
  },
  ark: {
    name: "ARK",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Run your own ARK: Survival Evolved server with full control over settings and mods.",
    packages: [
      {
        id: "small",
        name: "Small",
        price: "$14.99/mo",
        specs: ["8GB RAM", "3 vCPU Cores", "100GB SSD", "Up to 20 Players"],
        recommended: false,
      },
      {
        id: "medium",
        name: "Medium",
        price: "$29.99/mo",
        specs: ["16GB RAM", "4 vCPU Cores", "200GB SSD", "Up to 40 Players"],
        recommended: true,
      },
      {
        id: "large",
        name: "Large",
        price: "$49.99/mo",
        specs: ["32GB RAM", "8 vCPU Cores", "300GB SSD", "Up to 70 Players"],
        recommended: false,
      },
    ],
  },
  valheim: {
    name: "Valheim",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Host your own Valheim server with full control over settings and mods.",
    packages: [
      {
        id: "small",
        name: "Small",
        price: "$9.99/mo",
        specs: ["4GB RAM", "2 vCPU Cores", "20GB SSD", "Up to 10 Players"],
        recommended: false,
      },
      {
        id: "medium",
        name: "Medium",
        price: "$14.99/mo",
        specs: ["6GB RAM", "3 vCPU Cores", "30GB SSD", "Up to 20 Players"],
        recommended: true,
      },
      {
        id: "large",
        name: "Large",
        price: "$24.99/mo",
        specs: ["8GB RAM", "4 vCPU Cores", "50GB SSD", "Up to 30 Players"],
        recommended: false,
      },
    ],
  },
}

export default function GamePage({ params }: { params: { game: string } }) {
  const game = games[params.game as keyof typeof games]

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={game.image || "/placeholder.svg"}
            alt={`${game.name} Server`}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {game.name} <span className="text-yellow-400">Servers</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">{game.description}</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {game.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-gray-900 rounded-xl overflow-hidden border ${
                pkg.recommended ? "border-yellow-500" : "border-gray-800"
              } transition-transform hover:scale-105 relative`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 inset-x-0 bg-yellow-500 text-black text-center py-1 text-sm font-medium">
                  Recommended
                </div>
              )}

              <div className={`p-8 ${pkg.recommended ? "pt-12" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-6">{pkg.price}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.specs.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-2" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/games/${params.game}/${pkg.id}`}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors ${
                    pkg.recommended
                      ? "bg-yellow-500 text-black hover:bg-yellow-600"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  Select Package
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Packages Include</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-2v-4h14v4H5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Control Panel</h3>
              <p className="text-gray-400">Easy-to-use control panel for managing your server, mods, and settings.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">DDoS Protection</h3>
              <p className="text-gray-400">Enterprise-grade protection to keep your server online and secure.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automatic Backups</h3>
              <p className="text-gray-400">Daily backups of your server data with easy restore options.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400">Our team is available around the clock to help with any issues.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

