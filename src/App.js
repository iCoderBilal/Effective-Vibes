import "./App.css";
import logo from "./assets/effectivevibes logo.png";
import HeroAnimation from "./components/heroAnimation";
import tadeReligion from "./assets/trad-religion.jpg";
import InfiniteScrollCom from "./components/InfiniteScroll";
import Img1 from "./assets/img-1.jpeg";
import SpiritualAnimation from "./components/SpirtualAnimation";
import Img2 from "./assets/img02.jpeg";
import Img3 from "./assets/img3.jpeg";
import Img4 from "./assets/img4.jpeg";
import Img5 from "./assets/img5.png";
import Img6 from "./assets/img6.png";
import Img7 from "./assets/img7.jpg";
import { DefaultAccordion } from "./components/Accordion";
import { Accordion } from "@material-tailwind/react";

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
          <h2 className="lg:text-[4vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[4.2vw] text-center">
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
            <a
              href="https://persistventure.notion.site/It-Is-Impossible-To-Follow-The-Bible-3d431ff280af4af9bb8969742e0242cc"
              className="text-slate-800 font-bold underline"
            >
              ⭕ It Is Impossible To Follow The Bible{" "}
            </a>
            <br />
            <br />
            <a
              href="https://www.technologyreview.com/2014/04/04/13684/how-the-internet-is-taking-away-americas-religion/amp/"
              className="text-slate-800 font-bold underline"
            >
              ⭕ How the Internet Is Taking Away America’s Religion{" "}
            </a>
            <br />
            <br />
            The world came alive, connecting all religions but the story of
            faith was not compatible region to region. This new global region
            thus has continued to diminish the amount of faith in these myths
            held globally.
          </p>

          <div className="flex flex-wrap lg:flex-nowrap justify-between mt-16">
            <div className="hero-animation basis-[100%] lg:basis-[45%] flex justify-center items-center">
              <div className="overflow-hidden w-[100%]">
                <img src={tadeReligion} className="rounded w-[100%]" />
              </div>
            </div>

            <div className="hero-text basis-[100%] lg:basis-[50%] mt-8 mb-8 flex items-center">
              <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5vw] lg:leading-[1.6vw] mt-2 text-slate-600 text-left">
                Children especially are growing up as the least religious
                generation in recorded history.
                <br />
                People have became lost.
                <br />
                Traditions and values have faltered.
                <br />
                This cycle has happened before. We are in the religious winter,
                and it is up to us to bring the heat back.
                <br />
                <br />
                A universal filling to the god shaped hole is inevitable to take
                force on the internet.
                <br />
                Every connected society in history has developed a relationship
                with some higher myth / power. Given our age of science, it will
                be faith in god made out of logic.
                <br />
                A god that is the universe itself. A god that is atheist proof,
                and pragmatic.
                <br />
                <br />
                The internet has took our culture from locality to a global
                ecosystem.
              </p>
            </div>
          </div>

          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">
            Previously the memetic fitness of religious texts that had strong
            control and claim of other texts not being the way or the truth or
            the wrong light, was positive. But now that we have globalized it
            holds back the memetic fitness. The philosophy of the future will be
            one of universal love. The memetic fitness of true good vibes and
            love is increasing as we learn more of the dangers of lacking it and
            the capabilities of humankind to create stronger and stronger
            extraction mechanisms for those who cannot defend against it.
          </p>
        </div>
      </div>
      {/* _________________________________________________Scrolling_Images_______________________________________ */}

      <InfiniteScrollCom />

      {/* ___________________________________________WHAT RELIGION OFFERS US__________________________________________ */}
      <div className="trad mb-16">
        <div className="trad-content mx-[6vw] rounded lg:p-16 p-4">
          <h2 className="lg:text-[4vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[4.2vw] text-center">
            WHAT RELIGION OFFERS US
          </h2>
          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">
            Every Religion/God/Holy Text offers (faith/gratitude/a sense of
            belonging) to the (believer/follower/reader) under the guise of
            different stories.
            <br />
            <br />
            The problem has been that rather than basing these reasons on
            natural laws of the universe, they have been bound to stories that
            claim that their specific story is the final word of God. While
            recognizably, this was helpful to keep your civilization together
            before the internet came along, now it acts a weakness to the
            religions in the internet era. Any follower must either half believe
            in the story, or they risk condemning others to a lower class (or
            even to hell) just because the STORIES are not the same.
            <br />
            <br />
            This era of internet enlightenment will see a story spread that
            aligns people towards belief in a higher power, gratitude, faith, or
            all of the above for its pragmatic purpose. This is the study of a
            positive myth for the sake of it being positive, and not any man
            claiming to be in direct contact with god, besides through the
            interpretation of the universe itself representing god (being all
            things) and the person having derived this thought while existing in
            the universe or using one of the spiritual states. It seems however
            that the users of these spiritual drugs have no problem becoming
            “enlightened” or full of love, faith, and belief. But instead, the
            many beings of “light” find the most difficult path in spreading
            that light onwards in a way that builds a worldwide movement. This
            is the ultimate quest of any person seeking to align others and
            metaphorically “love pill” the world.
          </p>

          <h2 className="lg:text-[4vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[4.2vw] text-center mt-16">
            THE IMPORTANCE OF BRINGING BACK FAITH IN SOMETHING GREATER
          </h2>
          <img
            src={Img1}
            className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
          />
          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">
            I’m fascinated by existing religions because I’m amazed that they
            have people that really believe in the material. I mean LOADS of
            people. I think about religion as a “Layer 1” for identity. It is
            the highest cornerstone on which one builds your view of the world.
          </p>
        </div>
      </div>
      {/* 
      _______________________________________Conservation______________________________________ */}

      <div className="conservation pt-16  px-[6vw]">
        <h2 className="lg:text-[3vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[3.2vw] text-center text-white uppercase">
          A conversation that may or may not have happened:
        </h2>

        <div className="conservation-points lg:px-[20vw] pt-14">
          <p className="mt-4 flex pb-10">
            <span className="basis-[30%] text-slate-600 uppercase lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw]">
              Person 1:
            </span>{" "}
            <span className="basis-[69%] text-white hover-text lg:text-[1.5vw] text-[4.5vw] leading-[5.5vw] lg:leading-[2vw]">
              What religion operating system are you running on there (pointing
              to someones brain)?
            </span>
          </p>

          <p className="mt-10 flex justify-between pb-10">
            <span className="basis-[30%] text-slate-600 uppercase lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw]">
              Person 2:{" "}
            </span>{" "}
            <span className="basis-[69%] text-white hover-text lg:text-[1.5vw] text-[4.5vw] leading-[5.5vw] lg:leading-[2vw] text-left">
              Judeo-Christian Build
            </span>
          </p>

          <p className="mt-10 flex justify-between pb-10">
            <span className="basis-[30%] text-slate-600 uppercase lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw]">
              Person 1:{" "}
            </span>{" "}
            <span className="basis-[69%] text-white hover-text lg:text-[1.5vw] text-[4.5vw] leading-[5.5vw] lg:leading-[2vw] text-left">
              Oh wow ancient build.
            </span>
          </p>

          <p className="mt-10 flex justify-between pb-10">
            <span className="basis-[30%] text-slate-600 uppercase lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw]">
              Person 2:{" "}
            </span>{" "}
            <span className="basis-[69%] text-white hover-text lg:text-[1.5vw] text-[4.5vw] leading-[5.5vw] lg:leading-[2vw] text-left">
              You still arnt on an open-minded build?
            </span>
          </p>

          <p className="mt-10 flex justify-between pb-10">
            <span className="basis-[30%] text-slate-600 uppercase lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw]">
              Person 1:{" "}
            </span>{" "}
            <span className="basis-[69%] text-white hover-text lg:text-[1.5vw] text-[4.5vw] leading-[5.5vw] lg:leading-[2vw] text-left">
              I just like it for the aesthetic
            </span>
          </p>
        </div>

        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-16 text-slate-300 text-left">
          I think the idea that{" "}
          <b>
            religion and philosophy make up our core operating system as beings
            on this planet needs to be more understood.
          </b>
          <br />
          <br />
          What we care about drives reality and manifests it. Reality is a
          generative machine based on collective belief systems limited by a
          physics engine. Memes with positive dreams help steer the future in
          the right direction. The sooner we collectively believe certain
          futures will come the sooner they will.
        </p>
        <div className="flex justify-center">
          <SpiritualAnimation />
        </div>
      </div>

      {/* _____________________AntiCurrent___________________ */}
      <div className="trad my-16">
        <div className="trad-content mx-[6vw] rounded lg:p-16 p-4">
          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw]  text-slate-600 text-left">
            We need an anti current thing culture en masse. <br />A spread of a
            positive ethos can stand for this which focuses on what we can
            actually change rather than discussing every bad event.
          </p>

          <img
            src={Img2}
            className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
          />
          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">
            On top of that, recent science is displaying the potential for our
            thoughts to influence the physical reality that we are a part of.
            The idea that if you see this as God’s creation it has a better
            chance to become it may go beyond improving personal belief.
          </p>

          <DefaultAccordion />

          <h2 className="lg:text-[3vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[3.5vw] text-center mt-8">
            WHAT THE CORE MESSAGE OF INTERNET ENLIGHTENMENT LOOKS LIKE
          </h2>

          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">
            The longest lasting Religion will be a set of beliefs universally
            accepted as necessary zealotry.
          </p>
          <img
            src={Img3}
            className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
          />

          <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">
            Pragmatic Positivity is an undeniable push towards happiness within
            the self.
            <br />
            <br />
            To quote a holy text that with a great truth:
            <br />
            <br />
            “Everyone then who hears these words of mine and does them will be
            like a wise man who built his house on the rock.” Matthew 7:24
            <br />
            <br />
            This rock when it comes to religion, is an atheist proof pragmatic
            push towards the highest self imaginable.
            <br />
            <br />
            It must give the (believer/follower/reader) faith, gratitude, and a
            sense of belonging.
            <br />
            <br />
            This sense of belonging is one of the reasons people tend to
            coalesce around certain dogmas / ideas. In terms of enacting faith
            and gratitude in an individuals, new myths/holy texts must be
            crafted to bring this out.
            <br />
            <br />
            Faith and Gratitude are our foundation for living a life full of
            love.
            <br />
            <br />
            When one is in full faith in themselves, the only fear they have is
            of not taking action and this connection of high reward from action,
            and high risk of inaction turns into action itself. A good mechanism
            to pull this faith in yourself out, without risking going into the
            irrational faith category is to say
            <br />
            <br />
            “Everything I cannot control happened for a good reason, and if it
            did not it is better to think that it did.”
            <br />
            <br />
            All reasons for faith are subjective to questioning besides faith
            itself being the grounds for faith. When you have faith simply in
            the idea of having faith, nothing can stop it.
          </p>
        </div>
      </div>
      {/* 
      ____________________________________Without Work___________________________ */}
      <div className="without-work my-16 px-[6vw]">
        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">
          Without works, what is faith? It's dead.
          <br />
          <br />
          <b>
            "Do you want to be shown, you foolish person, that faith apart from
            works is useless? Was not Abraham our father justified by works when
            he offered up his son Isaac on the altar? You see that faith was
            active along with his works, and faith was completed by his works;
            and the Scripture was fulfilled that says, “Abraham believed God,
            and it was counted to him as righteousness”—and he was called a
            friend of God. You see that a person is justified by works and not
            by faith alone." - James 2:20-24
          </b>
          <br />
          <br />
          How do you build the best one commandment?
          <br />
          Optimize the memetic fitness.
        </p>
      </div>

      {/* __________________________How it will be Spread__________________________________ */}
      <div className="how-spread py-16 px-[6vw]">
        <h2 className="lg:text-[3vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[3.5vw] text-center mt-8 text-white">
          HOW IT WILL SPREAD
        </h2>
        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-300 text-left">
          Internet enlightenment means fast paced spread of a condensed set of
          powerful vibes. Starting a new meme is often random and difficult.
          Memes a condensed format of programming that helps humanity spread and
          identify with concept/ideas. One industry that took on the power of
          the meme market by storm is cryptocurrency. If we get down to what the
          core of it, currency is a representation of faith completely based on
          your thoughts of other peoples faith in that thing.
        </p>

        <img
          src={Img4}
          className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
        />

        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-300 text-left">
          For as big as doge got a meme itself, dogecoin became a prominent
          force of push from people on the internet. Money is one of the realest
          ways to show faith in something. Here is a representation showing how
          DOGECOIN became a far more popular search term then DOGE, and how this
          internet meme complete outweighed searches for the supposedly most
          important holy texts in the world.
        </p>

        <img
          src={Img5}
          className="w-[100%] lg:w-[80%] my-10 mx-auto rounded-lg"
        />

        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-300 text-left">
          So if Dogecoin was so big just based on attention from it being a
          meme, what made Bitcoin rise to fame? Bitcoin was an asset based on
          faith of a decentralized system becoming more important where central
          banks had failed. That is the core reason why Bitcoin was created.
          Obviously once it becomes a trading asset, many people come in purely
          on the speculative component. Without a strong “movement” or vision
          behind what Bitcoin represents besides this powerful technology
          pushing against corruption of the central banks in the monetary
          system, in this case we bring it up because it represents a powerful
          technology, and powerful capability for a movement to scale.
        </p>
        <br />
        <br />
        <a
          href="https://www.salon.com/2022/02/12/why-are-people-calling-bitcoin-areligion_partner/"
          className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-100 text-center font-bold underline"
        >
          Why are people calling Bitcoin a religion?
        </a>
        <br />
        <br />
        <a
          href="https://www.cnbc.com/2021/11/03/crypto-is-a-religion-not-an-investment-investor-mark-mobius-says.html"
          className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-100 text-center font-bold underline "
        >
          Crypto is a religion not an investment, global investor Mark Mobius
          says
        </a>
        <br />
        <br />
        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-300 text-left">
          If bitcoins a religion and Dogecoin is a meme, the next largest
          cryptocurrency will be more religious and more of a meme.
        </p>


        <img
          src={Img6}
          className="w-[100%] lg:w-[80%] my-10 mx-auto rounded-lg"
        />


        <a
          href="https://trends.google.com/trends/explore?date=all&q=doge,dogecoin,holy%20bible,Bhagavad%20Gita,veda"
          className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-100 text-center font-bold underline "
        >
          View Google Trend

        </a>
      </div>

      {/* ________________________________________Conclusion____________________________________ */}
      <div className="conclusion pt-16 pb-8 px-[6vw]">

        <h2 className="lg:text-[3vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[3.5vw] text-center mt-8 text-black uppercase">
          In Conclusion
        </h2>

        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">In Short: <b>We believe the next world religion will be memetic and carry these characteristics:</b></p>

        <img
          src={Img7}
          className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
        />

        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 text-left">
          Be universally agreeable<br />
          Offer financial incentives towards its spread (web3 enabled)<br />
          Give followers major conviction it’s growth will make the world a better place<br />
          Have a push towards a Decentralized form of authority<br />
          <br />
          Have a deep chance for positive impact to someone who associates with it.
          <br />
          <br />
          Leaving us with the belief that through the mechanism of memeing faith as a cryptocurrency the reprogramming of god will occur on a global scale. Memes of faith have an edge because they are memes of good vibes that people want to share and want to believe in. They are the fundamental component of what all religions give people.
          A meme with a dream is a meme with a powerful therapeutic message that connects with people and wins the world over towards faith.
          <br />
          <br />
          If you have a powerful message, and want to spread the new global philosophy or just want to use memes and media to spread the vibes.
          <br />
          <br />
          We are here to support you.
          <br />
          <br />
          Contact: KarmaFarmers@Dia.Wiki
          <br />
          <br />
          With Love,
          <br />
          <a href="https://dia.wiki/" className="underline font-bold">Decentralized Intelligence Agency
          </a>
        </p>
        <div className="my-8 flex justify-center">

          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2">Internet Enlightenment Further Notes</button>
        </div>

      </div >


    </>
  );
}

export default App;
