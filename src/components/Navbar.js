import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='text-2xl font-bold grid grid-flow-col p-4 h-8 gap-8 lg:gap-96'>
      <button className='justify-self-end hover:underline' onClick={() => navigate('/')}>Home</button>
      <button className='justify-self-start hover:underline' onClick={() => navigate('/shop')}>Shop</button>
      <button className='justify-self-start hover:underline' onClick={() => navigate('/cart')}>Cart</button>
    </div>
  );
}

export default Navbar;
