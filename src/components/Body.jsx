import { useState, useRef} from "react";
import UserProfile from "./UserProfile";

const Body = () => {
    const [userInfo,setUserInfo]= useState(null);
    const userNameValue=useRef(null);
    const apiUrl = 'https://api.github.com';

    const fetchUserGithubInfo = async()=>{
        const data = await fetch(`${apiUrl}/users/${userNameValue.current.value}`);
        const userDataInfo = await data.json();
        setUserInfo(userDataInfo);
        console.log(userDataInfo);
    }
    
    const searchGithubinfo = ()=>{
       fetchUserGithubInfo();
       console.log("clicked");
    }
    return (
        <div className="flex justify-center">
            <div className="mt-10">
                <div>
                    <label className="p-4 m-4 bg-yellow-200 rounded-lg">Enter username of Github profile</label>
                </div> 
                <div className="m-2 p-2">
                    <input className="border border-black rounded-lg p-2" type="text" ref={userNameValue} placeholder="Search Github profile info" />
                    <button className="px-4 py-2 m-4 border border-green-500 bg-green-300 rounded-lg hover:bg-green-500" type="submit" onClick={()=>searchGithubinfo()}>Search</button>
                </div>
                {userInfo && <UserProfile userInfo={userInfo} username={userNameValue.current.value}/>}
            </div>
        </div>
        
    )
}

export default Body