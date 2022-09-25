import { useNavigate } from 'react-router-dom';
import Items from './Items';

function Home() {
  const navigate = useNavigate();
  const items = Items;

  return (
    <div className="text-9xl grid place-items-center">
      <img
        className="absolute top-28 left-32 -rotate-12 hover:scale-110 ease-out duration-300"
        src={items[0].img}
        width="300px"
        height="300px"
        alt=""
      />
      <img
        className="absolute top-32 right-32 rotate-12 hover:scale-110 ease-out duration-300"
        src={items[1].img}
        width="300px"
        height="300px"
        alt=""
      />
      <img
        className="absolute bottom-12 right-32 -rotate-12 hover:scale-110 ease-out duration-300"
        src={items[2].img}
        width="300px"
        height="300px"
        alt=""
      />
      <img
        className="absolute bottom-12 left-32 rotate-12 hover:scale-110 ease-out duration-300"
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
