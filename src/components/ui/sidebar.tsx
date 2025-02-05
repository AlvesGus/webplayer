import { cn } from '@/lib/utils'

export type SidebarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function Sidebar({ className, children }: SidebarGenericProps) {
  return (
    <aside
      className={cn([
        'border-r border-border flex flex-col space-y-6 bg-secondary/5 h-screen w-[270px]',
        className
      ])}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
  return (
    <header
      className={cn([
        'px-6 h-20 flex items-center border-b border-border',
        className
      ])}
    >
      {children}
    </header>
  )
}

export function SidebarHeaderTitle({
  className,
  children
}: SidebarGenericProps) {
  return <h2 className={cn(['', className])}>{children}</h2>
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function SidebarNavHeaderTitle({
  className,
  children
}: SidebarGenericProps) {
  return (
    <div className={cn(['uppercase text-foreground', className])}>
      {children}
    </div>
  )
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

type SidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function SidebarNavLink({
  className,
  children,
  href,
  active
}: SidebarGenericProps<SidebarNavLinkProps>) {
  return (
    <a
      href={href}
      className={cn([
        'flex text-title text-zinc-500 px-3 py-2 gap-5 rounded-md',
        active && 'bg-bgMintDark text-darkgreen',
        className
      ])}
    >
      {children}
    </a>
  )
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
  return (
    <footer
      className={cn([
        ' px-3 fixed left-0 bottom-0 mb-5 mt-auto border-t border-border w-[270px]',
        className
      ])}
    >
      {children}
    </footer>
  )
}
