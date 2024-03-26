import './App.css';
import logo from './assets/effectivevibes logo.png'
import HeroAnimation from './components/heroAnimation';


function App() {
  return (
    <>
      {/* __________________________Header_______________________ */}
      <div className='w-screen'>
        <img src={logo} className='w-[50vw] mx-auto lg:w-[20vw] mt-5' />
      </div>

      {/* -------------------------Hero------------------------- */}
      <div className='hero-section'>
        <div className='flex flex-wrap lg:pl-[6vw] lg:pr-[0vw] px-[4vw] mb-16'>
          <div className='hero-text basis-[100%] lg:basis-[50%] mt-16 mb-8'>
            <h2 className='lg:text-[7vw] text-[15vw] leading-[15vw] font-medium lg:leading-[7vw] text-center lg:text-left'>Internet Enlightenment</h2>
            <p className='lg:text-[1.3vw] text-[4.5vw] leading-[5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-center lg:text-left'> “There Is One Thing Stronger Than All The Armies In The World, And That Is An Idea Whose Time Has Come.”– Victor Hugo
              <br />
              <br />

              This page is dedicated to the study of the future global philosophy which will take over the internet making up this era of internet enlightenment.
              <br />
              <br />
              In this page we will look at why faith died, the importance of this era of enlightenment moving forward, what is likely to be the core of the message, and how a new global philosophy is likely going to become a global sensation.</p>
          </div>

          <div className='hero-animation basis-[100%] lg:basis-[50%] flex justify-center items-center'>
            <div className='overflow-hidden'>
              <HeroAnimation className="w-[50%]" />
            </div>

          </div>

        </div>
      </div>
      {/* 
      -------------------------------Trad-Religion------------------------- */}

      <div className='trad'>
        <div className='trad-content mx-[6vw] rounded p-16'>
          <h2 className='lg:text-[5vw] text-[12vw] leading-[12.6vw] font-medium lg:leading-[5vw] text-center'>WHY TRAD RELIGIONS ARE DIEING</h2>
          <p className=''>
            ### WHY TRAD RELIGIONS ARE DIEING

            **Religions act as a Unified theory of god. Past down from familiar structures and protected from the information flow within these groups. Defect rates were rare, vibes were strong. That was, until the internet came along. The contradictions religion to religion became overwhelming. Collective doubt and loss in faith continued.**
          </p>
        </div>
      </div>


    </>
  );
}

export default App;
