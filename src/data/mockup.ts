import { collection, doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseDb, firebaseStorage } from "../firebase";
import { IRestaurant } from "../type/restaurant";
import { ECategory, EDistrict } from "./utils";

export const dataSample: IRestaurant[] = [
  {
    name: "Xofa Café & Bistro",
    category: [ECategory.Cafe, ECategory.TrangMieng],
    address: "14 Tống Duy Tân, Hoàn Kiếm, Hà Nội ",
    image:
      "https://xofacafebistro.com/wp-content/uploads/2023/01/273385854_5171471272883362_4950349239126699802_n-1024x1024.jpg",
    lat: 21.0170096,
    lng: 105.8079757,
    price: {
      min: 30000,
      max: 90000,
    },
    time: {
      open: "05:00",
      close: "23:30",
    },
    district: EDistrict.HoangMai,
    description:
      "Xofa Café & Bistro là một quán cà phê và nhà hàng đẳng cấp, nằm ẩn mình trong lòng một khu đô thị sôi động. Khi bước vào cửa, bạn sẽ ngửi thấy hương thơm dễ chịu của cà phê mới rang và mùi hấp dẫn của các loại bánh ngọt tươi ngon từ tủ trưng bày. Không gian của quán được thiết kế hài hòa giữa sự hiện đại và thoải mái, với ánh sáng nhẹ nhàng, ghế ngồi êm ái và trang trí tinh tế, tạo điều kiện cho khách hàng cảm thấy thoải mái và thư giãn.",
    services: [
      {
        id: "1",
        name: "Cafe",
        image:
          "https://xofacafebistro.com/wp-content/uploads/2023/01/273385854_5171471272883362_4950349239126699802_n-1024x1024.jpg",
      },
      {
        id: "2",
        name: "Trà",
        image:
          "https://xofacafebistro.com/wp-content/uploads/2023/01/182068863_4447833575247139_2234046618090785431_n-1024x1024.jpg",
      },
      {
        id: "3",
        name: "XOFA ĐẶC BIỆT",
        image:
          "https://xofacafebistro.com/wp-content/uploads/2023/01/202974039_4447837615246735_8598039376859284117_n-1024x1024.jpg",
      },
    ],
  },
  {
    name: "Bún Riêu Bề Bề",
    category: [ECategory.BuaTrua, ECategory.Bun, ECategory.BuaSang],
    address: "9 P. Tuệ Tĩnh, Bùi Thị Xuân, Hai Bà Trưng, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNnKc-1jNcCez47lAciOuz44fhXyvwVcLl-_68J=w426-h240-k-no",
    lat: 21.01813,
    lng: 105.849925,
    price: {
      min: 40000,
      max: 120000,
    },
    time: {
      open: "08:30",
      close: "22:00",
    },
    district: EDistrict.HaiBaTrung,
    description:
      "Quán Bún Riêu Bề Bề là một điểm đến ẩm thực đặc biệt, nơi khách hàng có thể thưởng thức một trong những phiên bản ngon nhất của món ăn truyền thống Việt Nam - Bún Riêu Bề Bề. Nằm ẩn mình trong một con hẻm nhỏ, quán mang đến không gian đậm chất gốc Việt, giản dị và ấm cúng.",
    services: [
      {
        id: "1",
        name: "Bún",
        image:
          "https://images.search.yahoo.com/images/view;_ylt=Awr.z9L.nFFmDTsFGHmJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzUxMzBhN2E3ZWVkM2QxM2RiZWM2M2Q2ZTEyOWM5MDE3BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DQu%25C3%25A1n%2BB%25C3%25BAn%2BRi%25C3%25AAu%2BB%25E1%25BB%2581%2BB%25E1%25BB%2581%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=800&h=600&imgurl=toplist.vn%2Fimages%2F800px%2Fbun-rieu-be-be-138-lac-trung-966781.jpg&rurl=https%3A%2F%2Ftoplist.vn%2Ftop%2Fbun-rieu-be-be-138-lac-trung-478137.htm&size=678.9KB&p=Qu%C3%A1n+B%C3%BAn+Ri%C3%AAu+B%E1%BB%81+B%E1%BB%81&oid=5130a7a7eed3d13dbec63d6e129c9017&fr2=piv-web&fr=mcafee&tt=B%C3%BAn+ri%C3%AAu+B%E1%BB%81+B%E1%BB%81+138+L%E1%BA%A1c+Trung&b=0&ni=21&no=2&ts=&tab=organic&sigr=7KqcPCcLEuxj&sigb=yh5rbmYGOhRr&sigi=LW.CY_ZaYPwg&sigt=h2WxnUiRkUXG&.crumb=juuWehSiHmU&fr=mcafee&fr2=piv-web&type=E210US91215G0",
      },
    ],
  },
  {
    name: "Quán Chân Gà Nướng Mỹ Miều",
    category: [ECategory.BuaTrua, ECategory.AnVat, ECategory.BuaToi],
    address:
      "Ngõ 65 P.Phạm Ngọc Thạch, Khu tập thể Kim Liên, Đống Đa, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPlgtU_Pl8L3SbLAho9vBtw1Ium4fjz021yElau=w426-h240-k-no",
    lat: 21.008477,
    lng: 105.835036,
    price: {
      min: 30000,
      max: 1300000,
    },
    time: {
      open: "07:00",
      close: "22:00",
    },
    district: EDistrict.DongDa,
    description:
      "Quán Chân Gà Nướng Mỹ Miều là một địa điểm ẩm thực độc đáo, nổi tiếng với món ăn chủ đạo là chân gà nướng được chế biến theo phong cách đặc trưng. Nằm tại một góc phố nhỏ, quán mang đến cho khách hàng một không gian đậm chất ẩm thực đường phố, sôi động và tràn ngập hương vị.",
    services: [
      {
        id: "1",
        name: "Chân gà nướng",
        image:
          "https://sp.yimg.com/ib/th?id=OIP.SxqslkDjaUxZUGp1e9wf4gHaHe&pid=Api&w=148&h=148&c=7&rs=1",
      },
    ],
  },
  {
    name: "Huyền nem rán Hàng Bè",
    category: [ECategory.NemRan, ECategory.AnVat],
    address: "21 P. Hàng Bè, Hàng Bạc, Hoàn Kiếm, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipM5NTxAi-4Y5J1aCmQ5gFV8uwFGnY2jSZ4IB6pt=w408-h544-k-no",
    lat: 21.03303,
    lng: 105.853804,
    price: {
      min: 30000,
      max: 80000,
    },
    time: {
      open: "07:00",
      close: "22:00",
    },
    district: EDistrict.HoanKiem,
    description:
      "Huyền Nem Rán Hàng Bè là một điểm đến nổi tiếng cho món nem rán truyền thống tại Hàng Bè, một trong những con phố nổi tiếng về ẩm thực ở Hà Nội, Việt Nam. Quán nằm ẩn mình trong một góc phố nhỏ, mang lại cho thực khách không chỉ là hương vị tuyệt vời mà còn là một trải nghiệm về văn hóa ẩm thực đích thực.",
    services: [
      {
        id: "1",
        name: "Nem rán",
        image:
          "https://images.search.yahoo.com/images/view;_ylt=AwrO._c9n1FmRfUDjuOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I3MDdlMjE3YzBmMjMyZmY4MDRhYzI5ZWE4Yzc4OTFhBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3D%2522Huy%25E1%25BB%2581n%2Bnem%2Br%25C3%25A1n%2BH%25C3%25A0ng%2BB%25C3%25A8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=3000&h=2192&imgurl=thegioidisan.vn%2Fassets%2Fmedia%2F2017%2Fmaxresdefault.jpg&rurl=https%3A%2F%2Flagroup.edu.vn%2Fcach-lam-nem-ran-ngon-tai-nha%2F&size=716.1KB&p=%22Huy%E1%BB%81n+nem+r%C3%A1n+H%C3%A0ng+B%C3%A8&oid=b707e217c0f232ff804ac29ea8c7891a&fr2=piv-web&fr=mcafee&tt=Top+h%C6%A1n+26+c%C3%A1ch+l%C3%A0m+nem+r%C3%A1n+ngon+t%E1%BA%A1i+nh%C3%A0+m%E1%BB%9Bi+nh%E1%BA%A5t+-+lagroup.edu.vn&b=0&ni=21&no=3&ts=&tab=organic&sigr=UdisanuS7F5V&sigb=AwLiU4E3Ekw7&sigi=qnOsfR_gJZrH&sigt=FRj4LG7lBZnN&.crumb=juuWehSiHmU&fr=mcafee&fr2=piv-web&type=E210US91215G0",
      },
    ],
  },
  {
    name: "Quán xiên cổng Trường Đại học Lao động - Xã hội",
    category: [ECategory.Xien, ECategory.AnVat],
    address: "43 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội, Việt Nam",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/3/2/29590441733938884408413354922482124157373697n-16776598333052015332142-1677727316865-16777273239791962720762.jpg",
    lat: 21.012269,
    lng: 105.802312,
    price: {
      min: 10000,
      max: 50000,
    },
    time: {
      open: "07:00",
      close: "19:00",
    },
    district: EDistrict.CauGiay,
    description:
      "Món chính tại quán là các loại xiên nướng như xiên thịt bò, xiên thịt gà, xiên hải sản, hoặc xiên rau củ, tất cả đều được ướp gia vị thơm ngon và nướng trên than hoa cho đến khi chín vàng. Ngoài ra, quán cũng cung cấp các loại nước sốt và rau sống để kết hợp với món xiên. Quán xiên cổng Trường Đại học Lao động - Xã hội ở Hà Nội không chỉ là nơi để thưởng thức đồ ăn ngon mà còn là một điểm hẹn quen thuộc, nơi bạn có thể gặp gỡ bạn bè, trò chuyện và tận hưởng không khí sôi động của khu vực đại học.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },
  {
    name: "Chè Trang",
    category: [ECategory.Che, ECategory.TrangMieng],
    address:
      "Ngõ 235 P. Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMtvlGSnIgkLXij3otnyh1i4beh2PjmsJsUsyE8=w408-h342-k-no",
    lat: 21.041663,
    lng: 105.782307,
    price: {
      min: 20000,
      max: 50000,
    },
    time: {
      open: "09:30",
      close: "22:00",
    },
    district: EDistrict.CauGiay,
    description:
      "Quán Chè Trang là một trong những địa điểm phổ biến tại Hà Nội, nơi bạn có thể thưởng thức các loại chè truyền thống và đặc sản của Việt Nam. Chè Trang thường được biết đến với sự đa dạng về nguyên liệu và hương vị độc đáo, là một lựa chọn tuyệt vời cho những người muốn trải nghiệm ẩm thực địa phương.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },

  {
    name: "Bánh Mỳ Nướng Lạng Sơn",
    category: [ECategory.BanhMi, ECategory.BuaTrua, ECategory.BuaToi],
    address: "201 P. Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNBzSPjSetch5fkC77YH_kPfOv5i5y2SUaQGtpV=w408-h408-k-no",
    lat: 21.041663,
    lng: 105.782307,
    price: {
      min: 35000,
      max: 60000,
    },
    time: {
      open: "10:00",
      close: "22:00",
    },
    district: EDistrict.CauGiay,
    description:
      "Quán bánh Mỳ Nướng Lạng Sơn là một trong những địa điểm ẩm thực phổ biến tại Hà Nội, chuyên phục vụ món bánh mỳ nướng - một món ăn đường phố đặc trưng của vùng miền Bắc Việt Nam. Bánh mỳ nướng Lạng Sơn thường được làm từ bánh mỳ tươi, thoa đều với hỗn hợp gia vị và sốt nước mắm, sau đó nướng trên bếp than hoa cho đến khi bề mặt bánh mỳ vàng ươm, thơm phức.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },
  {
    name: "Nem nướng Nha Trang chị Quỳnh",
    category: [ECategory.NemCuon, ECategory.BuaTrua, ECategory.BuaToi],
    address: "201 P. Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.vW10ngRD_OsNhYUbF8iFNQHaHa&pid=Api&P=0&h=220",
    lat: 21.042113,
    lng: 105.784811,
    price: {
      min: 35000,
      max: 50000,
    },
    time: {
      open: "09:30",
      close: "22:00",
    },
    district: EDistrict.CauGiay,
    description:
      "Nem nướng Nha Trang chị Quỳnh là một trong những quán ăn nổi tiếng tại Hà Nội, chuyên phục vụ món nem nướng - một món ăn đặc sản đến từ Nha Trang. Quán được nhiều người yêu thích bởi hương vị đậm đà, thơm ngon và dịch vụ thân thiện.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },
  {
    name: "CGV Indochina Plaze",
    category: [ECategory.Phim],
    address: "Tầng 4, Indochina Plaza Hà Nội, 241 Xuân Thủy, Q. Cầu Giấy",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOZVA394OfGd3vui9Cfg9sL3RN1UMNusVFVxTFu=w800-h600-k-no",
    lat: 21.0363781,
    lng: 105.7793862,
    price: {
      min: 100000,
      max: 500000,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.CauGiay,
    description:
      "CGV Indochina Plaza là một trong những rạp chiếu phim hiện đại và phổ biến tại Hà Nội, nằm trong tòa nhà Indochina Plaza ở khu vực Cầu Giấy, một trong những khu vực sầm uất và phát triển của thành phố. Với không gian rộng rãi và thiết kế đẹp mắt, CGV Indochina Plaza hứ promisees mang lại cho khách hàng một trải nghiệm giải trí đẳng cấp và thoải mái.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },
  {
    name: "Bò nhúng dấm 555",
    category: [ECategory.Lau, ECategory.BuaToi, ECategory.BuaTrua],
    address: "108 D1 Trần Huy Liệu, Hanoi",
    image:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/lau-bo-nhung-dam-555.jpg",
    lat: 21.027225,
    lng: 105.8194112,
    price: {
      min: 150000,
      max: 0,
    },
    time: {
      open: "7:00",
      close: "23:00",
    },
    district: EDistrict.CauGiay,
    description:
      "Bò nhúng dấm 555 là một trong những chuỗi nhà hàng nổi tiếng tại Việt Nam, chuyên phục vụ món bò nhúng dấm - một món ăn hấp dẫn và đậm đà hương vị. Đây là món ăn phổ biến và được yêu thích bởi sự kết hợp tuyệt vời giữa thịt bò tươi ngon và nước dùng dấm chua thanh.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },
  {
    name: "Gimbap Hàn Quốc",
    category: [ECategory.Gimbap],
    address: "Số 19 ngõ 165 Xuân Thủy, Cầu Giấy, Hà Nội",
    image:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/gimbab-han-quoc.jpg",
    lat: 21.0363791,
    lng: 105.7841912,
    price: {
      min: 120000,
      max: 250000,
    },
    time: {
      open: "",
      close: "",
    },
    district: EDistrict.CauGiay,
    description:
      "Quán Gimbap Hàn Quốc là một trong những địa điểm ẩm thực được nhiều người yêu thích, đặc biệt là những ai đam mê món ăn Hàn Quốc. Gimbap, còn gọi là kimbap, là một món ăn truyền thống của Hàn Quốc, tương tự như sushi của Nhật Bản nhưng có những đặc trưng riêng. Dưới đây là một số thông tin về quán Gimbap Hàn Quốc và món gimbap.",
    services: [
      {
        id: "1",
        name: "Ghimbap",
        image: "https://file.hstatic.net/1000135310/file/gimbap-1600x1067.jpg",
      },
    ],
  },
  {
    name: "Lăng Chủ tịch Hồ Chí Minh",
    category: [ECategory.ThamQuan],
    address: "8 Hùng Vương, Điện Biên, Ba Đình, Hà Nội",
    image:
      "https://cdn.justfly.vn/1920x1167/media/202212/21/1671587920-lang-chu-tich-ho-chi-minh-ha-noi-1.jpg",
    lat: 21.0358442,
    lng: 105.8318034,
    price: {
      min: 0,
      max: 25000,
    },
    time: {
      open: "7:30",
      close: "10:30",
    },
    district: EDistrict.BaDinh,
    description:
      "Lăng Chủ tịch Hồ Chí Minh, còn gọi là Lăng Bác, là nơi an nghỉ cuối cùng của Chủ tịch Hồ Chí Minh, vị lãnh tụ vĩ đại của dân tộc Việt Nam. Đây là một trong những di tích lịch sử quan trọng nhất của Việt Nam, tọa lạc tại thủ đô Hà Nội.",
    services: [
      {
        id: "1",
        name: "Tham Quan",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.62cBEdDYD5AF693AUR7yyAHaEk&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "Chùa Một Cột",
    category: [ECategory.ThamQuan],
    address: "phố P. Chùa Một Cột, Đội Cấn, Ba Đình, Hà Nội",
    image:
      "https://cdn.justfly.vn/1920x1440/media/202106/15/1623747651-chua-mot-cot-dia-diem-du-lich-ba-dinh-ha-noi.jpg",
    lat: 21.035854,
    lng: 105.8323328,
    price: {
      min: 0,
      max: 25000,
    },
    time: {
      open: "7:00",
      close: "18:00",
    },
    district: EDistrict.BaDinh,
    description:
      "Chùa Một Cột, còn gọi là Chùa Diên Hựu hoặc Chùa Mật, là một trong những di tích lịch sử và văn hóa quan trọng nhất của Việt Nam, nằm tại thủ đô Hà Nội. Đây là một ngôi chùa nổi tiếng với kiến trúc độc đáo và lịch sử lâu đời.",
    services: [
      {
        id: "1",
        name: "Tham Quan",
        image:
          "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/Chua-mot-cot/Hinh-anh-Chua-Mot-Cot-4.jpg",
      },
    ],
  },
  {
    name: "Rạp Beta Cinemas Mỹ Đình ",
    category: [ECategory.Phim],
    address:
      "tầng hầm B1, toà nhà Golden Palace, đường Mễ Trì, quận Nam Từ Liêm, Hà Nội.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.numNFduymHs7XsXdTz8hpgHaE7&pid=Api&P=0&h=220",
    lat: 21.011739,
    lng: 105.7723151,
    price: {
      min: 45000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.NamTuLiem,
    description:
      "Rạp Beta Cinemas Mỹ Đình là một phần của hệ thống rạp chiếu phim Beta Cinemas tại Việt Nam. Beta Cinemas nổi tiếng với mô hình rạp chiếu phim giá rẻ, chất lượng tốt, phù hợp với đa dạng đối tượng khán giả. Dưới đây là một số thông tin chi tiết về rạp Beta Cinemas Mỹ Đình:",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "CGV Tràng Tiền Plaza",
    category: [ECategory.Phim],
    address: "Tràng Tiền Plaza, 24 Hai Bà Trưng, Q. Hoàn Kiếm, Tp. Hà Nội",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOgbGdpWcM64SV1UgSbxpqkMDDuf37zwkWD454I=s680-w680-h510",
    lat: 21.0242718,
    lng: 105.8507802,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.HoanKiem,
    description:
      " CGV Tràng Tiền Plaza là một trong những rạp chiếu phim nổi tiếng và được ưa chuộng tại Hà Nội, nằm tại Tràng Tiền Plaza-một trong những trung tâm mua sắm và giải trí hàng đầu của thành phố. Với vị trí thuận tiện và không gian hiện đại, CGV Tràng Tiền Plaza hứa hẹn mang lại cho khách hàng một trải nghiệm giải trí đa dạng và thú vị.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "CGV Aeon Long Biên",
    category: [ECategory.Phim],
    address: "Tầng 4 - TTTM AEON Long Biên, Số 27 Cổ Linh, Q.Long Biên, Hà Nội",
    image:
      "https://scootersaigontour.com/wp-content/uploads/2020/09/CGV-Aeon-Mall-Long-Bien.jpg",
    lat: 21.0265641,
    lng: 105.8981057,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.LongBien,
    description:
      "CGV Aeon Long Biên có lẽ là một rạp chiếu phim nằm trong trung tâm mua sắm Aeon Long Biên ở Hà Nội, Việt Nam. CGV (CJ CGV) là một chuỗi rạp chiếu phim đa rạp Hàn Quốc hoạt động ở nhiều quốc gia, bao gồm cả Việt Nam. Nó nổi tiếng với cơ sở hiện đại, ghế ngồi thoải mái và một loạt các bộ phim, bao gồm cả những bộ phim bom tấn quốc tế và phim địa phương. Nếu bạn đang tìm kiếm một nơi để xem những bộ phim mới nhất hoặc tận hưởng trải nghiệm đi xem phim, CGV Aeon Long Biên có thể là một lựa chọn tốt ở Hà Nội.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "CGV Vincom Nguyễn Chí Thanh",
    category: [ECategory.Phim],
    address: "Số 54A Nguyễn Chí Thanh, P. Láng Thượng, Q. Đống Đa, Tp. Hà Nội",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.BaSieQ0j8t4smKyWgbthigHaE6&pid=Api&P=0&h=220",
    lat: 21.0255985,
    lng: 105.80462,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.DongDa,
    description:
      "CGV Vincom Nguyễn Chí Thanh là một trong các rạp chiếu phim tại trung tâm thương mại Vincom Center tại địa chỉ Nguyễn Chí Thanh, Hà Nội, Việt Nam. CGV là một trong những chuỗi rạp chiếu phim lớn và phổ biến ở Việt Nam, cung cấp một loạt các bộ phim từ cả Hollywood và điện ảnh Việt Nam. Rạp chiếu phim này thường được biết đến với các thiết bị hiện đại, phòng chiếu rộng rãi và không gian thoải mái, tạo điều kiện lý tưởng cho khán giả thưởng thức các bộ phim mới nhất.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },

  {
    name: "CGV Rice City",
    category: [ECategory.Phim],
    address:
      "Tầng 2 và 4, Tòa nhà Trung - RICE CITY Linh Đàm, Phường Hoàng Liệt, Quận Hoàng Mai, Tp. Hà Nội",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNzEVTMdKgCcfTzA36TLNFnjt1H72uqiCQ3yIXX=w408-h306-k-no",
    lat: 20.9633371,
    lng: 105.8203687,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.HoangMai,
    description:
      'Hiện tôi không có thông tin cụ thể về CGV Rice City. Có thể đây là một rạp chiếu phim CGV nằm trong khu vực nào đó mang tên "Rice City", hoặc có thể là một sự kết hợp giữa CGV và một dự án mang tên "Rice City". Để cung cấp thông tin chính xác hơn, bạn có thể cung cấp thêm thông tin về địa điểm cụ thể hoặc ngữ cảnh liên quan.',
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "CGV Hà Nội Center Point",
    category: [ECategory.Phim],
    address:
      "Tầng 5 TTTM Hà Nội Centerpoint, 27 Đ. Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOFJqpaGz-wEQVqM0CZuCsN2rajPzLptoNr9QJm=w408-h306-k-no",
    lat: 21.0048244,
    lng: 105.8020234,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.ThanhXuan,
    description:
      "CGV Hà Nội Center Point là một trong những rạp chiếu phim nằm trong trung tâm thương mại Center Point ở Hà Nội, Việt Nam. CGV là một trong những chuỗi rạp chiếu phim lớn và phổ biến ở Việt Nam, cung cấp một loạt các bộ phim từ cả Hollywood và điện ảnh Việt Nam. Rạp chiếu phim này thường được biết đến với các thiết bị hiện đại, phòng chiếu rộng rãi và không gian thoải mái, tạo điều kiện lý tưởng cho khán giả thưởng thức các bộ phim mới nhất.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },
  {
    name: "CGV Times City",
    category: [ECategory.Phim],
    address:
      "B1 Floor - Vincom Mega Mall, 458 P. Minh Khai, Khu đô thị Times City, Thanh Xuân, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNNuau0TXd2FQN9XfVNcBdwSPUAc2MVkrfQHxty=w408-h306-k-no",
    lat: 20.993651,
    lng: 105.8654729,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.HaiBaTrung,
    description:
      "CGV Times City là một trong những rạp chiếu phim nằm trong khu đô thị Times City, ở Hà Nội, Việt Nam. CGV, hoặc CJ CGV, là một chuỗi rạp chiếu phim đa rạp Hàn Quốc, phổ biến ở nhiều quốc gia trên thế giới. Rạp chiếu phim này thường có các phòng chiếu hiện đại, ghế ngồi thoải mái và cung cấp một loạt các bộ phim từ cả Hollywood và ngành công nghiệp điện ảnh Việt Nam. CGV Times City là một điểm đến phổ biến cho những người muốn thưởng thức các bộ phim mới nhất và có một trải nghiệm xem phim thoải mái và chất lượng.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },

  {
    name: "CGV Vincom Long Biên",
    category: [ECategory.Phim],
    address:
      "Vincom Plaza, Tầng 5, TTTM, Khu đô thị Vinhomes Riverside, Long Biên, Hà Nội, Việt Nam",
    image: "https://img.jamja.vn/jamja-prod/cgv-vincom-long-bien.jpg?cache=1",
    lat: 21.0507416,
    lng: 105.9141537,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.LongBien,
    description:
      "CGV Vincom Long Biên là một trong các rạp chiếu phim tại trung tâm thương mại Vincom Center Long Biên, tọa lạc ở Long Biên, Hà Nội, Việt Nam. CGV là một chuỗi rạp chiếu phim đa rạp nổi tiếng của Hàn Quốc, cung cấp một loạt các bộ phim từ cả Hollywood và ngành công nghiệp điện ảnh Việt Nam. Rạp chiếu phim này thường được biết đến với các thiết bị hiện đại, phòng chiếu rộng rãi và không gian thoải mái, tạo điều kiện thuận lợi cho khán giả thưởng thức các bộ phim mới nhất.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },

  {
    name: "CGV Machinco",
    category: [ECategory.Phim],
    address:
      "Tầng 7, Trung tâm thương mại Machinco, 10 Trần Phú, Q, Hà Đông, Hanoi City",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNH7L9eMiyRZK2niqzkmxyH9v3UK28V3lXzE2iQ=w426-h240-k-no",
    lat: 20.9835087,
    lng: 105.7887744,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.HaDong,
    description: "...",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Bỏng ngô",
        image:
          "https://lamgiautukinhdoanh.live/wp-content/uploads/2020/11/bong-ngo-doanh-thu-trieu-do-lam-giau-tu-kinh-doanh-2.jpg",
      },
      {
        id: "3",
        name: "Đồ uống",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.v1IBevuii2KZIbyOlIoYMgHaFk&pid=Api&P=0&h=220",
      },
    ],
  },

  {
    name: "CGV Xuân Diệu",
    category: [ECategory.Phim],
    address: "59 Đ. Xuân Diệu, Quảng An, Tây Hồ, Hà Nội, Việt Nam",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPjpmJ9TAJORIvWQGMjwePZgC91Ak_vM-uAu3Bx=w408-h306-k-no",
    lat: 21.0650908,
    lng: 105.8245902,
    price: {
      min: 70000,
      max: 0,
    },
    time: {
      open: "9:30",
      close: "22:30",
    },
    district: EDistrict.TayHo,
    description:
      "CGV Xuân Diệu là một trong những rạp chiếu phim thuộc chuỗi CGV Cinemas tại Việt Nam. CGV là một trong những hệ thống rạp chiếu phim lớn nhất và nổi tiếng nhất tại Việt Nam, cung cấp các dịch vụ giải trí chất lượng cao với công nghệ hiện đại và nhiều tiện ích cho khán giả.",
    services: [
      {
        id: "1",
        name: "",
        image: "",
      },
    ],
  },
];

export const dataFirebase: IRestaurant[] = [
  {
    name: "Xofa Café & Bistro",
    category: [ECategory.Cafe, ECategory.Ruou, ECategory.TrangMieng],
    address: "539 Lĩnh Nam, P.Lĩnh Nam, Q.Hoàng Mai, Hà Nội",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPEA7Ew-JLQ_ASek_bHkDrd3AqC4DJd85nL_yt1=w408-h270-k-no",
    lat: 21.0170096,
    lng: 105.8079757,
    price: {
      min: 30000,
      max: 90000,
    },
    time: {
      open: "09:30",
      close: "21:00",
    },
    district: EDistrict.HoangMai,
    description:
      "Xofa Café & Bistro tại 539 Lĩnh Nam, P. Lĩnh Nam, Q. Hoàng Mai, Hà Nội là một quán cà phê và nhà hàng mang phong cách ấm cúng và hiện đại. Với thiết kế nội thất sang trọng nhưng gần gũi, quán tạo ra một không gian thư giãn lý tưởng cho cả học tập, làm việc và gặp gỡ bạn bè. Xofa Café & Bistro nổi bật với thực đơn đa dạng, bao gồm các món ăn Âu - Á kết hợp và nhiều loại đồ uống phong phú như cà phê, trà, sinh tố và cocktail. Nhân viên phục vụ tận tình và chu đáo, đảm bảo mang đến cho khách hàng trải nghiệm ẩm thực tuyệt vời. Quán cũng thường xuyên tổ chức các sự kiện và có khu vực ngoài trời thoáng đãng, lý tưởng cho những buổi tối mát mẻ.",
    services: [
      {
        id: "1",
        name: "Wifi Free",
        image: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
      },
      {
        id: "2",
        name: "Parking Free",
        image:
          "https://static.vecteezy.com/system/resources/previews/000/378/311/original/vector-parking-icon.jpg",
      },
    ],
  },
];

export const uploadImage = async (uri: string) => {
  // It won't upload image if image is not change
  console.log("eror here");

  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const avatarName = uuid.v4() as string;
  const fileRef = ref(firebaseStorage, avatarName);
  await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  const avatarUrl = await getDownloadURL(fileRef);
  return { avatarName, avatarUrl };
};

export const createRes = async () => {
  dataSample.map(async (restaurant, index) => {
    const ResDocRef = doc(firebaseDb, "restaurants", `${index}`);
    // const { avatarUrl } = await uploadImage(restaurant.image!);
    await setDoc(ResDocRef, {
      ...restaurant,
      id: ResDocRef.id,
      views: 0,
      // image: avatarUrl,
    });
  });
  console.log("here");
};
