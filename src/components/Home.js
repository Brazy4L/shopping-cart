import { useNavigate } from 'react-router-dom';
import Items from './Items';

function Home() {
  const navigate = useNavigate();
  const items = Items;

  return (
    <div className="text-6xl lg:text-9xl grid place-items-center ease-out duration-300 h-[calc(100vh_-_6rem)]">
      <img
        className="absolute w-[150px] h-[150px] top-[14rem] left-[3rem] lg:w-[300px] lg:h-[300px] lg:top-28 lg:left-32 -rotate-12 hover:scale-110 ease-out duration-300"
        src={items[0].img}
        width="300px"
        height="300px"
        alt=""
      />
      <img
        className="absolute w-[150px] h-[150px] top-[14rem] right-[2rem] lg:w-[300px] lg:h-[300px] lg:top-32 lg:right-32 rotate-12 hover:scale-110 ease-out duration-300"
        src={items[1].img}
        width="300px"
        height="300px"
        alt=""
      />
      <img
        className="absolute w-[150px] h-[150px] bottom-[14rem] right-[13rem] lg:w-[300px] lg:h-[300px] lg:bottom-12 lg:right-32 -rotate-12 hover:scale-110 ease-out duration-300"
        src={items[2].img}
        width="300px"
        height="300px"
        alt=""
      />
      <img
        className="absolute w-[150px] h-[150px] bottom-[14rem] left-[13rem] lg:w-[300px] lg:h-[300px] lg:bottom-12 lg:left-32 rotate-12 hover:scale-110 ease-out duration-300"
        src={items[7].img}
        width="300px"
        height="300px"
        alt=""
      />
      <div>GET</div>
      <div>SNEAKERS</div>
      <div
        className="underline cursor-pointer hover:scale-110 ease-out duration-300"
        onClick={() => navigate('/shop')}
      >
        HERE
      </div>
    </div>
  );
}

export default Home;
