import { GithubIcon } from '@/components/icons'
import { ThemeSwitche } from '@/components/theme-switch'

export function Header() {
  return (
    <div className="h-[50px] flex items-center justify-end gap-2 border border-solid border-[#d9d9d9] dark:border-[#ffffff20]">
      <GithubIcon className="cursor-pointer" onClick={() => window.open('https://github.com/pzzyf/a-designer', '_blank')} />
      <ThemeSwitche />
    </div>
  )
}
