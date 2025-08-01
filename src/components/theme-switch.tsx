import { useTheme } from '@heroui/use-theme'
import { MoonFilledIcon, SunFilledIcon } from '@/components/icons'
import { cn } from '@/utils'

export function ThemeSwitch({ className }: React.ComponentProps<'div'>) {
  const { theme, setTheme } = useTheme()

  return (
    <div className={cn(className)}>
      {
        theme === 'dark'
          ? (
              <SunFilledIcon
                className="cursor-pointer"
                onClick={() => setTheme('light')}
              />
            )
          : (
              <MoonFilledIcon
                className="cursor-pointer"
                onClick={() => setTheme('dark')}
              />
            )
      }
    </div>
  )
}
