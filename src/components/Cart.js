import { useEffect, useState } from 'react';

function Cart(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, []);

  const getTotal = () => {
    let array = [];
    props.shop
      .filter((i) => i.cart === true)
      .forEach((item) => {
        let num = item.qty * item.price;
        array.push(num);
      });
    let sum = 0;
    for (const value of array) {
      sum += value;
    }
    setTotal(sum);
  };

  return (
    <div className="grid justify-items-center auto-rows-min gap-3 mt-8">
      {props.shop
        .filter((i) => i.cart === true)
        .map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 grid grid-flow-col h-20 w-96 items-center"
          >
            <img width="80px" height="80px" src={item.img} alt="" />
            <div>{item.name}</div>
            <div>${item.price}</div>
            <div>x{item.qty}</div>
            <button
              className="text-red-400 hover:text-red-500"
              onClick={() => {
                const array = props.shop.slice();
                item.cart = false;
                props.setShop(array);
                getTotal();
              }}
            >
              Remove
            </button>
          </div>
        ))}
      <div>
        
        <div>Total: ${total}</div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
