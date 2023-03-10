import BaseButton from "./BaseButton"

type FilledButtonProps = {
  children: React.ReactNode
}

const FilledButton: React.FC<FilledButtonProps> = ({ children }) => {
  return (
    <BaseButton className="bg-blue-700 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-400 text-white">
        {children}
    </BaseButton>
  )
}

export default FilledButton
