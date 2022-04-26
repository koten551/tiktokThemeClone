import { useEffect, useState, useRef } from 'react'
import { BsMusicNoteBeamed, BsFillHeartFill } from "react-icons/bs";
import { FaCommentDots, FaShare } from "react-icons/fa"
import './Content.css'
import '../grid.css'
function Header({ avatar, username, account }) {

    return (
        <div className="row">
            <div className="col l-2 m-2 c-2">
                <div className="avatar-wrap">
                    <img src={avatar} alt="avt" className="avatar" />
                </div>
            </div>
            <div className="col l-8 m-8 c-8">
                <div className="row">
                    <a href="#" style={{ textDecoration: "none", color: "#333", paddingBottom: "5px" }}>
                        <span style={{ fontWeight: "bold", paddingRight: "5px" }}>{account}</span>
                        <span>{username}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

function Body({ video, likes, comments, shares, description, songName }) {
    
    const videoElement = useRef()

    const convertLongNum = (number) => {
        return number / 1000 > 1 ? `${number / 1000},${number % 1000}k` : number
    }

    return (
        <div className="row">
            <div className="col l-2 m-2 c-1" />
            <div className="col l-8 m-8 c-8">
                <div className="row">

                    <p style={{ paddingBottom: "5px", width: "100%" }}>{description}</p>
                    <div style={{ paddingBottom: "5px" }}>
                        <BsMusicNoteBeamed style={{ transform: "translateY(3px)", marginRight: "5px" }} />
                        <span>Nhạc nền - </span>
                        <span>{songName}</span>
                    </div>

                </div>
                <div className="row" style={{ minWidth: "396px" }}>
                    <video ref = {videoElement}
                        style={{ height: "495px", width: "280px", border: "1px #333 solid", borderRadius: "10px" }} controls>
                        <source src={video} />
                    </video>
                    <div className="action-wrap">
                        <div className="primary-btn"> <BsFillHeartFill style={{ transform: "translateY(3px)" }} /> </div>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{convertLongNum(likes)}</p>
                        <div className="primary-btn"> <FaCommentDots style={{ transform: "translateY(3px)" }} /> </div>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{convertLongNum(comments)}</p>
                        <div className="primary-btn"> <FaShare style={{ transform: "translateY(3px)" }} /> </div>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{convertLongNum(shares)}</p>
                    </div>
                </div>
            </div>
            <div className="col l-2 m-2">

            </div>
        </div>
    )
}

function FollowBtn() {
    return (
        <div className="follow-btn">Follow</div>
    )
}

function Content({ dataBases }) {

    // const [isPlay, setIsPlay] = useState(false)

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)          
    //     }
    // }, [])


    // const handleScroll = (e) => {
       
    // }
    return (

        <div className="content">
            <FollowBtn />

            <Header
                avatar={dataBases.avatar}
                username={dataBases.username}
                account={dataBases.account}
            />

            <Body
                video={dataBases.video}
                likes={dataBases.likes}
                comments={dataBases.comments}
                shares={dataBases.shares}
                description={dataBases.description}
                songName={dataBases.songName}
            />
        </div>

    )
}

export default Content