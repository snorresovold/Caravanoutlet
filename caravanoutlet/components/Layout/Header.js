import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><a>Bobildeler</a></Link>
            </div>
            <Link href="/"><a>Hjem</a></Link>
            <Link href="/kategorier"><a>Produkter</a></Link>
            <Link href="/omoss"><a>Om oss</a></Link>
        </nav>
    )
}


export default Navbar;