import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import Img8 from "../assets/img8.webp";
import Img9 from "../assets/img9.jpeg";

export function NotesAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} className="mb-24">
                <AccordionHeader onClick={() => handleOpen(1)}>
                    <h2 className="mt-16 lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] text-white font-bold">
                        ▶ Potential Domains To Directly Spread This Writing:
                    </h2>{" "}
                </AccordionHeader>
                <AccordionBody className="mb-24">


                    <p className="lg:text-[1.3vw] text-[4.5vw] leading-[5.5vw] lg:leading-[1.6vw] mt-4 text-slate-300">
                        InternetEnlightenment.com<br />
                        EnlightenmentAge.org<br />
                        AxialAge.org<br />
                    </p>
                </AccordionBody>
            </Accordion>
        </>
    );
}
