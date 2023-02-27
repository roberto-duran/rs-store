import Link from "next/link";
import Image from "next/image";
import {authOptions} from "../../../types/AuthOptions";
import {getServerSession} from "next-auth";
import Logged from "./Logged";
import Login from "./Login";
import {HiMagnifyingGlass} from "react-icons/hi2";

export default async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <div className="sticky top-0 z-50 navbar justify-between gap-4 md:gap-6 bg-base-200">
            <div>
                {/* @ts-ignore */}
                <Link href={"/"}
                      className="btn btn-ghost normal-case text-xl space-x-2">
                    <Image src={'logo.svg'} alt={'logo'}
                           width={20}
                           height={20} />
                    <span>Store</span>
                </Link>
            </div>
            <div className="">
                <div className="form-control">
                    <label className="input-group">
                        <div className="input-group">
                            <select className="select select-bordered hidden md:block">
                                <option disabled selected>All</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                            </select>
                            <input type="text"
                                   placeholder="Busca el producto que necesitas..."
                                   className="rounded-l-lg input input-bordered md:w-[40vw] lg:w-[60vw]" />
                            <button className="btn">
                                <HiMagnifyingGlass className="w-5 h-5" />
                            </button>
                        </div>
                    </label>
                </div>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {!session?.user && <Login />}
                {session?.user && <Logged image={session.user?.image || ''} />}
            </div>
        </div>
    );
};
