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
    if (pathname === "/about" ) setActiveItem("About")
    if (pathname === "/resume" ) setActiveItem("Blog")
    if (pathname === "/project" ) setActiveItem("Profile")
  }, [])

  return (
    <div>
      <span>{activeItem}</span>
      <div>
        <HeadberItem 
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/about"
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
          name="Project"
          route="/project"
        />
      </div>
    </div>
  )
}

export default Navbar;