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
                <div className="food">
                    <h4>{goods[i]} $20</h4>
                  </div>
                )
            })
        }
      </div>
    )
  } 