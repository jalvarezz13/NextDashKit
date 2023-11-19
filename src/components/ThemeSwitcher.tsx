"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Switch } from "@nextui-org/react"

import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center gap-1 justify-center">
      The current theme is: {theme}
      <Switch
        size="md"
        color="default"
        classNames={{
          wrapper: theme == "light" ? "bg-gray-300" : "bg-default",
        }}
        startContent={<IconSunFilled />}
        endContent={<IconMoonFilled />}
        onValueChange={() => {
          setTheme(theme == "light" ? "dark" : "light")
        }}
      >
        {theme == "light" ? "Light" : "Dark"} Mode
      </Switch>
    </div>
  )
}
