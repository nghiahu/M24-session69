import { Products } from "../../interface"
const products:Products[]=[
    {
        id:1,
        image:"https://limbacoffee.thietkewebhaiphong.com.vn/upload/images/Thi%E1%BA%BFt_k%E1%BA%BF_kh%C3%B4ng_t%C3%AAn_(1)3.jpg",
        name:"pizzal dứa",
        price: 150,
        stock:4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis voluptatem animi placeat quaerat sed sunt veritatis ipsa eius sit asperiores maiores iusto distinctio corrupti est, quidem inventore sequi modi."
    },
    {
        id:2,
        image:"https://www.newviet.net/wp-content/uploads/2022/05/image3.png.webp",
        name:" pizzal phô mai",
        price:200,
        stock:5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis voluptatem animi placeat quaerat sed sunt veritatis ipsa eius sit asperiores maiores iusto distinctio corrupti est, quidem inventore sequi modi."
    },
    {
        id:3,
        image:"https://www.monngon.tv/uploads/images/images/pizza-xuc-xich-1.jpg",
        name:"pizzal xúc xích",
        price:180,
        stock:2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis voluptatem animi placeat quaerat sed sunt veritatis ipsa eius sit asperiores maiores iusto distinctio corrupti est, quidem inventore sequi modi."
    }
]
const productReducer = (state = products ,action:any)=>{
    switch (action.type) {
        case "":
            return [...state]
        default:
            return state
    }
}
export default productReducer;