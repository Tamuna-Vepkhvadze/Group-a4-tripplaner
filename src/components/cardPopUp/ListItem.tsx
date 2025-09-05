import React from 'react'

interface ListItemProps{
    label:string,
    value:string,
    icon:React.ReactNode
}


const ListItem:React.FC<ListItemProps> = ({label,value,icon}) => {
  return (
    <div className="flex items-start gap-3">
    <span>{icon}</span>
    <div>
      <h2 className="font-semibold text-gray-900">{label}</h2>    
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
  )
}

export default ListItem
