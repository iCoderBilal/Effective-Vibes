import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import Img8 from "../assets/img8.webp";
import Img9 from "../assets/img9.jpeg";

export function DefaultAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    <h2 className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600 font-bold">
                        ▶ Waking Up | Daniel Pinchbeck
                    </h2>{" "}
                </AccordionHeader>
                <AccordionBody className="mb-24">
                    <img
                        src={Img8}
                        alt=""
                        className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
                    />

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600">
                        I suspect the explosion in AI-generated art and text is somehow part
                        of this inevitable transition to a quantum worldview. It gives us
                        the capacity, through an increasingly mercurial and plastic medium,
                        to explore an infinite series of alternative realities, something
                        like the “Many Worlds” interpretation of quantum theory. I like the
                        term “synthography” to describe this emergent art form, which does
                        tend toward the creepy and uncanny.
                        <br />
                        <br />
                        The [2022 Nobel Prize in
                        physics](https://www.scientificamerican.com/article/the-universe-is-not-locally-real-and-the-physics-nobel-prize-winners-proved-it/)
                        went to Alain Aspect, John F. Clauser and Anton Zeilinger for their
                        investigation of quantum entanglement: Once linked, two subatomic
                        particles maintain a relationship over vast distances. When we make
                        an observation of one particle changing its spin or direction, the
                        other does as well — simultaneously, across vast distances, entirely
                        ignoring the speed of light. Collectively, their work proves there
                        are no “hidden variables” that could account for what Einstein
                        called “spooky action at a distance.”
                        <br />
                        <br />
                        These now definitive inquiries demonstrate that the universe is not
                        locally real. This means that objects only take a definitive,
                        measurable form in the presence of an observer. The universe
                        performs eerily like a video game where the only objects actually
                        rendered are the ones that we directly encounter. This is no longer
                        a mere theory, but completely proven.
                        <br />
                        <br />
                        We would be in our rights to consider this discovery to be
                        earth-shattering, mind-blowing, and paradigm-smashing. It might be
                        sufficient cause for worldwide parades, mass celebrations, and new
                        religious expressions (the science supports many ideas found in
                        Eastern traditions, including Hinduism and Buddhism). As enough of
                        us understand and integrate this still-new knowledge, it will, I
                        strongly suspect, transform our world in profound and fundamental
                        ways. It already is transforming us, I believe, even as we try to
                        catch up to it.
                        <br />
                        <br />
                        In
                        <a
                            href="https://www.amazon.com/Quantum-Revelation-Radical-Synthesis-Spirituality/dp/1590794486"
                            className="underline"
                        >
                            Quantum Revelation: A Radical Synthesis of Science and
                            Spirituality
                        </a>
                        (SelectBooks, 2018), Paul Levy explores the explosive nature of
                        quantum theory, for psychology and for humanity’s future. The word
                        “revelation” is apt. I explored these ideas many years ago,
                        in **2012: The Return of Quetzalcoatl** and other books. But Levy
                        does a great job of keeping his focus on the essential point: What
                        does quantum theory mean for us — for our future lives, both
                        individually and collectively?
                        <br />
                        <br />
                        He writes:
                        <br />
                        Quantum physics is a flag bearer of an epochal paradigm shift
                        currently taking place within human consciousness, deep within the
                        collective unconscious, concerning the nature of reality itself. The
                        discoveries of quantum physics are directly pointing to the hitherto
                        unsuspected powers of the mind to cast reality in its image rather
                        than the other way around. Quantum theory provides insight into how
                        conscious entities, such as ourselves, can alter the course of the
                        physically described aspects of reality through the decisions they
                        make. The new physics is the beginning of the realization that the
                        human psyche can intervene creatively in the physical and chemical
                        processes of nature.
                        <br />
                        <br />
                        In future newsletters, I will explore a few of the wonderful ideas
                        in Levy’s book that have a great bearing on our future. But first, I
                        want to explore one issue he brings up a number of times. Many of
                        the great Twentieth Century physicists who contributed tso quantum
                        theory — people like John Archibald Wheeler, David Bohm, Arthur
                        Eddingtion, and Niels Bohr — reached a deep level of philosophical
                        and spiritual insight. They understood that their discoveries
                        revealed consciousness, not matter, as the underlying foundation –
                        that the world was more like a “great thought” or an idea or a
                        mental construct than a projection of random physical stuff. AI
                        contemplates the wonder of it all.
                        <br />
                        <br />
                        AI contemplates the wonder of it all.
                    </p>

                    <img
                        src={Img9}
                        alt=""
                        className="w-[100%] lg:w-[50%] my-10 mx-auto rounded-lg"
                    />

                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-600">
                        We often find a gulf between those at the inception point of a new
                        idea or new artistic style and those who glom onto it later. The
                        initiators are forced to fully confront the new language, the new
                        possibility. This direct, ontological confrontation changes them
                        forever. The Quantum Revelation provides many quotes that
                        demonstrate this:
                        <br />
                        <br />
                        <i>
                            “Consciousness cannot be accounted for in physical terms. For
                            consciousness is absolutely fundamental. It cannot be accounted
                            for in terms of anything else.”
                        </i>
                        <br />
                        <i>-- Erwin Schrödinger</i>
                        <br />
                        <br />
                        <i>
                            “I regard consciousness as fundamental. I regard matter as
                            derivative from consciousness. We cannot get behind consciousness.
                            Everything that we talk about, everything that we regard as
                            existing, postulates consciousness.”
                        </i>
                        <br />
                        <i>-- Max Planck</i>
                        <br />
                        <br />
                        <i>
                            “We go down and down from crystal to molecule, from molecule to
                            atom, from atom to nucleus, from nucleus to particle, and there’s
                            still something beyond both geometry and particle. In the end we
                            have to come back to mind.”
                        </i>
                        <br />
                        <i>-- John Wheeler</i>
                        <br />
                        <br />
                        <i>
                            “The human endeavor to access the deep, fundamental structure of
                            nature, the very heart of matter, has resulted not in finding
                            anything material, but rather has led to the subjective and
                            immaterial realm of ideas.”
                        </i>
                        <br />
                        <i>-- Werner Heisenberg</i>
                        <br />
                        <br />
                        <i>
                            ”The stuff of the world is mind stuff….. consciousness is not
                            sharply defined, but fades into subconsciousness, and beyond that
                            we must postulate something indefinite but yet continuous with our
                            mental nature … it is difficult for the matter of fact physicist
                            to accept the view that the substratum of everything is of mental
                            character.”
                        </i>
                        <br />
                        <i>-- Arthur Eddington</i>
                        <br />
                        <br />
                        Among the current generation of physicists who write popular books,
                        many have toggled back to a perspective that aligns better with
                        reductive materialism, denying a foundational primacy to
                        consciousness. In many cases, this involves rhetorical shifts and
                        changes in emphasis.
                        <br />
                        <br />
                        Sabine Hossfelder, for example, in <b>Existential Physics</b>
                        counters the idea that consciousness causes the wave to “collapse”
                        into a definitive particle. Instead, she calls this, the “update of
                        the wave function.” She proposes that, instead of consciousness
                        causing this update, “ it is the other way round: that the update of
                        the wave function would play a role in conscious awareness.” She
                        admits this is “highly speculative and no evidence speaks for it,”
                        but it is “compatible with what we know.”
                        <br />
                        <br />
                        In The Big Picture, Sean Carrol writes
                        <br />
                        <br />
                        “If there is any one aspect of reality that causes people to doubt a
                        purely physical and naturalist conception of the world, it’s the
                        existence of consciousness. And it can be hard to persuade the
                        skeptics, since even the most optimistic neuroscientist doesn’t
                        claim to have a complete and comprehensive theory of consciousness…
                        The idea of a unified physical world has been enormously successful
                        in many contexts, and there is every reason to think that it will be
                        able to account for consciousness as well.” Here, Carrol ignores
                        scientists’ ongoing failure to solve the “hard problem” of
                        consciousness, while rejecting the philosophically grounded
                        understanding that many of the great physicists of the last century
                        established and substantiated.
                        <br />
                        <br />
                        Levy explores different reasons for this. Science is still mainly
                        utilized instrumentally, as a tool to increase the power and control
                        of military and corporate interests. The reductive materialist
                        framing is a much better fit for a physics that maximizes its
                        technical utility (for quantum computing and the like).
                        <br />
                        <br />
                        Physicists like Carrol and Hossfelder are trapped in a limited
                        mindset which makes it impossible for them to step across the
                        threshold into the new paradigm, even experimentally. As science
                        closes ranks around a narrow physicalist vision, it is left to
                        outsiders from the scientific community and media mainstream to
                        tackle the deeper questions of meaning. Poets, artists, Jungians,
                        and other visionaries must do the hard work of integrating the new
                        worldview for themselves, then communicating it to others.
                        <br />
                        <br />
                        According to quantum theory, the universe is brought into
                        manifestation by the co-creative activity of the
                        observer/participant. When we choose what to measure, what to
                        observe, we are already creatively responding to the world and,
                        through our continuous act of observation, transforming it. Buddhism
                        has a term for this. It translates: <i>“As Viewed, So Appears.”</i>
                        <br />
                        <br />
                        Levy proposes that contemporary physicists unwittingly ensnare
                        themselves in a tautologous trap reinforced by the intrinsic logic
                        of the quantum world: “Our universe is dreamlike in nature; quantum
                        physics is the physics of the dreamlike nature of reality. If
                        physicists think that quantum physics is not the physics of the
                        dream, then due to the magic of *As Viewed, So Appears,* quantum
                        physics will manifest so as to supply all the needed evidence to
                        prove that it is not the physics of the dream.” If materialist
                        scientists believe that “the outer world objectively exists and has
                        nothing to do with how they observe it, will experience a world that
                        reflects back their viewpoint.” The irony is that they will receive
                        confirmation of their idea that the world exists separate from the
                        observer “through the very quantum principle of genesis by
                        observership that they are denying.” I find this a clarifying way of
                        understanding the problem. If you are a long-term follower of my
                        work, you will not be surprised that I am delighted at the idea
                        that, according to quantum theory, “the human psyche can intervene
                        creatively in the physical and chemical processes of nature.” I will
                        come back to this next time. I also want to explore the many
                        connections between quantum theory and Jungian thought. Carl Jung
                        maintained friendships with a number of the leading quantum
                        physicists, including Wolfgang Pauli, and collaborated with some of
                        them.
                        <br />
                        <br />
                        One of my pet theories is that humanity’s rapacious exploitation of
                        the Earth’s nonrenewable resources is one element of a bio-cosmic
                        evolutionary process, as exquisitely timed and sequenced as fetal
                        development leading to birth, or the metamorphosis of the
                        caterpillar into the butterfly, after devouring the finite resources
                        in its cocoon. What is being incubated or gestated, in our case, is
                        not a new physical form, but a new expression or condition of
                        conscious life. Instead of random or entropic, the universe is
                        innately synchronous, harmonic, playful, and purposeful.
                        <br />
                        <br />
                        According to this thesis, humanity is undergoing a metamorphosis to
                        attain a different level of being. The rapid evolution of our
                        technology clearly plays a role in this. But I believe we also need
                        to develop the delicate antennae of our subtler cognitive faculties
                        to hold the totality of the process in our minds. Our individual
                        understanding is a crucial thread in the weaving.
                        <br />
                        <br />
                        <hr />
                        <br />

                        The "quantum revelation" won't amount to diddley-squat unless we get
                        our act together in the here and now which above all means finding a
                        way to let go of our moth-eaten egos trapped in a capitalist
                        nightmare demanding we turn ourselves and everything on the globe
                        including all innocent life forms into commodities sold to the
                        highest bidder. This "revelation" is just another spooky
                        high-falutin' commodity while AI is the glue-blanket holding it and
                        other technocratic wonders together. This being perhaps the final
                        act of our self-fascination concocted by once-upon-a-time humans
                        (human perhaps in their long-gone childhoods) driven mad by control
                        fantasies and greed
                    </p>
                </AccordionBody>
            </Accordion>
        </>
    );
}
