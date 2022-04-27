import {  useState, useRef } from 'react'

import './Navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { BsCameraVideo, BsPeople } from 'react-icons/bs'
const EX_BTN_TITLE = 'See all'
const COMPACT_BTN_TITLE = 'See less'
const MAX_ITEM_SUGGEST = 10
const DEFAULT_ITEM_SUGGEST = 4

const suggestData = [
    {
        account: 'kingdomc21',
        username: 'KINGDOMC',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Avatar-Free-Fire-ngau-chat-nu.jpg',
    },
    {
        account: 'vnn.official',
        username: 'VN NGÀY NAY',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-facebook-chat-bua-hai-thuoc.jpg',
    },
    {
        account: 'hoaa.hanasii',
        username: 'Đào Lê Phương Nga',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat.jpg',
    },
    {
        account: 'tiin.vn',
        username: 'tiin.vn',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Avatar-meo-cute-hai-huoc.jpg',
    },
    {
        account: 'kienreview90',
        username: 'Kien Review',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-bts-chat-ngau.jpg',
    },
    {
        account: 'linhbarbie',
        username: 'Linh Barbie',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Avatar-ngau-lanh-lung-anime-girl-deo-khau-trang-den.jpg',
    },
]

function SuggestNav() {

    const sugNav = useRef()
    const [sugNavExtra, setSugNavExtra] = useState(EX_BTN_TITLE)
    const [maxItem, setMaxItem] = useState(DEFAULT_ITEM_SUGGEST)
    // const [suggestList, setSuggestList] = useState([])

    // useEffect(() => {
    //     const urlAPI = 'http://localhost:5000/tiktoksuggest'
    //     fetch(urlAPI)
    //         .then((response) => response.json())
    //         .then(listData => setSuggestList(listData))
    // }, [])

    const handleSeeAll = () => {
        if (sugNav) {
            if (sugNavExtra === EX_BTN_TITLE) {
                setMaxItem(MAX_ITEM_SUGGEST)
                setSugNavExtra(COMPACT_BTN_TITLE)

            } else {
                setMaxItem(DEFAULT_ITEM_SUGGEST)
                setSugNavExtra('See all')
            }
        }
    }

    return (
        <div className="suggest-nav__wrap">
            <h4 style={{ color: 'rgba(0,0,0, 0.5)', fontSize: '15px', paddingTop: "14px" }}>Suggested accounts</h4>
            <ul ref={sugNav}
                className="suggest-nav">
                {suggestData.map((item, index) => {

                    return index < maxItem ? (
                        <li key={index}
                            className="suggest-nav__item">
                            <img src={item.avatar} alt="avatar"></img>
                            <a href="#1" style={{ textDecoration: 'none', color: '#333' }}>
                                <p style={{ fontWeight: "bold", paddingRight: '5px' }}>{item.account}</p>
                                <p style={{ fontWeight: "400", color: "rgba(0,0,0, 0.5)", fontSize: "12px", lineHeight: "12px" }}>{item.username}</p>
                            </a>
                        </li>
                    ) : <li key={index}></li>

                })}
            </ul>
            <h5 onClick={handleSeeAll}
                style={{ color: "var(--primary-color)", paddingTop: "10px", cursor: "pointer" }}>{sugNavExtra}</h5>
        </div>
    )
}

function Navbar() {

    return (
        <div className="navbar">
            <div className="main-nav">
                <div className="main-nav__item nav__item-active">
                    <a href="#1">
                        <AiFillHome className="nav__item-icon" />
                        For you
                    </a>
                </div>
                <div className="main-nav__item">
                    <a href="#1">
                        <BsPeople className="nav__item-icon" />
                        Following
                    </a>
                </div>
                <div className="main-nav__item">
                    <a href="#1">
                        <BsCameraVideo className="nav__item-icon" />
                        LIVE
                    </a>
                </div>
            </div>

            <SuggestNav />

            <div style={{ height: "500px" }}></div>
        </div>
    )
}

export default Navbar