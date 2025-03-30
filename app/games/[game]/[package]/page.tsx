import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

// This would come from your database or API in a real application
const games = {
  minecraft: {
    name: "Minecraft",
    image: "/images/minecraft-logo.png",
    packages: {
      small: { name: "Small", price: "$5.99/mo" },
      medium: { name: "Medium", price: "$12.99/mo" },
      large: { name: "Large", price: "$24.99/mo" },
    },
    versions: [
      {
        id: "vanilla",
        name: "Vanilla",
        description: "The original Minecraft experience with no modifications.",
        checkoutUrl: "https://justgameservers.com/store/view/21",
      },
      {
        id: "paper",
        name: "Paper",
        description: "High performance Minecraft server with plugin support.",
        checkoutUrl: "https://example.com/checkout/minecraft/paper",
      },
      {
        id: "forge",
        name: "Forge",
        description: "Minecraft server with extensive mod support.",
        checkoutUrl: "https://example.com/checkout/minecraft/forge",
      },
      {
        id: "bedrock",
        name: "Bedrock",
        description: "Cross-platform compatible Minecraft server.",
        checkoutUrl: "https://example.com/checkout/minecraft/bedrock",
      },
    ],
  },
  rust: {
    name: "Rust",
    image: "/placeholder.svg?height=600&width=1200",
    packages: {
      small: { name: "Small", price: "$14.99/mo" },
      medium: { name: "Medium", price: "$24.99/mo" },
      large: { name: "Large", price: "$39.99/mo" },
    },
    versions: [
      {
        id: "vanilla",
        name: "Vanilla",
        description: "Standard Rust server with no modifications.",
        checkoutUrl: "https://example.com/checkout/rust/vanilla",
      },
      {
        id: "oxide",
        name: "Oxide/uMod",
        description: "Rust server with plugin support via Oxide/uMod.",
        checkoutUrl: "https://example.com/checkout/rust/oxide",
      },
    ],
  },
  ark: {
    name: "ARK",
    image: "/placeholder.svg?height=600&width=1200",
    packages: {
      small: { name: "Small", price: "$14.99/mo" },
      medium: { name: "Medium", price: "$29.99/mo" },
      large: { name: "Large", price: "$49.99/mo" },
    },
    versions: [
      {
        id: "vanilla",
        name: "Vanilla",
        description: "Standard ARK server with no modifications.",
        checkoutUrl: "https://example.com/checkout/ark/vanilla",
      },
      {
        id: "modded",
        name: "Modded",
        description: "ARK server with mod support.",
        checkoutUrl: "https://example.com/checkout/ark/modded",
      },
      {
        id: "cluster",
        name: "Cluster",
        description: "Multiple ARK servers connected as a cluster.",
        checkoutUrl: "https://example.com/checkout/ark/cluster",
      },
    ],
  },
  valheim: {
    name: "Valheim",
    image: "/placeholder.svg?height=600&width=1200",
    packages: {
      small: { name: "Small", price: "$9.99/mo" },
      medium: { name: "Medium", price: "$14.99/mo" },
      large: { name: "Large", price: "$24.99/mo" },
    },
    versions: [
      {
        id: "vanilla",
        name: "Vanilla",
        description: "Standard Valheim server with no modifications.",
        checkoutUrl: "https://example.com/checkout/valheim/vanilla",
      },
      {
        id: "modded",
        name: "Modded",
        description: "Valheim server with mod support via BepInEx.",
        checkoutUrl: "https://example.com/checkout/valheim/modded",
      },
    ],
  },
}

export default function GameVersionPage({ params }: { params: { game: string; package: string } }) {
  const game = games[params.game as keyof typeof games]

  if (!game || !game.packages[params.package as keyof typeof game.packages]) {
    notFound()
  }

  const packageDetails = game.packages[params.package as keyof typeof game.packages]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Updated Layout */}
      <section className="h-[40vh] flex items-center bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Left Half: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              {game.name} <span className="text-yellow-400">{packageDetails.name} Package</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-300">Choose your preferred game mode or version</p>
          </div>

          {/* Right Half: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-[30vh]">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={`${game.name} Server`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Versions Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Select Game Version</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {game.versions.map((version) => (
            <div
              key={version.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-transform hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{version.name}</h3>
                <p className="text-gray-400 mb-6">{version.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-yellow-400">{packageDetails.price}</span>
                  <Link
                    href={version.checkoutUrl}
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Happens Next?</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-black">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Checkout</h3>
                  <p className="text-gray-400">
                    After clicking checkout, you'll be redirected to our secure payment system to complete your
                    purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Server Setup</h3>
                  <p className="text-gray-400">
                    Your server will be automatically provisioned and set up with your chosen configuration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-black">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Start Playing</h3>
                  <p className="text-gray-400">
                    You'll receive login details for your control panel where you can manage your server and start
                    playing immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

