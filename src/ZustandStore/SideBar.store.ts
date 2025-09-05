import { create } from "zustand"

interface SidebarStore{
    modalOpen:boolean,
    setModalOpen:(open:boolean)=> void
}


export const useSidebarStore = create<SidebarStore>((set)=>({
    modalOpen:false,
    setModalOpen:(open)=>set({modalOpen:open})
}))