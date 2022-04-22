import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { BsMusicNoteBeamed, BsFillHeartFill } from "react-icons/bs";
import { FaCommentDots, FaShare } from "react-icons/fa"
import './Content.css'
import './grid.css'
function Header({datas}) {

    return (
        <div className="row">
            {datas && <>
                <div className="col l-2 m-2 ">
                    <div className="avatar-wrap">
                        <img src={datas.avatar} alt="avt" className="avatar" />
                    </div>
                </div>
                <div className="col l-8">
                    <div className="row">
                        <a href="#" style={{ textDecoration: "none", color: "#333", paddingBottom: "5px" }}>
                            <span style={{ fontWeight: "bold", paddingRight: "5px" }}>{datas.account}</span>
                            <span>{datas.username}</span>
                        </a>
                    </div>
                    <div className="row">
                        <p style={{ paddingBottom: "5px" }}>{datas.description}</p>
                    </div>
                    <div className="row">
                        <div style={{ paddingBottom: "5px", lineHeight: "26px" }}>
                            <BsMusicNoteBeamed style={{ transform: "translateY(3px)", marginRight: "5px" }} />
                            <span>Nhạc nền - </span>
                            <span>{datas.songName}</span>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

function Body({datas}) {
    return (
        <div className="row">
            <div className="col l-2 m-2" />
            <div className="col l-8 m-10 ">
                <div className="row">
                    <video style={{ height: "495px", width: "280px", border: "1px #333 solid", borderRadius: "10px" }} controls>
                        <source src={datas.video} />
                    </video>
                    <div className="action-wrap">
                        <div className="primary-btn"> <BsFillHeartFill style={{ transform: "translateY(3px)" }} /> </div>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{datas.likes}</p>
                        <div className="primary-btn"> <FaCommentDots style={{ transform: "translateY(3px)" }} /> </div>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{datas.comments}</p>
                        <div className="primary-btn"> <FaShare style={{ transform: "translateY(3px)" }} /> </div>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{datas.shares}</p>
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

function Content({dataBases}) {
    return (

        <div className="content">
            <FollowBtn />

            <Header datas={dataBases} />

            <Body datas={dataBases} />
        </div>

    )
}

export default Content