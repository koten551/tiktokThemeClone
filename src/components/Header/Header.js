import './Header.css'
import { BiSearch , BiDotsVerticalRounded} from 'react-icons/bi';



function Header() {
    return (
        <div className="header">
            <div className="wide">
                <div className="row">
                    <div className="col l-2 m-2 c-2">
                        <a href="#1" style={{ display: "block" }}><img src="./logotiktok.png" alt="logo" className="logo" /> </a>
                    </div>
                    <div className="col l-7 m-7 c-7">
                        <div className="search__box">
                            <input type="text" className="" placeholder="Tìm kiếm tài khoản và video" />
                            <BiSearch className="search__icon"/>
                        </div>
                    </div>
                    <div className="col l-3 m-3 c-3">
                        <div className="right-container">
                            <div>
                                <a href="#1" className="" style={{color: "#333", textDecoration: "none", fontSize: "16px", fontWeight: "bold"}}>Upload</a>
                            </div>

                            <div className="login__btn">Log in</div>

                            <div className="more__icon"> <BiDotsVerticalRounded /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
