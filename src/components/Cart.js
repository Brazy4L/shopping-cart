function Cart(props) {
  return (
    <div className="grid justify-items-center auto-rows-min gap-3">
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
              }}
            >
              Remove
            </button>
          </div>
        ))}
      <div>
        Total: {}
      </div>
    </div>
  );
}

export default Cart;
