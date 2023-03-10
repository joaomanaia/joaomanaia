type BaseButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, className, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`${className} w-40 flex items-center justify-center rounded-full px-4 py-2 cursor-pointer text-lg`}>
      {children}
    </div>
  )
}

export default BaseButton
