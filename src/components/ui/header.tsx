import { cn } from '@/lib/utils'

export type HeaderGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function HeaderMain({ children, className }: HeaderGenericProps) {
  return (
    <header
      className={cn([
        'w-full h-14 px-10 my-4 flex items-center justify-between',
        className
      ])}
    >
      {children}
    </header>
  )
}

export function HeaderInput({ children, className }: HeaderGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}

export function HeaderSection({ children, className }: HeaderGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}

export function HeaderButton({ children, className }: HeaderGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}

export function HeaderAvatar({ children, className }: HeaderGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}
