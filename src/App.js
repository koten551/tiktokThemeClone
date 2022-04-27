
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
const tiktokData = [
  {
      account: 'Qkhanhdepzai',
      username: 'Hoàng Quốc Khánh',
      avatar: 'https://haycafe.vn/wp-content/uploads/2021/12/Anh-avatar-nam-cute-deo-khau-trang.jpg',
      description: 'Tuy anh ko ngọt ngào đc như người khác ,nhưng lúc nào cũng là chỗ dựa vững chắc cho em',
      songName: 'Waitting for love',
      video: './assets/video/HD7415.mp4',
      likeCount: 143300,
      comment: 643,
      shareCount: 102
  },
  {
      account: 'lykio.98',
      username: 'Lykio',
      avatar: 'https://haycafe.vn/wp-content/uploads/2022/01/Anh-dai-dien-cute-nu.jpg',
      description: 'Một ngày của người giàu nhất VN',
      songName: 'Ngày nào',
      video: './assets/video/FHD0054.mp4',
      likeCount: 217100,
      comment: 420,
      shareCount: 231
  },
  {
    account: 'vnn.official',
    username: 'VN NGÀY NAY',
    avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-facebook-chat-bua-hai-thuoc.jpg',
    description: 'Phong ơi! Tớ đây! Khoa đây mà! Trước cậu bị đói, đừng nhìn tiệm xôi trước cổng trường với ánh mắt nau náu không dời mắt với bát xôi chả trứng, tớ đã cho cậu 35k mua xôi đây này!!',
    songName: 'Ngày nào',
    video: './assets/video/HD7415.mp4',
    likeCount: 217222,
    comment: 50,
    shareCount: 16
},
]

function App() {

  // const [dataBase, setDataBase] = useState([])

  // useEffect(() => {
  //   const apiURL = 'http://localhost:5000/tiktok'
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then(dataList => setDataBase(dataList))
  //     .catch(err => console.error(err))
  // }, [])
  return (
    <div className="grid" id="top">
      <div className="row no-gutters">
        <div className="col l-12 m-12 c-12">
          <Header />
        </div>
      </div>
      <div className="wide">
        <div className="row">
          <div className="col l-4 m-4 c-2">
            <Navbar/>
          </div>
          <div className="col l-8 m-8 c-10">
            {tiktokData.map((data, index) => {
              return (<Content
                key={index}
                dataBases={data}
              />)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
