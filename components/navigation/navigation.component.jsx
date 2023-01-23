import Link from "next/link";

const Navigation = () => {
    return (
        <>
            <div className="flex items-center justify-between h-20 mb-6 text-2xl font-openSans">
                <div>
                    <h3>Castana's Salon</h3>
                </div>
                <div className="flex justify-between w-1/2 ">
                    <Link clasName='hover:cursor-pointer' href='/'>Home</Link>
                    <Link clasName='hover:cursor-pointer' href='/about'>About</Link>
                    <Link clasName='hover:cursor-pointer' href='/services'>Services</Link>
                    <Link clasName='hover:cursor-pointer' href='/contact-us'>Contact Us</Link>

                </div>
                <div className="px-5 py-5 bg-green-900 rounded-full text-stone-50">
                    <Link className="" href=''>Book Now</Link>
                </div>
            </div>
        </>
    );
}

export default Navigation;