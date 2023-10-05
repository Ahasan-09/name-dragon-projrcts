import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='  text-center'>
           <img className=' p-3 mx-auto' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p className=' text-2xl'> {moment().format("dddd, MMMM 1, YYYY")}  </p>
        </div>
    );
};

export default Header;