var express = require('express')
var router = express()

var bodyParser = require('body-parser')
router.use(bodyParser.json())

var data = {}

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const tiktokData = [
    {
        account: 'Qkhanhdepzai',
        username: 'Hoàng Quốc Khánh',
        avatar: 'https://haycafe.vn/wp-content/uploads/2021/12/Anh-avatar-nam-cute-deo-khau-trang.jpg',
        description: 'Tuy anh ko ngọt ngào đc như người khác ,nhưng lúc nào cũng là chỗ dựa vững chắc cho em',
        songName: 'Waitting for love',
        video: './assets/video/HD7415.mp4',
        likes: 143000,
        comments: 643,
        shares: 102
    },
    {
        account: 'lykio.98',
        username: 'Lykio',
        avatar: 'https://haycafe.vn/wp-content/uploads/2022/01/Anh-dai-dien-cute-nu.jpg',
        description: 'Một ngày của người giàu nhất VN',
        songName: 'Ngày nào',
        video: './assets/video/FHD0054.mp4',
        likes: 217000,
        comments: 420,
        shareCounts: 231
    },
]

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
router.use(cors(corsOptions))
// route

router.get('/tiktok', (req, res) => {
    res.send(JSON.stringify(tiktokData))
})

router.get('/tiktoksuggest', (req, res) => {
    res.send(JSON.stringify(suggestData))
})

// open server port

router.listen(5000, () => {
        console.log('server is running')
    })