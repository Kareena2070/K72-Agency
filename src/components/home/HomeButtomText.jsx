import { Link } from 'react-router-dom';


function HomeButtomText(){


    return(
           <div className='font-[font2] flex items-center justify-center gap-2 text-white '>
      <p className='absolute lg:w-[20vw] w-64 lg:right-10 right-1 bottom-18  lg:bottom-52 font-[font2] lg:text-[1vw]  lg:leading-[1vw] '>
      K72 is an agency that builds <br /> brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 flex items-center px-2 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[7vw] lg:mt-4' to='/projects'>work</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-30 flex items-center px-2 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[7vw] lg:mt-4' to='/agency'>agency</Link>
      </div>
    </div>

    );
}

export default HomeButtomText;