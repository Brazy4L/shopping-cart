import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();
  const [itemsLength] = useState(
    props.shop.filter((i) => i.cart === true).length
  );

  return (
    <div className="text-2xl font-bold grid grid-flow-col p-4 h-8 gap-8 lg:gap-96 sticky">
      <button className="justify-self-end" onClick={() => navigate('/')}>
        <span class="link link-underline link-underline-black">Home</span>
      </button>
      <button className="justify-self-center" onClick={() => navigate('/shop')}>
        <span class="link link-underline link-underline-black">Shop</span>
      </button>
      <button className="justify-self-start" onClick={() => navigate('/cart')}>
        <span class="link link-underline link-underline-black">
          Cart({itemsLength})
        </span>
      </button>
    </div>
  );
}

export default Navbar;
