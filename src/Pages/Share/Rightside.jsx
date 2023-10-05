import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
 import swimg from '../../assets/qZone1.png'
 import swimg1 from '../../assets/qZone2.png'
 import swimg2 from '../../assets/qZone3.png'

const Rightside = () => {
    return (
        <div>
         <div className='border' >
         <p className="p-4 text-xl font-semibold "> Log With</p>
          <div className=' p-4'>
            
            <button className="btn btn-outline w-full"> 
            <FaGoogle></FaGoogle>
            Google </button>
          </div>
          
          <div className=' p-4'>
            <button className="btn btn-outline w-full"> 
            <FaGoogle></FaGoogle>
            GitHub </button>
          </div>
         </div>
          
        <div className='border'>
             <div>
         <p className="p-4 text-xl font-semibold "> Find Us On</p>
          <div className=' rounded-t-lg flex m-3 space-x-3 border p-4 '>
            <a  href=""> <FaFacebook></FaFacebook> </a>
           <span>Facebook</span> 
          </div>
          <div className='rounded-t-lg flex m-3 space-x-3 border p-4 '>
            <a  href=""> <FaTwitter></FaTwitter> </a>
           <span>Twitter</span> 
          </div>
          <div className='rounded-t-lg flex m-3 space-x-3 border p-4 '>
            <a  href=""> <FaInstagram></FaInstagram> </a>
           <span>Twitter</span> 
          </div>
          
         
         </div>
</div>

        <div className='border'>
        <div>
         <p className="p-4 text-xl font-semibold "> Q-Zone</p>
          <div className=' p-4'>
            
          <img src={ swimg} alt="" />
          </div>
          <div className=' p-4'>
            
          <img src={ swimg1} alt="" />
          </div>
          <div className=' p-4'>
            
          <img src={ swimg2} alt="" />
          </div>


          
         
         </div>
          
        </div>



        </div>
    );
};

export default Rightside;