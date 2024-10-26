import Link from "next/link";
export default function Nav(){
    return(
        <nav>
            <ul className="flex justify-center items-center gap-20 bg-green-500 text-2xl">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/country">Country </Link></li>  
            </ul>

        </nav>
    )
}
