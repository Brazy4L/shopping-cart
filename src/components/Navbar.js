import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='grid grid-flow-col p-4 h-8 gap-8 lg:gap-96'>
      <button className='justify-self-end' onClick={() => navigate('/')}>Home</button>
      <button className='justify-self-start' onClick={() => navigate('/shop')}>Shop</button>
    </div>
  );
}

export default Navbar;
