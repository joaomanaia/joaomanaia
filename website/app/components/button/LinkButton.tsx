import Link from "next/link"
import TextButton from "./TextButton"
import FilledButton from "./FilledButton"

type LinkButtonProps = {
  href: string
  type: "filled" | "text"
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, type, children }) => {
  return (
    <Link href={href}>
      {type === "filled" ? (
        <FilledButton>{children}</FilledButton>
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </Link>
  )
}

export default LinkButton
