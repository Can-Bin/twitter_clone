import { useEffect, useState } from "react"
import profilePic from "../images/profile.jpg"
import {MediaIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon, LocationIcon} from "../contentIcons"
import db from "../firebase"
import { collection, addDoc } from "firebase/firestore";

const Content = () => {
    const [isClickedForYou, setIsClickedForYou] = useState(null)
    const [isClickedFollowing, setIsClickedFollowing] = useState(null)
    const toggleDivForYou= () => {
    setIsClickedForYou(true)
    setIsClickedFollowing(false)
}

    const toggleDivFollowing = () => {
        setIsClickedForYou(false)
        setIsClickedFollowing(true)
    }

    const [content, setContent] = useState("")
    const change = (e) => {
        setContent(e.target.value)
    }
    const sendTweet = () => {
        if(content !== ""){
            const docRef = addDoc(collection(db, "feed"), {
                displayName: "Can BİN",
                userName: "@canbin7",
                time: "",
                image: ""
              });
        }
    }

    return(
        <div className='flex-1 flex flex-col border-x border-gray-extraLight mr-8'>
            <header className="flex flex-col justify-between border items-start pt-2 border-b h-24 border-gray-extraLight ">
                <div className="font-bold text-xl text-gray-900 h-2/4 ml-6">Home</div>
                <div className="flex justify-between items-center text-center w-full h-2/4" >
                    <div className="flex flex-col items-center justify-center w-50 h-full hover:bg-gray-extraLight duration-300 cursor-pointer" onClick={toggleDivForYou}>
                        <div className=" font-bold w-full h-full flex items-center justify-center ">For you</div>
                        <div className={`${isClickedForYou ? "block" : "hidden"} bg-primary-dark w-1/5 h-1 `}></div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-50 h-full hover:bg-gray-extraLight duration-300 cursor-pointer" onClick={toggleDivFollowing} >
                        <div className=" font-bold w-full h-full flex items-center justify-center ">Following</div>
                        <div className={`${isClickedFollowing ? "block" : "hidden"} bg-primary-dark w-1/5 h-1 `}></div>
                    </div>
                </div>
            </header>
            <div className="border">
                <div className="flex">
                    <img className="w-12 h-12 ml-6 my-2 rounded-full cursor-pointer" src={profilePic} alt="profilePic" />
                    <input onChange={change} value={content} className="ml-4 placeholder:text-gray-dark placeholder:text-xl text-xl outline-none w-full" type="text" name="tweet" placeholder="What's happening?" />
                </div>
                <div className="flex items-center justify-between pr-4 my-2">
                    <div className="ml-20 w-2/5">
                        <ul className="flex w-full justify-between items-center">
                            <li className="hover: cursor-pointer hover:bg-primary-light p-2 duration-200 rounded-full"><MediaIcon/></li>
                            <li className="hover: cursor-pointer hover:bg-primary-light p-2 duration-200 rounded-full"><GifIcon/></li>
                            <li className="hover: cursor-pointer hover:bg-primary-light p-2 duration-200 rounded-full"><PollIcon/></li>
                            <li className="hover: cursor-pointer hover:bg-primary-light p-2 duration-200 rounded-full"><EmojiIcon/></li>
                            <li className="hover: cursor-pointer hover:bg-primary-light p-2 duration-200 rounded-full"><ScheduleIcon/></li>
                            <li className="hover: cursor-pointer hover:bg-primary-light p-2 duration-200 rounded-full"><LocationIcon/></li>
                        </ul>
                    </div>
                    <div>
                        <button className='rounded-full bg-primary-base text-white text-lg font-bold w-24 py-2 hover:bg-primary-dark duration-200' onClick={sendTweet}>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content