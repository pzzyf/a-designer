import { GithubIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'

export function Header() {
  return (
    <div className="grid h-[50px] w-full grid-cols-3 items-center border border-solid border-[var(--border-color)] px-4">
      <div />
      <h2 className="text-center">表单设计器</h2>
      <div className="flex items-center justify-end gap-4">
        <ThemeSwitch className="cursor-pointer" />
        <GithubIcon className="cursor-pointer" onClick={() => window.open('https://github.com/pzzyf/a-designer', '_blank')} />
      </div>
    </div>
  )
}
