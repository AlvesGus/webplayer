import { SidebarMenu } from '@/components/sidebar'
import { Home } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'

export function RouterApp() {
  return (
    <div className="w-full h-screen flex">
      <SidebarMenu />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}
