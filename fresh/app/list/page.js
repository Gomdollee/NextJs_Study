import Image from "next/image"
import techImg from '/public/tech0.jpg'

export default function List() {
    let goods = ['Tomatoes', 'Pasta', 'Coconut']
    // let array = [2,3,4]
    // array.map((a, i)=>{
    //     console.log(a)
    // })

    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            goods.map((a, i) => {
                return (
                <div className="food" key={i}>
                    <img src={`/tech${i}.jpg`} className="tech-img"/>
                    <h4>{goods[i]} $20</h4>
                  </div>
                )
            })
        }
      </div>
    )
  } 