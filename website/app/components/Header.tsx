import Link from "next/link"

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between w-screen">
      <HeaderHomeLink />
      <div className="flex items-center justify-center">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/portfolio">Portfolio</HeaderLink>
        <HeaderLink href="/contacts">Contacts</HeaderLink>
      </div>
    </header>
  )
}

type HeaderLinkProps = {
  href: string
  children: React.ReactNode
}

const HeaderHomeLink: React.FC = () => {
  return (
    <Link
      className="text-blue-700 hover:text-blue-600 font-bold text-2xl hover:bg-blue-50 rounded-full px-4 py-2 cursor-pointer"
      href="/"
    >
      João Manaia
    </Link>
  )
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <Link
      className="text-gray-700 hover:text-gray-800 hover:bg-gray-50 rounded-full px-4 py-2 cursor-pointer"
      href={href}
    >
      {children}
    </Link>
  )
}
