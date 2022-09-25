import { useEffect, useState } from 'react';

function Cart(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, []);

  const [itemsLength] = useState(
    props.shop.filter((i) => i.cart === true).length
  );

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

  function ShowTotal() {
    if (itemsLength > 0) {
      return (
        <div className="grid grid-flow-col w-80">
          <div>
            Total: <span className="font-bold">${total}</span>
          </div>
          <button className="justify-self-end border-2 border-green-500 px-6">
            Checkout
          </button>
        </div>
      );
    }
    if (itemsLength === 0) {
      return <div className="text-9xl">It's Empty :(</div>;
    }
  }

  return (
    <div className="grid justify-items-center auto-rows-min gap-3 mt-8">
      {props.shop
        .filter((i) => i.cart === true)
        .map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 grid grid-flow-col h-20 w-96 items-center rounded"
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
      <ShowTotal />
    </div>
  );
}

export default Cart;
