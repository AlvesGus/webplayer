import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavLink,
  SidebarNavMain
} from '@/components/ui/sidebar'
import {
  Clock,
  Disc2,
  Heart,
  Home,
  LogOut,
  Mic,
  Mic2,
  Music4,
  Settings,
  User
} from 'lucide-react'

interface NavLinksProps {
  id: number
  links: string
  href: string
  icon: JSX.Element
}

const NavLinksLibary: NavLinksProps[] = [
  {
    id: 1,
    links: 'Recentes',
    href: '/recents',
    icon: <Clock size={20} />
  },
  {
    id: 2,
    links: 'Favoritos',
    href: '/favorite',
    icon: <Heart size={20} />
  },
  {
    id: 3,
    links: 'Playlists',
    href: '/playlists',
    icon: <Music4 size={20} />
  }
]
const NavLinksDicover: NavLinksProps[] = [
  {
    id: 1,
    links: 'Home',
    href: '/home',
    icon: <Home size={20} />
  },
  {
    id: 2,
    links: 'Artistas',
    href: '/artists',
    icon: <Mic2 size={20} />
  },
  {
    id: 3,
    links: 'Albuns',
    href: '/album',
    icon: <Disc2 size={20} />
  },
  {
    id: 4,
    links: 'Podcasts',
    href: '/podcast',
    icon: <Mic size={20} />
  }
]
const NavLinksFooter: NavLinksProps[] = [
  {
    id: 1,
    links: 'Configurações',
    href: '/settings',
    icon: <Settings size={20} />
  },
  {
    id: 2,
    links: 'Conta',
    href: '/account',
    icon: <User size={20} />
  },
  {
    id: 3,
    links: 'Logout',
    href: '/logout',
    icon: <LogOut size={20} />
  }
]

export function SidebarMenu() {
  const path = window.location.pathname

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarHeader className="text-xl flex items-center gap-2">
          <Mic size={20} /> <span>WPlayer</span>
        </SidebarHeader>
      </SidebarHeader>
      <SidebarMain>
        <SidebarNavHeader className="font-bold text-title">
          <h2>Descobrir</h2>
        </SidebarNavHeader>
        <SidebarNav className="pt-2">
          <SidebarNavMain>
            {NavLinksDicover.map(nav => (
              <SidebarNavLink
                key={nav.id}
                active={path === nav.href}
                className="flex flex-col"
                href={nav.href}
              >
                <span className="flex items-center gap-3">
                  {nav.icon} {nav.links}
                </span>
              </SidebarNavLink>
            ))}
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarMain>
        <SidebarNavHeader className="font-bold text-title">
          <h2>Galeria</h2>
        </SidebarNavHeader>
        <SidebarNav className="pt-2">
          <SidebarNavMain>
            {NavLinksLibary.map(nav => (
              <SidebarNavLink
                key={nav.id}
                active={path === nav.href}
                className="flex flex-col"
                href={nav.href}
              >
                <span className="flex items-center gap-3">
                  {nav.icon} {nav.links}
                </span>
              </SidebarNavLink>
            ))}
          </SidebarNavMain>
        </SidebarNav>
        <SidebarFooter className="pt-2">
          {NavLinksFooter.map(nav => (
            <SidebarNavLink
              key={nav.id}
              className="flex flex-col"
              href={nav.href}
            >
              <span className="flex items-center gap-3">
                {nav.icon} {nav.links}
              </span>
            </SidebarNavLink>
          ))}
        </SidebarFooter>
      </SidebarMain>
    </Sidebar>
  )
}
