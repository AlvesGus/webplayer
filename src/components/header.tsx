import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import {
  HeaderAvatar,
  HeaderButton,
  HeaderInput,
  HeaderMain,
  HeaderSection
} from './ui/header'
import { Input } from './ui/input'
import { AvatarFallback } from './ui/avatar'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <HeaderMain>
      <HeaderInput className="w-[900px]">
        <div className="w-ful flex items-center border border-border px-4 py-1 rounded-[12px]">
          <span>
            <Search className="text-zinc-500" />
          </span>
          <Input
            className="outline-none focus-visible:outline-none"
            placeholder="Procure por artistas, músicas ou albuns..."
          />
        </div>
      </HeaderInput>
      <HeaderSection className="flex items-center gap-6">
        <HeaderButton>
          <Button variant="ghost" className="bg-bgMintDark shadow-md">
            Seja Premium
          </Button>
        </HeaderButton>
        <HeaderAvatar>
          <Avatar>
            <AvatarImage
              className="rounded-full w-10 h-10"
              src="https://github.com/AlvesGus.png"
              alt="@shadcn"
            />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </HeaderAvatar>
      </HeaderSection>
    </HeaderMain>
  )
}
