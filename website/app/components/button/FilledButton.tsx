import BaseButton from "./BaseButton"

type FilledButtonProps = {
  children: React.ReactNode
}

const FilledButton: React.FC<FilledButtonProps> = ({ children }) => {
  return (
    <BaseButton className="bg-blue-700 hover:bg-blue-800 text-white">
        {children}
    </BaseButton>
  )
}

export default FilledButton
