import React from 'react'
// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Mahesh1737')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         setData(data)
    //     })
    // },[])
    
  return (
    <div className="text-center text-3xl bg-gray-600 text-white mx-auto px-4 py-4">
    <h1 className="text-4xl mb-6 font-semibold">Github</h1>
    <div className="flex flex-wrap max-w-2xl justify-around mx-auto mb-5">
        <div>
            <img src={data.avatar_url} alt="profile-image" width={300} />
        </div>
        <div className="flex flex-col text-xl pt-5 text-start ml-6">
            <h3>User name : {data.login}</h3>
            <h3>Total repos : {data.public_repos}</h3>
            {/* <h3>Followers : {data.followers} </h3>   */}
            <h3>Following : {data.following} </h3>
            <h3 className="pt-1.5 mt-3 text-xl text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">🔗<a href={data.html_url} target="_blank">visit github</a></h3>
        </div>
    </div> 
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const data = await fetch('https://api.github.com/users/Mahesh1737')
    return data.json();
}