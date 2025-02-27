import Link from "next/link";
import SearchBar from "@/components/searchbar/SearchBar";
import NavIcons from "@/components/navicons/NavIcons";

const Navbar = () => {
    return (
        <div className={'h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'}>
            <div className={'hidden md:flex items-center justify-between gap-8 h-full'}>
                {/* left */}
                <div className={'w-1/3 xl:w-1/2 flex items-center gap-12'}>
                    <Link href={'/'} className={'flex items-center gap-3'}>
                        <div className={'text-4xl tracking-wide'}>Spontaneous</div>
                    </Link>
                    <div className={'hidden xl:flex gap-4 items-center'}>
                        <Link href={'/'} className={'text-xl'}>Home</Link>
                        <Link href={'/catalog'} className={'text-xl'}>Catalog</Link>
                        <Link href={'/aboutus'} className={'text-xl'}>About Us</Link>
                    </div>
                </div>
                {/* right */}
                <div className={'w-2/3 xl:w-1/2 flex items-center justify-between gap-8'}>
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}

export default Navbar