const Navbar = () => {
    return (
        
        <div className="flex items-center justify-between p-4 h-10 bg-neutral-100 shadow-xl w-full gap-2 md:gap-4 lg:gap-10" >
            <h1>Heicon</h1>
            <div className="flex gap-2 md:gap-4 lg:gap-10">
                <h2>Contact Us</h2>
                <h2>About</h2>
                <h2>Services</h2>
                <h2>Products</h2>
            </div>
        </div>
    )
}
export default Navbar;