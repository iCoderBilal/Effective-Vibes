


const Scroller = ({ images, speed = 40000 }) => {


    return (

        <div>

            <div className="inner">
                <div className="wrapper">
                    <section style={{ "--speed": `${speed}ms` }}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                    <section style={{ "--speed": `${speed}ms` }}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                    <section style={{ "--speed": `${speed}ms` }}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Scroller;
