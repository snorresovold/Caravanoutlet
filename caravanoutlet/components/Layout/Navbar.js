import Link from "next/link"
import CartSummary from "./CartSummary";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><a>Caravanoutlet</a></Link>
            </div>
            <Link href="/"><a>Hjem</a></Link>
            <Link href="/kategorier"><a>Produkter</a></Link>
            <Link href="/omoss"><a>Om oss</a></Link>
            <CartSummary />
        </nav>
    )
}


export default Navbar;