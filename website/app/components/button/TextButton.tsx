import BaseButton from "./BaseButton"

type TextButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <BaseButton onClick={onClick} className="text-blue-700 hover:bg-blue-50">
      {children}
    </BaseButton>
  )
}

export default TextButton
