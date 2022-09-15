import { View, Text } from "react-native"
import { useState, useEffect, useContext } from 'react';
import axios from "axios";

export default function Main(props){
    //const {setIsNewMessageCame} = useContext(Context)
    function loadChats(){
        const headers = { Authorization: `Bearer ${props.token}` }
        axios.get(`${process.env.REACT_APP_BE_SERVER}/chats`, {headers})
            .then (res=>{
                let helper=false
                res.data.map(item=>{
                    if(!item.redBy.includes(props.user)){
                        helper=true
                    }
                })
                setIsNewMessageCame(helper)
            })
            .catch(error => {
                if(error){console.log(error)}
                if(error.response.data.error.message=="jwt expired"){
                    localStorage.removeItem("token")
                    props.setToken(null)
                }
            })
    }
    
    // useEffect(()=>{
    //     const id=setInterval(loadChats,5000)
    //     return ()=>clearInterval(id)
    // },[])

    return(
        <Text>MAIN</Text>
        // <main>
        //     <Routes>
        //         <Route path="*" element={<Start user= {props.user} setToken={props.setToken} token= {props.token} /> }/>
        //         <Route path="Search" element={<Search user= {props.user} setToken={props.setToken} token= {props.token}/>}/>
        //         <Route path="Chats/*" element={<Chats user= {props.user} setToken={props.setToken} token= {props.token}/>}/>
        //         <Route path="Profile" element={<Profile
        //             setToken={props.setToken}
        //             setUser={props.setUser} 
        //             userProfPic={props.userProfPic} 
        //             setUserProfPic={props.setUserProfPic} 
        //             user= {props.user} 
        //             token= {props.token}/> }/>
        //     </Routes>
        // </main>
    )
}