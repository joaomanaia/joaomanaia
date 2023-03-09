import Image from "next/image"
import LinkButton from "./components/button/LinkButton"

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex items-center justify-evenly">
        <MainTextContent />
        <ImageContent />
      </div>
    </div>
  )
}

const MainTextContent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-7xl text-gray-700 font-medium">
        HELLO!
        <br />
        I&apos;M <span className="text-blue-700 hover:underline cursor-pointer">JOÃO MANAIA</span>
      </h1>
      <p className="text-lg text-gray-800">
        <span className="text-emerald-500">Text</span>
        (&quot;A passionate developer with a love for Kotlin and Jetpack Compose&quot;)
      </p>
      <LinkButton href="/portfolio" type="filled">
        Portfolio
      </LinkButton>
    </div>
  )
}

const ImageContent: React.FC = () => {
  return <ProfileImagePolygon />
}

// <div className="absolute h-80 w-80 z-0 bg-blue-500 clip-hexagon animate-spin-slower"/>
const ProfileImagePolygon: React.FC = () => {
  return (
    <div className="relative h-96 w-96 bg-green-500 rounded-3xl p-8">
        <div className="absolute h-80 w-80 rounded-full z-50">
          <Image src="/photo1.jpg" fill={true} alt="Photo" className="rounded-full" />
        </div>
    </div>
  )
}
