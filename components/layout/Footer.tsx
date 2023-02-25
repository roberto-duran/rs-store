import Image from "next/image";
import {UserLocation} from "../../types/UserLocation";
import {RiFacebookFill, RiInstagramLine, RiTwitterFill} from "react-icons/ri";

type FooterContainerProps = {
    userLocation?: UserLocation;
}

export default function Footer({ userLocation }: FooterContainerProps) {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className="">
                    <Image src="./logo.svg"
                           alt="RS logo"
                           width={60}
                           height={60} />
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center">
                    <span>© {new Date().getFullYear()} RS Development ™</span>
                    <span></span>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="flex items-center gap-4">
                        <a>
                            <RiTwitterFill className="w-6 h-6" />
                        </a>
                        <a>
                            <RiInstagramLine className="w-6 h-6" />
                        </a>
                        <a>
                            <RiFacebookFill className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>
        </>

    );
};
