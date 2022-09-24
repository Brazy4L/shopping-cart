function Shop(props) {
  return (
    <div className="grid gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {props.shop.map((item, index) => (
        <div
          key={index}
          className="mt-4 bg-zinc-800 grid grid-cols-2 grid-rows-5 gap-x-5 w-fit h-[228px] p-6 rounded"
        >
          <img
            className="col-start-1 row-start-1 row-span-5"
            width="180px"
            height="180px"
            src={item.img}
            alt=""
          />
          <div>{item.name}</div>
          <div className="text-green-400">IN STOCK</div>
          <div>${item.price}</div>
          <div className="flex items-center">
            <label className="flex-grow">Quantity:</label>
            <button
              onClick={() => {
                const array = props.shop.slice();
                props.shop[index].qty += 1;
                props.setShop(array);
              }}
            >
              +1
            </button>
            <input
              className="text-black w-10 h-6"
              type="number"
              value={props.shop[index].qty}
              onChange={(e) => {
                const array = props.shop.slice();
                const num = Number(e.target.value);
                props.shop[index].qty = num;
                props.setShop(array);
              }}
            />
            <button
              onClick={() => {
                if (props.shop[index].qty > 1) {
                  const array = props.shop.slice();
                  props.shop[index].qty -= 1;
                  props.setShop(array);
                }
              }}
            >
              -1
            </button>
          </div>
          <button
            className="border-2 border-green-500"
            onClick={() => {
              const array = props.shop.slice();
              props.shop[index].cart = true;
              props.setShop(array);
            }}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
