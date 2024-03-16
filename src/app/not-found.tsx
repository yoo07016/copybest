import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div>
            <p>not found page</p>
            <Link href="/">/</Link>
        </div>
    )
}

export default NotFound;