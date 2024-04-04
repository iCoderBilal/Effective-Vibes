import React from 'react';
import logo from "./assets/effectivevibes logo.png";
import NotesAnimation from './components/NotesAnimation';
import Img1 from "./assets/notes1.webp";
import Img2 from './assets/notes2.webp';
import Img3 from './assets/notes3.webp';

import Img4 from './assets/notes4.webp';
import { NotesAccordion } from './components/NotesAccordion';

const FurtherNotes = () => {
    return (
        <>
            {/* __________________________Header_______________________ */}
            <div className="w-screen">
                <img src={logo} alt="" className="w-[50vw] mx-auto lg:w-[20vw] mt-5" />
            </div>

            {/* -------------------------Hero------------------------- */}
            <div className="hero-section">
                <div className="flex flex-wrap lg:pl-[6vw] lg:pr-[0vw] px-[4vw] mb-16">
                    <div className="hero-text basis-[100%] lg:basis-[50%] mt-16 mb-8">
                        <h2 className="lg:text-[7vw] text-[15vw] leading-[15vw] font-medium lg:leading-[7vw] text-center lg:text-left ">
                            <span className='lg:text-[4vw] lg:leading-[4.5vw] text-[12vw] leading-[13vw]'>Internet Enlightenment </span>Further Notes
                        </h2>
                        <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-center lg:text-left">
                            Unsorted, Raw:
                            <br />
                            <br />
                            People who take the Bible in and believe it, allow it to encompass them and they are effected in a certain way. I want to focus on the EFFECTS of the users under the inlfuencer, and find a modern way to give that influence.
                            <br />
                            <br />
                            There is a spectrum of universality when it comes to concepts and ideas. The top vibes today need to be focused on universality. As connecting glue for the world to unite upon.
                        </p>
                    </div>

                    <div className="hero-animation basis-[100%] lg:basis-[50%] flex justify-center items-center">
                        <div className="overflow-hidden">
                            <NotesAnimation />
                        </div>
                    </div>
                </div>
            </div>

            {/* ______________________________rational-Faith_____________________________________ */}
            <div className='rational-faith'>
                <div className="mx-[6vw] rounded lg:p-16 p-4 bg-[#F5F4F4] mb-16">
                    <h2 className="lg:text-[4vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[4.2vw] text-center uppercase">
                        The Argument For Rational Faith
                    </h2>

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">
                        Faith in faith itself means exactly what it says. It is a belief in the power of the belief itself.
                        <br />
                        <br />
                        With children with bone cancer, with unexpected death and tragedy in the world it is through our faith in a heavenly future that we can find even more spirit to act to vanquish this. We need to recognize sin as everything that is not complete devotion to our highest paths.
                        <br />
                        <br />
                        It is to believe in the perfection and beauty of the world in its current state, to believe in the future beauty, and to understand the necessity of this ream for the fulfillment of the self.
                        <br />
                        <br />
                        Why does religion and belief in a higher decision maker, make people better?
                        <br />
                        <br />
                        ALL OF THE THINGS YOU DO TO PUSH YOURSELF AND OTHERS TO BE BETTER WILL COME WITH MORE REWARDS THAN YOU CAN IMAGINE
                        <br />
                        <br />
                        Faith is a tool, and like any tool it can be used positively or negatively.
                        <br />
                        <br />
                        You cannot connect the dots looking forward, you can only connect them looking back.
                        <br />
                        <br />
                        You cannot decipher the reasons, and if you get caught up looking for the signs you’re going to steer off the road.
                        <br />
                        <br />
                        <b>You have to awaken to the fact we all a part of an organism and to win this game, you love all and spread the faith everyone needs.</b>

                    </p>

                    <h2 className="mt-16 lg:text-[4vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[4.2vw] text-center uppercase">
                        The ultimate vibe
                    </h2>


                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">

                        Treat others how you want to be treated
                        <br />
                        <br />
                        The one step path was something I realized I actually was just being grateful for having in my toolkit. I was grateful I could feel good at any time. I was essentially being grateful that I could feel gratitude.
                        <br />
                        <br />
                        Gratitude can be a necessary component of this, when an individual may feel
                        <br />
                        <br />
                        I am grateful for the fact that I can feel grateful.
                        <br />
                        <br />
                        Ask yourself, what does God need from the world? What is God’s hardest battle with us. Acceptance of his divinity and devotion of ourselves to a higher calling. God is a representation the world needs.
                        <br />
                        <br />
                        When everyone else is running away from difficult problems, it is our job to run towards them. When everyone has their eyes on the next day, we have our eyes on eternity.
                        <br />
                        <br />
                        The Vible is not a religion, it’s a top tier vibe.
                        <br />
                        <br />
                        The Vible states no things that are in conflict with any major religions.
                        <br />
                        <br />
                        The point of the Vible is to provide a rational, universal, and simple framework to kill doubt, and find faith.
                        <br />
                        <br />
                        A method to understand, and find rational faith in your past and future.
                    </p>


                    <div className='flex lg:justify-between justify-center mt-8 flex-wrap lg:flex-nowrap'>
                        <img
                            src={Img1}
                            alt=""
                            className="w-[100%] lg:w-[44%] my-10 mx-auto rounded-lg"
                        />

                        <img
                            src={Img2}
                            alt=""
                            className="w-[100%] lg:w-[44%] my-10 mx-auto rounded-lg"
                        />
                    </div>

                    <h2 className="mt-8 lg:text-[4vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[4.2vw] text-center uppercase">
                        What is irrational faith?
                    </h2>

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-10 text-slate-600 text-left">
                        Irrational faith is someone who has faith that everything will be done for them. These people may not take their child to the doctor when sick because their child is in god’s hands. These people may tell you its good that your brother committed suicide because God has a plan.
                        <br />
                        <br />
                        Imagine a parent who does not let their child use an epipen, as they suffocate to death, because they trust God/Some Higher Being’s plan. This is irrational faith.
                        <br />
                        <br />
                        Faith also has an intoxicating effect. Part of this idea is called the “God Shaped Hole” which is a reason why the inevitability of a higher power will return. One based on truth and natural law will stick into eternity.
                        <br />
                        <br />
                        Also, one that is open minded to having its “holy texts” rewritten can change with the times rather than this current lock-in mechanism of current religions causing them to fail.
                        <br />
                        <br />


                        <a className='underline font-bold italic' href='https://www.reddit.com/r/atheism/comments/11jdf5v/believing_in_god_can_trigger_the_same_reward/?utm_source=share&utm_medium=mweb3x&rdt=36461&onetap_auto=true&one_tap=true'>Believing in God can trigger the same reward regions of the brain as taking drugs</a>
                        <br />
                        <br />
                        Holy text prophecies will become understood in their modern sense.
                        <br />
                        <br />
                        For example, the day the Singularity comes and judgement day being synonymous.
                        <br />
                        <br />
                        When we keep up the good vibes up it gives us a much better pulse at what actually is bad vibes. The way we sustain our good vibes is working to eliminate those bad vibes from manifesting. The prophets of our generation are simply the ones who understand the future and act accordingly. <b>We will allow god (this higher understanding of the way the universe works) to work through us to save this world from its suffering.</b> It will be us, helping us, and it will be an age of love.
                        <br />
                        <br />
                        Work is an act of returning to faith. Faith you’re doing the right thing for the right story to be told. Mindfulness in a non-sloth state is fine. Wait till you have the motivations to continue.
                        <br />
                        <br />
                        As long as you are motivated enough to sit up, you can practice being in the present moment, and the motivation to do greater things will flow.

                    </p>


                    <div className="bg-transparent py-10 px-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h1 className="text-2xl font-semibold mb-4">Vibes, Openness, Unity</h1>
                                <p className="text-gray-700">
                                    In an age where our minds must open further how could we stand with something that stands for looking at your peers and telling them their beliefs are wrong. How could we stand with the sureness that what we believe is pure truth. We must stand with vibes, and open minds. The MESSAGE is the important part.
                                </p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold mb-4">Faith, Hope, Belief</h2>
                                <p className="text-gray-700">
                                    When you have faith in faith itself, what you really obtain is faith in yourself.
                                    <br />
                                    <br />
                                    It can be hard for us to have faith in ourselves, but to enter the sphere of having faith in faith itself, means being one with faith.
                                    <br />
                                    <br />
                                    Have hope in the idea of hope because without hope, you don’t believe.


                                </p>
                            </div>


                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold mb-4">Believe, Hope, Transform</h2>
                                <p className="text-gray-700">
                                    And if you can’t believe you can’t have faith. And if you can’t have faith you can’t act upon it.
                                    <br />
                                    <br />
                                    And that means you lose hope. And if you lose hope you can lose yourself.
                                    <br />
                                    <br />
                                    Have hope and faith for yourself, and you will feel hope and faith in yourself.
                                </p>
                            </div>

                        </div>
                    </div>


                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] text-slate-600 text-left">
                        And when you have hope and faith in yourself, you can start to play in the playground which reality is. You can break down the walls of fear. You can elevate your vibe, and you can enter the tribe.
                        <br />
                        <br />
                        The vibes are inevitable, and the token is a vehicle to measure the vibes, to give them deeper meaning in our lives, to fund the visions of the tribe, and to create beauty, spread hope, and spread hope. To give individuals hope and faith that had been lost. To give the idea of love and support that too many lack. Who lack it simply because they lack the faith in finding and feeling it. And so by bringing their faith forward, bringing their hope forward, we allow them to love themselves. We allow one to see only the positive in their past. To accept their past, to love their past for it has happened for a reason. To find that reason in the present, to love the present and to have hope for the future, and love for their part of it.
                    </p>
                </div>
            </div>

            {/* ____________________________________selfishness_________________________________ */}

            <div className="selfishness rounded p-4 bg-[#111821]">
                <div className='px-[6vw]'>
                    <h2 className="lg:text-[3vw] text-[8vw] leading-[9.6vw] font-medium lg:leading-[3.5vw] text-center mt-16 text-white uppercase">
                        Embracing The Infinite
                    </h2>

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] text-slate-300 text-left mt-4">
                        From selfishness I found love for everything and everyone. First I had to love myself to really understand what love meant for my family, and then for the world
                        <br />
                        <br />
                        Now the vibes are the most condensed format I can think of giving a reader love of the past present and future
                        <br />
                        <br />
                        I believe all world problems stem from lack of love and at the very least  we’d be better off with me. I’d be keen to see how a community operates off of these principles.
                        <br />
                        <br />
                        Great vibes are necessary if reality is created based on our belief system. Is reality not?
                        <br />
                        <br />
                        <b>If we can believe it we can achieve it</b>
                        <br />
                        <br />
                        Imagine a world with supreme faith in an amazing future
                        <br />
                        <br />
                        There’s no risk, only regret of not trying our best to see it through.
                    </p>
                    <img
                        src={Img3}
                        alt=""
                        className="w-[100%] lg:w-[80%] my-10 mx-auto rounded-lg"
                    />

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] text-slate-300 text-left mt-4">
                        <b>To have hope in the face of hopelessness</b>
                        <br />
                        <br />
                        It’s weird because it gives you hope.
                        <br />
                        <br />
                        To have hope in hope itself.
                        <br />
                        <br />
                        Faith, Hope, feelings of being a part of a grander plan.
                        <br />
                        <br />
                        There is a greater being watching over your life to ensure that you pushing yourself turns into bounties and glory.
                        <br />
                        <br />
                        And if theres not its better to think that there is.
                        <br />
                        <br />
                        God, as a vibe.
                        <br />
                        <br />
                        With no more proof than proof of vibes.
                        <br />
                        <br />
                        Each separate religious group can agree on the oneness of the holy vible. In this case the vible must be straight and clear and good and short.
                        <br />
                        <br />
                        Love god = love the universe = love your story = love yourself = love the moment = love your past = derive great meaning from your history

                        <br />
                        <br />
                        <br />
                        <br />

                        <b>Anyone you see who has success that you wish to have first had it in imagination and believed in it.</b>
                        <br />
                        <br />
                        Your dreams and everything you’ve ever wanted are just on the other side of your fears.

                        <br />
                        <br />
                        <br />
                        <br />

                        <b>If we increase the perspective of our world enough, culture will shift.</b>
                        <br />
                        <br />
                        This is a mission we can partake in together.
                        <br />
                        <br />
                        <br />


                        <b>What is the absolute best thing I could rationally believe to be true and why am I not believing in that?</b>
                        <br />
                        <br />
                        I said it myself, we can’t know for certain what’s going on, so why not believe the theory that makes me live the best life.
                        <br />
                        <br />
                        That theory is that Quantam immortality is a thing, that no matter what I cannot die.
                        <br />
                        <br />
                        What is the door to universal love in its most condensed  format?
                        <br />
                        <br />
                        Infinite symbol with faith in the center
                        <br />
                        <br />
                        The door to infinite love
                        <br />
                        <br />
                        God has a plan for you and if he doesn't its more helpful to think that he does.

                    </p>

                    <img
                        src={Img4}
                        alt=""
                        className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
                    />

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] text-slate-300 text-left mt-4">
                        Our goal is not changing peoples faith or beliefs if they have it but focusing on the ATHEISTS and NIHILISTS who lack any faith or belief at all. Just trying to make SOMETHING stick to spread hope, faith, meaning, and purpose onward.
                        <br />
                        <br />
                        Reality is more so coded for perfectly testing MORALITY.

                        And that is where also the ultimate test of meaning is derived from.
                        <br />
                        <br />
                        All you really need is big understanding of a grander purpose greater than oneself and a tribe to move forward towards that grander achievement.
                        You will be eternally grateful that you went monk mode. If one can believe this, they can achieve this.
                        <br />
                        <br />
                        Building the kingdom of Israel when Israel means the difficulty with god

                        What does name Israel mean?

                        God Contended
                        <br />
                        <br />
                        Hebrew. Meaning. <b>'God Contended', 'Wrestles with God', 'Triumphant with God'</b> Other names
                        <br />
                        <br />
                        “Every kingdom divided against itself is brought to desolation; and every city or house divided against itself shall not stand” (Matthew 12:25).
                        <br />
                        <br />
                        The vible’s a picture book.
                        <br />
                        <br />
                        Token holders get to rewrite the vible.
                        <br />
                        <br />
                        Bitcoin is the tablet of stone.
                        <br />
                        <br />
                        You can read it, and you can own it, but you cannot write a holy text on its pages.
                    </p>


                    <NotesAccordion />
                </div>
            </div>
        </>
    )
}

export default FurtherNotes
