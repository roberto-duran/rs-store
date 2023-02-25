'use client';
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <>
            <Image src="../logo.svg"
                   alt="RS logo"
                   width={30}
                   height={30}
                   className="mx-auto"
            />
            <h1 className="text-xl font-semibold text-center">
                Hi, Welcome Back
            </h1>
            {/* SSO Login */}
            <div className="flex flex-col space-y-3 text-gray-800">
                <button onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="flex btn bg-gray-100 gap-6 hover:bg-gray-300
                    hover:text-gray-800">
                    <FcGoogle className="w-8 inline-block" />
                    <span className="w-30 flex-grow-2">Sign in with Google</span>
                </button>
                <button onClick={() => signIn("facebook", { callbackUrl: "/" })}
                        className="flex btn bg-gray-100 gap-2 hover:bg-gray-300
                    hover:text-gray-800">
                    <BsFacebook className="w-7 text-blue-500 inline-block" />
                    <span className="w-30 flex-grow-2">Sign in with Facebook</span>
                </button>
            </div>
            {/* Separator */}
            <div className="relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                        <span className="bg-white px-4 text-xs text-gray-800 uppercase">
                            Or Login With Email
                        </span>
                </div>
            </div>
            {/* login form */}
            <form className="flex flex-col space-y-3">
                <input type="email"
                       placeholder="Email"
                       className="input input-bordered input-info w-full bg-gray-100" />
                <input type="password"
                       placeholder="Password"
                       className="input input-bordered input-info w-full bg-gray-100" />
                {/*@ts-ignore*/}
                <Link href="/session/forgot_password"
                      className="text-right link link-info">
                    Forgot Password?
                </Link>
                <button className="btn btn-info w-full text-white">
                    Sign in
                </button>
            </form>

        </>
    );
};
