import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeadberItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string,
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
    activeItem !== name && (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)}>{name}</span>
        </a>
      </Link>
    )
  )
}

const Navbar = () => {
  const [ activeItem, setActiveItem ] = useState<string>("")

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === "/profile" ) setActiveItem("About")
    if (pathname === "/resume" ) setActiveItem("Resume")
    if (pathname === "/projects" ) setActiveItem("Projects")
  }, [])

  return (
    <div className="flex justify-center mt-6  gap-8 text-sm">
      <span className="font-bold border-b-2 border-gray-800 dark:border-gray-100">{activeItem}</span>
      <div className="space-x-5 text-gray-400 dark:text-gray-300">
        <HeadberItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/profile"
        />
        <HeadberItem 
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
        <HeadberItem 
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  )
}

export default Navbar;