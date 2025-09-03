interface HeaderButtonProps{
  onClick: ()=> void,
  children: React.ReactNode
}


const HeaderButton:React.FC<HeaderButtonProps> = ({onClick, children}) => {
  return (
    <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default HeaderButton



