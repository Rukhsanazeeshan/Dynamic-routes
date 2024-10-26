import Link from "next/link";
import Nav from "../components/Nav"

export default function Country() {
    return (
        <div>
            <Nav />
            <div>
            <h1 className="text-center text-2xl bg-blue-400">Country List</h1>
            <ul className="text-center">
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li><Link href="/country/india">India</Link></li>
                <li><Link href="/country/england">England</Link></li>
                <li><Link href="/country/china">China</Link></li>
                <li><Link href="/country/australia">Australia</Link></li>

                  </ul>
            </div>
        </div>
    );
}