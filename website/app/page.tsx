import Image from "next/image"
import LinkButton from "./components/button/LinkButton"

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
        <MainTextContent />
        <ImageContent />
        <Hexagon spin className="top-32 left-20" />
        <Hexagon className="-left-20 w-44" />
        <Hexagon className="top-44 right-24 w-24 rotate-45" />
      </div>
    </div>
  )
}

const MainTextContent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 text-center items-center px-8 lg:text-start lg:items-start">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-700 dark:text-white font-medium">
        HELLO!
        <br />
        I&apos;M{" "}
        <span className="text-blue-700 dark:text-blue-500 hover:underline decoration-4 cursor-pointer">
          JOÃO MANAIA
        </span>
      </h1>
      <p className="text-base md:text-lg text-gray-800 dark:text-white">
        <span className="text-green-500 dark:text-emerald-400">Text</span>
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
    <div className="w-96 h-96 md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px] bg-emerald-400 shadow-lg shadow-emerald-400 rounded-full p-8">
      <div className="relative h-full w-full rounded-full bg-gray-900/90">
        <Image src="/photo2.png" fill={true} alt="Photo" className="rounded-full" />
      </div>
    </div>
  )
}

type HexagonProps = {
  spin?: boolean
  className?: string
}

const Hexagon: React.FC<HexagonProps> = ({ spin, className }) => {
  return (
    <div className={`${className} w-20 aspect-[250/433] absolute hidden lg:block`}>
      <div
        className={`hex w-full h-full bg-emerald-400 opacity-5 ${spin && "animate-spin-slower"}`}
      />
    </div>
  )
}
