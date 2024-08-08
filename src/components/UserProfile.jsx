import { Link } from 'react-router-dom';
const UserProfile = ({userInfo,username}) => {
    const {avatar_url, name, followers, following, location, public_repos, bio}=userInfo;

    return (
        <div className="p-5 mx-4 border border-yellow-500 bg-yellow-200 rounded-lg">
            <div>
                <img className="rounded-full w-28 h-28" src={avatar_url}/>
                <h1>name:- {name}</h1>
                <p>Bio:- {bio}</p>
                <h2>followers:- {followers}</h2>
                <h2>following:- {following}</h2>
                <p>location:- {location}</p>
                <p>Number of Pubilc Repos:- {public_repos}</p>
                <div className='p-2 my-2 border border-black rounded-lg bg-green-200 w-auto cursor-pointer'>
                   <Link to={"/userRepos/"+ username}>Go to Public Repos</Link>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;