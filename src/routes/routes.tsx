import { Header } from '@/components/header'
import { SidebarMenu } from '@/components/sidebar'
import { Home } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'

export function RouterApp() {
  return (
    <div className="w-full h-screen flex">
      <div>
        <SidebarMenu />
      </div>

      <div className="w-full h-screen">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}
