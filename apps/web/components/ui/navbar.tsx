"use client"
import {useMediaQuery} from "react-responsive";
const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <>
    {/* // for desktop */}
      {isDesktopOrLaptop ?  (
        <div className="flex h-10 w-full items-center justify-between gap-2 p-4 md:gap-4 lg:gap-10">
          <h1 className="text-xl font-bold">Heicon</h1>
          <div className="flex gap-2 md:gap-4 lg:gap-10">
            <h2 className="text-xl">Contact Us</h2>
            <h2>About</h2>
            <h2>Services</h2>
            <h2>Products</h2>
          </div>
        </div>
      ) : (
        // for mobile
        <div>

        </div>
      )
      }
    </>
  )
}
export default Navbar
