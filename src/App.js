
import { useState, useEffect } from 'react'
import Content from './Content'

const tiktokData = [
  {
      account: 'Qkhanhdepzai',
      username: 'Hoàng Quốc Khánh',
      avatar: 'https://haycafe.vn/wp-content/uploads/2021/12/Anh-avatar-nam-cute-deo-khau-trang.jpg',
      description: 'Tuy anh ko ngọt ngào đc như người khác ,nhưng lúc nào cũng là chỗ dựa vững chắc cho em',
      songName: 'Waitting for love',
      video: './assets/video/FHD0054.mp4" type="video/mp4',
      likeCount: 143000,
      comment: 643,
      shareCount: 102
  },
  {
      account: 'lykio.98',
      username: 'Lykio',
      avatar: 'https://haycafe.vn/wp-content/uploads/2022/01/Anh-dai-dien-cute-nu.jpg',
      description: 'Một ngày của người giàu nhất VN',
      songName: 'Ngày nào',
      video: './assets/video/FHD0054.mp4" type="video/mp4',
      likeCount: 217000,
      comment: 420,
      shareCount: 231
  },
]

function App() {

  const [dataBase, setDataBase] = useState([])

  useEffect(() => {
    const apiURL = 'http://localhost:4000/tiktokData'
    fetch(apiURL)
      .then((response) => response.json())
      .then(dataList => setDataBase(dataList))
      .catch(err => console.error(err))
  }, [])
  console.log(dataBase)
  return (
    <div className="grid" id="top">
      <div className="wide">
        <div className="row">
          <div className="col l-4"></div>
          <div className="col l-8">
            {dataBase.map((data, index) => {
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
