import { useEffect, useState } from 'react';
const HappyClient = () => {
    const [happyClients, setHappyClients] = useState([]);
    console.log(happyClients);

    useEffect(() => {
        fetch('happyClient.json')
            .then(res => res.json())
            .then(data => setHappyClients(data?.client_feedback))
    }, [])
    return (
        <div className="py-20 px-4">
            <h2 className='font-great_vibes text-2xl text-red-500'>Testimonials</h2>
            <h2 className='text-4xl font-bold py-4'>What our <span className='text-red-500'>client</span> are saying</h2>
            <div className="carousel  mt-20 w-full">
                {
                    happyClients?.map((client, idx) => <div id={`item${idx}`} className="carousel-item w-full text-center"
                        key={idx}
                    >

                        <div className="card bg-base-100 shadow-xl w-full lg:w-1/2 mx-auto ">
                            <div className="card-body text-accent">
                                <img className="w-20 mx-auto" src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_1280.png" alt="" />
                                <h2 className="card-title">{client?.feedback}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div >
    );
};

export default HappyClient;