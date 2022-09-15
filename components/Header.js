import { View, Text } from "react-native"
import { useState, useEffect, useContext } from 'react';

export default function Header(props){
    //const {lang,setLang,setHide,setTheme, isNewMessageCame, setIsNewMessageCame }=useContext(Context)
    return(
        <View>
            <Text>HEADER</Text>
        </View>
        // <header>
        //     <nav>
        //         <NavLink to="*"><span className="bigScreen"><img src={logo} id="logo871" /> friendscircle.de</span>
        //         <img src={logo} id="logo871" className="smallScreen"/></NavLink>
        //         <NavLink to="Search"> <span className="bigScreen">{trans[lang].Search}</span><MdSearch className="smallScreen"/></NavLink>
        //         <NavLink to="Chats"> <span className={isNewMessageCame?"newMessage bigScreen":"bigScreen"}>
        //          {trans[lang].Messages}</span><MdOutlineEmail className="smallScreen"/></NavLink>
        //         <NavLink to="Profile"> <span className="bigScreen">{trans[lang].Profile}</span><CgProfile className="smallScreen"/></NavLink>
        //         <MdLogout id="LogOutBTN" onClick={logout}/>
        //     </nav>
        // </header>
    )
 }