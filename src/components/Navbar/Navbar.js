import { useEffect, useState, useRef } from 'react'

import './Navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { BsCameraVideo, BsPeople } from 'react-icons/bs'

function SuggestNav() {

    const sugNav = useRef()
    const [sugNavExtra, setSugNavExtra] = useState('See all')
    const [suggestList, setSuggestList] = useState([])
    
    useEffect(() => {
        const urlAPI = 'http://localhost:5000/tiktoksuggest'
        fetch(urlAPI)
            .then((response) => response.json())
            .then(listData => setSuggestList(listData))
    }, [])

    const handleSeeAll = () => {
        if(sugNav) {
            if(sugNavExtra === 'See all') {
                sugNav.current.style.height = '280px'
                setSugNavExtra('See less')
            
            } else {
                sugNav.current.style.height = '175px'
                setSugNavExtra('See all')
                
            }
        }
    }

    
    return (
        <div className="suggest-nav__wrap">
            <h4 style={{ color: 'rgba(0,0,0, 0.5)', fontSize: '15px', paddingTop: "14px" }}>Suggested accounts</h4>
            <ul ref = {sugNav} 
                className="suggest-nav">
                {suggestList.map((item, index) => {
                    return (
                        <li key = {index}
                            className="suggest-nav__item">
                            <img src={item.avatar} alt="avatar"></img>
                            <a href='#' style={{textDecoration: 'none', color: '#333'}}>
                                <p style={{ fontWeight: "bold", paddingRight: '5px' }}>{item.account}</p>
                                <p style={{ fontWeight: "400", color: "rgba(0,0,0, 0.5)", fontSize: "12px", lineHeight: "12px" }}>{item.username}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <h5  onClick={handleSeeAll}
                style={{ color: "var(--primary-color)", paddingTop: "10px", cursor: "pointer" }}>{sugNavExtra}</h5>
        </div>
    )
}

function Navbar() {

    return (
        <div className="navbar">
            <div className="main-nav">
                <div className="main-nav__item nav__item-active">
                    <a href="#">
                        <AiFillHome className="nav__item-icon" />
                        For you
                    </a>
                </div>
                <div className="main-nav__item">
                    <a href="#">
                        <BsPeople className="nav__item-icon" />
                        Following
                    </a>
                </div>
                <div className="main-nav__item">
                    <a href="#">
                        <BsCameraVideo className="nav__item-icon" />
                        LIVE
                    </a>
                </div>
            </div>

            <SuggestNav/>

            <div style={{ height: "500px" }}></div>
        </div>
    )
}

export default Navbar