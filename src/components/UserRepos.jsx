import { useEffect } from 'react'
// ${this.apiUrl}/users/${username}/repos
import { useParams } from 'react-router-dom';

const UserRepos = () => {
  const {userName}= useParams();
  console.log(userName);
  const apiUrl = 'https://api.github.com';
  useEffect(()=>{
    fetchReposData();
  })

  const fetchReposData= async()=>{
    const data= await fetch(`${apiUrl}/users/${userName}/repos`);
    const reposData = await data.json();
    console.log(reposData); 
  }
  return (
    <div>UserRepos</div>
  )
}

export default UserRepos;