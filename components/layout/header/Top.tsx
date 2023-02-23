import {AiFillFlag, BsSuitHeart, MdSecurity, RiAccountPinCircleLine, RiArrowDropDownLine} from "react-icons/all";

export default function Top() {
    return (
        <div className="bg-gray-200 border-y">
            <div>
                <div></div>
                <ul>
                    <li>
                        <AiFillFlag />
                        <span>Colombia/USD</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer Security</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart />
                        <span>Wishlist</span>
                    </li>
                    <li>
                        <div className="flex">
                            <RiAccountPinCircleLine />
                            <span>Account</span>
                            <RiArrowDropDownLine />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
