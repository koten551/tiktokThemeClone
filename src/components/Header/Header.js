import './Header.css'
import { BiCloudUpload } from 'react-icons/bi';
import { HiOutlinePaperAirplane } from 'react-icons/hi';

function Header() {
    return (
        <div className="header">
            <div className="wide">
                <div className="row">
                    <div className="col l-2 m-2 c-2">
                        <img src="./logotiktok.png" alt="logo"  className="logo"/> 
                    </div>
                    <div className="col l-7 m-7 c-7">

                    </div>
                    <div className="col l-3 m-3 c-3">
                        <div className="right-container">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header