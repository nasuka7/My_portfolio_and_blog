import { useTheme } from "next-themes"


const SocialMedia = () => {
  const {theme, setTheme} = useTheme()
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  } 
  return (
    <div>

    </div>
  )
}