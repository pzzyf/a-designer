import { useTheme } from '@heroui/use-theme'
import { MoonFilledIcon, SunFilledIcon } from '@/components/icons'

export function ThemeSwitche() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
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
