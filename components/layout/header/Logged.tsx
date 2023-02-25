'use client';
import {signOut} from "next-auth/react";
import Image from "next/image";

type Props = {
    image: string
}

export default function Logged({image}: Props) {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image src={image} alt={"user image"} width={64} height={64} className={"rounded-full"}/>
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                    <a onClick={() => signOut()}>Logout</a>
                </li>
            </ul>
        </div>
    );
};
