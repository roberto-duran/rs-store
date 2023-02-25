import Link from "next/link";

export default function Login() {
    return (
        <button className="btn btn-ghost" >
            {/* @ts-ignore */}
            <Link href={'/session/login'}>
                Login
            </Link>
        </button>
    );
};
