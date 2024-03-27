import "./App.css";
import logo from "./assets/effectivevibes logo.png";
import HeroAnimation from "./components/heroAnimation";
import tadeReligion from "./assets/trad-religion.jpg";
import InfiniteScrollCom from "./components/InfiniteScroll";

function App() {
  return (
    <>


      {/* __________________________Header_______________________ */}
      <div className="w-screen">
        <img src={logo} className="w-[50vw] mx-auto lg:w-[20vw] mt-5" />
      </div>

      {/* -------------------------Hero------------------------- */}
      <div className="hero-section">
        <div className="flex flex-wrap lg:pl-[6vw] lg:pr-[0vw] px-[4vw] mb-16">
          <div className="hero-text basis-[100%] lg:basis-[50%] mt-16 mb-8">
            <h2 className="lg:text-[7vw] text-[15vw] leading-[15vw] font-medium lg:leading-[7vw] text-center lg:text-left ">
              Internet Enlightenment
            </h2>
            <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-center lg:text-left">
              {" "}
              “There Is One Thing Stronger Than All The Armies In The World, And
              That Is An Idea Whose Time Has Come.”– Victor Hugo
              <br />
              <br />
              This page is dedicated to the study of the future global
              philosophy which will take over the internet making up this era of
              internet enlightenment.
              <br />
              <br />
              In this page we will look at why faith died, the importance of
              this era of enlightenment moving forward, what is likely to be the
              core of the message, and how a new global philosophy is likely
              going to become a global sensation.
            </p>
          </div>

          <div className="hero-animation basis-[100%] lg:basis-[50%] flex justify-center items-center">
            <div className="overflow-hidden">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </div>
      {/* 
      -------------------------------Trad-Religion------------------------- */}

      <div className="trad">
        <div className="trad-content mx-[6vw] rounded lg:p-16 p-4">
          <h2 className="lg:text-[4vw] text-[12vw] leading-[12.6vw] font-medium lg:leading-[4.2vw] text-center">
            WHY TRAD RELIGIONS ARE DIEING
          </h2>
          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">
            Religions act as a Unified theory of god. Past down from familiar
            structures and protected from the information flow within these
            groups. Defect rates were rare, vibes were strong. That was, until
            the internet came along. The contradictions religion to religion
            became overwhelming. Collective doubt and loss in faith continued.
            <br />
            <br />
            <a href="https://persistventure.notion.site/It-Is-Impossible-To-Follow-The-Bible-3d431ff280af4af9bb8969742e0242cc"
              className="text-slate-800 font-bold underline"
            >⭕ It Is Impossible To Follow The Bible </a>
            <br />
            <br />
            <a href="https://www.technologyreview.com/2014/04/04/13684/how-the-internet-is-taking-away-americas-religion/amp/"
              className="text-slate-800 font-bold underline"
            >⭕ How the Internet Is Taking Away America’s Religion </a>
            <br />
            <br />
            The world came alive, connecting all religions but the story of faith was not compatible region to region. This new global region thus has continued to diminish the amount of faith in these myths held globally.
          </p>

          <div className="flex flex-wrap lg:flex-nowrap justify-between mt-16">

            <div className="hero-animation basis-[100%] lg:basis-[45%] flex justify-center items-center">
              <div className="overflow-hidden w-[100%]">
                <img src={tadeReligion} className="rounded w-[100%]" />
              </div>
            </div>

            <div className="hero-text basis-[100%] lg:basis-[50%] mt-8 mb-8 flex items-center">

              <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5vw] lg:leading-[1.6vw] mt-2 text-slate-600 text-left">
                Children especially are growing up as the least religious generation in recorded history.
                <br />

                People have became lost.<br />
                Traditions and values have faltered.<br />
                This cycle has happened before. We are in the religious winter, and it is up to us to bring the heat back.<br />
                <br />


                A universal filling to the god shaped hole is inevitable to take force on the internet.
                <br />

                Every connected society in history has developed a relationship with some higher myth / power.

                Given our age of science, it will be faith in god made out of logic.
                <br />

                A god that is the universe itself. A god that is atheist proof, and pragmatic.<br />
                <br />
                The internet has took our culture from locality to a global ecosystem.
              </p>
            </div>


          </div>

          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">
            Previously the memetic fitness of religious texts that had strong control and claim of other texts not being the way or the truth or the wrong light, was positive. But now that we have globalized it holds back the memetic fitness. The philosophy of the future will be one of universal love. The memetic fitness of true good vibes and love is increasing as we learn more of the dangers of lacking it and the capabilities of humankind to create stronger and stronger extraction mechanisms for those who cannot defend against it.
          </p>

        </div>

      </div>

      <InfiniteScrollCom />
    </>
  );
}

export default App;
