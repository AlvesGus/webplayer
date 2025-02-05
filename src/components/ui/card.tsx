import { cn } from '@/lib/utils'

export type CardGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function Card({ children, className }: CardGenericProps) {
  return (
    <div className={cn(['border border-border px-3 py-3', className])}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: CardGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}
export function CardHeaderTitle({ children, className }: CardGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}
export function CardMain({ children, className }: CardGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}
export function CardMainTitle({ children, className }: CardGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}
export function CardMainContent({ children, className }: CardGenericProps) {
  return <div className={cn(['', className])}>{children}</div>
}
