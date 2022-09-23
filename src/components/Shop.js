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
      name: 'Sneakers',
      price: '256',
    },
    {
      img: s2,
      name: 'Sneakers',
      price: '728',
    },
    {
      img: s3,
      name: 'Sneakers',
      price: '376',
    },
    {
      img: s4,
      name: 'Sneakers',
      price: '643',
    },
    {
      img: s5,
      name: 'Sneakers',
      price: '234',
    },
    {
      img: s6,
      name: 'Sneakers',
      price: '865',
    },
    {
      img: s7,
      name: 'Sneakers',
      price: '967',
    },
    {
      img: s8,
      name: 'Sneakers',
      price: '120',
    },
    {
      img: s9,
      name: 'Sneakers',
      price: '324',
    },
    {
      img: s10,
      name: 'Sneakers',
      price: '460',
    },
    {
      img: s11,
      name: 'Sneakers',
      price: '521',
    },
    {
      img: s12,
      name: 'Sneakers',
      price: '743',
    },
    {
      img: s13,
      name: 'Sneakers',
      price: '853',
    },
    {
      img: s14,
      name: 'Sneakers',
      price: '634',
    },
    {
      img: s15,
      name: 'Sneakers',
      price: '548',
    },
  ];

  return (
    <div className="grid gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {items.map((item, index) => (
        <div key={index} className="mt-4 bg-slate-700 grid grid-cols-2 grid-rows-4 gap-x-5 w-fit h-[228px] p-6">
          <img
            className="col-start-1 row-start-1 row-span-4 "
            width="180px"
            height="180px"
            src={item.img}
            alt=""
          />
          <div>
            {item.name} #{index + 1}
          </div>
          <div className="text-green-400">IN STOCK</div>
          <div>${item.price}</div>
          <button className="border-2 border-green-500">Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
