import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { switchLocalePath, useTranslations, type Locale } from "@/i18n"

interface LanguageToggleProps {
  currentLocale: Locale
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const t = useTranslations(currentLocale)

  const handleLocaleChange = (targetLocale: Locale) => {
    if (typeof window === "undefined") return
    const newPath = switchLocalePath(
      window.location.pathname + window.location.search + window.location.hash,
      targetLocale
    )
    window.location.href = newPath
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <span className="font-mono text-xs font-semibold uppercase">{currentLocale}</span>
        <span className="sr-only">{t("languageSwitcher.label")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLocaleChange("pt")}
          className={currentLocale === "pt" ? "font-semibold" : ""}
        >
          {t("languageSwitcher.pt")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange("en")}
          className={currentLocale === "en" ? "font-semibold" : ""}
        >
          {t("languageSwitcher.en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
