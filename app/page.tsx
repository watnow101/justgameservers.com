import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const games = [
    { id: "minecraft", name: "Minecraft", description: "A sandbox game that allows players to build and explore worlds made of blocks, fostering creativity and collaboration.", image: "https://tse1.mm.bing.net/th?id=OIP.q3f8gyBPvNpIXNxDrrKJfgHaLH&pid=Api" },
    { id: "ark-survival-evolved", name: "ARK: Survival Evolved", description: "An action-adventure survival game where players navigate a world filled with dinosaurs and other prehistoric creatures.", image: "https://tse1.mm.bing.net/th?id=OIP.4grhgioQj1QVjfRYTmoY2wHaHa&pid=Api" },
    { id: "rust", name: "Rust", description: "A multiplayer survival game emphasizing combat, crafting, and resource management in a harsh environment.", image: "https://tse2.mm.bing.net/th?id=OIP.34ezBSfJh-tXgZ94nWq6eQHaLH&pid=Api" },
    { id: "valheim", name: "Valheim", description: "A survival and exploration game set in a procedurally generated Norse mythology-inspired world.", image: "https://tse2.mm.bing.net/th?id=OIP.zFTuhevfZW_fbvb73x07bwHaLH&pid=Api" },
    { id: "conan-exiles", name: "Conan Exiles", description: "An open-world survival game set in the brutal lands of Conan the Barbarian, focusing on building and combat.", image: "https://tse3.mm.bing.net/th?id=OIP.3yx-WXIkrIsV-kme2h-UAwHaHa&pid=Api" },
    { id: "dayz", name: "DayZ", description: "A survival game set in a post-apocalyptic world overrun by zombies, emphasizing player interaction and resource scavenging.", image: "https://tse3.mm.bing.net/th?id=OIP.Sc-xDHPpuysNIVJ90U7yoAHaLH&pid=Api" },
    { id: "satisfactory", name: "Satisfactory", description: "A first-person open-world factory building game with a dash of exploration and combat.", image: "https://tse2.mm.bing.net/th?id=OIP.5JCVAk4uDPE-V2MHJd7vqQHaHc&pid=Api" },
    { id: "space-engineers", name: "Space Engineers", description: "A sandbox game about engineering, construction, exploration, and survival in space and on planets.", image: "https://tse4.mm.bing.net/th?id=OIP.VDJ8eEn4ANg7vR2YYX_VDAHaKP&pid=Api" },
    { id: "7-days-to-die", name: "7 Days to Die", description: "A survival horror game that combines first-person shooting, survival horror, tower defense, and role-playing elements.", image: "https://tse4.mm.bing.net/th?id=OIP.wN1EzJ7m-WR9jnLN-R1iXgHaLH&pid=Api" },
    { id: "palworld", name: "Palworld", description: "An open-world survival crafting game with mysterious creatures, allowing for exploration and building.", image: "https://tse4.mm.bing.net/th?id=OIP.gBp8sgRhZJQ2xfUw4lwTiwHaHa&pid=Api" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Container for Background Image and Fade */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/images/mc-background.png')] bg-cover bg-center bg-no-repeat"></div>
          {/* Dimming Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Fade Overlay - Fade from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          {/* Optional: Add another gradient for top fade if needed */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-transparent to-transparent"></div> */}
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-[50%]">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                <span className="block">Premium Game Servers</span>
                <span className="block text-yellow-400">Built for Gamers</span>
              </h1>
              <p className="max-w-lg mx-auto md:mx-0 text-xl text-gray-300 mb-8">
                High-performance, low-latency game servers with 24/7 uptime and instant deployment.
              </p>
              <Link
                href="#games"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Game</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id} className="group">
              <div className="bg-gray-900 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 border border-gray-800 flex flex-col h-full">
                <div className="relative h-48 flex-shrink-0">
                  <Image src={game.image} alt={game.name} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm flex-grow">
                    {game.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-yellow-400 mt-auto">
                    Select Package
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-gray-400">
                Powered by the latest hardware with NVMe SSDs for lightning-fast performance.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">DDoS Protection</h3>
              <p className="text-gray-400">
                Enterprise-grade protection against DDoS attacks to keep your server online.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-gray-400">
                Your server is ready within seconds after purchase. No waiting, start playing immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

