import { useState, useEffect } from 'react';
import s1 from './images/s1.jpg';
import s2 from './images/s2.jpg';
import s3 from './images/s3.jpg';
import s4 from './images/s4.jpg';
import s5 from './images/s5.jpg';
import s6 from './images/s6.jpg';
import s7 from './images/s7.jpg';
import s8 from './images/s8.jpg';
import s9 from './images/s9.jpg';
import s10 from './images/s10.jpg';
import s11 from './images/s11.jpg';
import s12 from './images/s12.jpg';
import s13 from './images/s13.jpg';
import s14 from './images/s14.jpg';
import s15 from './images/s15.jpg';

function Shop() {
  const items = [
    {
      img: s1,
      name: 'Sneakers #1',
      price: 256,
      qty: 1,
    },
    {
      img: s2,
      name: 'Sneakers #2',
      price: 728,
      qty: 1,
    },
    {
      img: s3,
      name: 'Sneakers #3',
      price: 376,
      qty: 1,
    },
    {
      img: s4,
      name: 'Sneakers #4',
      price: 643,
      qty: 1,
    },
    {
      img: s5,
      name: 'Sneakers #5',
      price: 234,
      qty: 1,
    },
    {
      img: s6,
      name: 'Sneakers #6',
      price: 865,
      qty: 1,
    },
    {
      img: s7,
      name: 'Sneakers #7',
      price: 967,
      qty: 1,
    },
    {
      img: s8,
      name: 'Sneakers #8',
      price: 120,
      qty: 1,
    },
    {
      img: s9,
      name: 'Sneakers #9',
      price: 324,
      qty: 1,
    },
    {
      img: s10,
      name: 'Sneakers #10',
      price: 460,
      qty: 1,
    },
    {
      img: s11,
      name: 'Sneakers #11',
      price: 521,
      qty: 1,
    },
    {
      img: s12,
      name: 'Sneakers #12',
      price: 743,
      qty: 1,
    },
    {
      img: s13,
      name: 'Sneakers #13',
      price: 853,
      qty: 1,
    },
    {
      img: s14,
      name: 'Sneakers #14',
      price: 634,
      qty: 1,
    },
    {
      img: s15,
      name: 'Sneakers #15',
      price: 548,
      qty: 1,
    },
  ];

  const [shop, setShop] = useState([]);

  useEffect(() => {
    setShop(items);
  // eslint-disable-next-line
  }, []);

  return (
    <div className="grid gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {shop.map((item, index) => (
        <div
          key={index}
          className="mt-4 bg-slate-700 grid grid-cols-2 grid-rows-5 gap-x-5 w-fit h-[228px] p-6 rounded"
        >
          <img
            className="col-start-1 row-start-1 row-span-5 "
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
                const array = shop.slice();
                shop[index].qty += 1;
                setShop(array);
              }}
            >
              +1
            </button>
            <input
              className="text-black w-10 h-6"
              type="number"
              value={shop[index].qty}
              onChange={(e) => {
                const array = shop.slice();
                const num = Number(e.target.value);
                shop[index].qty = num;
                setShop(array);
              }}
            />
            <button
              onClick={() => {
                if (shop[index].qty > 1) {
                  const array = shop.slice();
                  shop[index].qty -= 1;
                  setShop(array);
                }
              }}
            >
              -1
            </button>
          </div>
          <button className="border-2 border-green-500">Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
