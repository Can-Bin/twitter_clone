import profilePic from "../images/profile.jpg"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const UserBox = () => {
    return(
        <div className="flex justify-around items-center w-full hover:bg-primary-light cursor-pointer rounded-full">
                <div>
                    <img src={profilePic} alt="profile_pic" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <span className="font-bold text-md">Can Bin</span>
                    <span>@canbin7</span>
                </div>
            <div>
                <HiOutlineDotsHorizontal className=""/>
            </div>

        </div>
    )
}

export default UserBox;