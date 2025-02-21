import Image from "next/image";
import imageTop from '../../../public/designService/image.png';
import image from '../../../public/designService/img.png';
import image1 from '../../../public/designService/img_1.png';
import image2 from '../../../public/designService/img_2.png';
import image3 from '../../../public/designService/img_3.png';
import image4 from '../../../public/designService/img_4.png';
import image5 from '../../../public/designService/img_5.png';

const DesignService = () => {
    const contents = [
        {
            title: "DEDICATED DESIGNERS",
            desc: "You’ll get one-on-one time with one of our design experts to help realize your vision, from the first mood board to the final touches."
        },
        {
            title: "INCREDIBLY EASY",
            desc: "We’ll take the tricky stuff off your plate (from curating finds across our extensive library of brands to streamlining your project on-time and on-budget) so you can enjoy the process."
        },
        {
            title: "EXCLUSIVE ACCESS",
            desc: "When only unique will do, we’ll tap our exclusive interiors community to unlock our infinite fabric archives, refine finishing options… you name it."
        },
        {
            title: "DID WE MENTION IT'S FREE?",
            desc: "Simply put, our team offers a breadth of interior design expertise, and it's all complimentary."
        }
    ]

    const content2 = [
        {
            title: "Multiple rooms or whole home"
        },
        {
            title: "Single room or outdoor space"
        },
        {
            title: "Picking or customizing one item"
        },
        {
            title: "Sample Request"
        }
    ]

    const placeholders = [
        "First Name", "Last Name", "Email Name", "Zip Name", "Phone Name"
    ]

    return (
        <div>
            <div className={'relative'}>
                <Image src={imageTop}
                       alt={'image'}
                       width={'100%'}
                       className={'w-full h-full object-cover'}
                />
            </div>
            <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
                <h1 className={'text-2xl text-center'}>Why work with us?</h1>
                <div className={'grid grid-cols-4 gap-16 mt-16'}>
                    {
                        contents.map((content) => (
                            <div className={'col-span-1'} key={content.title}>
                                <h1 className={'text-xl'}>{content.title}</h1>
                                <p className={'mt-4'}>{content.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={'p-40'}>
                    <p className={'text-center italic text-2xl'}>"She was proactive, understood my vision, and did a bunch of leg work to help me narrow down styles and products to consider." - Kim</p>
                </div>
            </div>
            <div>
                <div className={'ml-8 flex'}>
                    <Image src={image}
                           alt={'image1'}
                           width={'50vw'}
                           className={'w-[65vw]'}
                    />
                    <div className={'ml-14 flex flex-col justify-center'}>
                        <h1 className={'text-2xl'}>3 steps to an extraordinary space</h1>
                        <div className={'mt-4'}>
                            <h1 className={'text-xl'}>1. Say hello.</h1>
                            <p className={'italic'}>Select your project type and outline the details. Tell us about your space, style, and what you’re hoping to achieve. That’s all it takes to get started.</p>
                        </div>
                        <div className={'mt-4'}>
                            <h1 className={'text-xl'}>2. Let the ideas flow.</h1>
                            <p className={'italic'}>We’ll match your project with a dedicated designer so you can go over goals, and share inspiration over video, phone, or email… whatever works for you.</p>
                        </div>
                        <div className={'mt-4'}>
                            <h1 className={'text-xl'}>3. Watch them come to life.</h1>
                            <p className={'italic'}>Our experts do all the lifting. Literally, with delivery right to your home – and figuratively, from sharing samples to providing quotes and floor-plan layouts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'p-20'}>
                <p className={'text-center italic text-2xl'}>We're committed to your satisfaction, from start to finish. (Nothing makes us happier than a fellow design enthusiast enjoying their space.)</p>
            </div>
            <div className={'mt-10'}>
                <div className={'mr-8 flex'}>
                    <div className={'mr-14 ml-14 mt-20 flex flex-col justify-center'}>
                        <h1 className={'text-2xl'}>See for yourself.</h1>
                        <p className={'italic'}>Whether you want to refresh a living room or redesign an entire dream house, we’re here to help. Here’s a glimpse of how our design experts can bring your vision to life.</p>
                    </div>
                    <Image src={image1}
                           alt={'image1'}
                           width={'50vw'}
                           className={'w-[65vw]'}
                    />
                </div>
            </div>
            <div className={'mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
                <form className={'flex flex-col'}>
                    <h1 className={'text-xl ml-40'}>Let’s connect you with an expert. </h1>
                    <div className={'grid grid-cols-2 gap-4 ml-40 mr-40 mt-8'}>
                        {
                            placeholders.map((placeholder) => (
                                <div className={'col-span-1 space-x-2'} key={placeholder}>
                                    <input type={'text'}
                                           className={'w-[100%] h-[50px] border border-[gray] p-4'}
                                           placeholder={`*${placeholder}`}
                                    />
                                </div>
                            ))
                        }
                        <div className={'col-span-1 space-x-2'}>
                            <select className={'w-[100%] h-[50px] border border-[gray] p-4'}>
                                <option value={''}>*Preferred Contact Method</option>
                                <option value={'email'}>Email</option>
                                <option value={'phone'}>Phone</option>
                                <option value={'video-chat'}>Video Chat</option>
                            </select>
                        </div>
                    </div>

                </form>
                <div className={'ml-40 mr-40 mt-10'}>
                    <h1 className={'text-xl'}>Tell us a little about your project.</h1>
                    <p className={'mt-6'}>*Select your project type.</p>
                    <div className={'grid grid-cols-4 mt-4 gap-10'}>
                        {
                            content2.map((item) => (
                                <div className={'col-span-1 border h-[250px] flex justify-center items-center'} key={item.title}>
                                    <div className={''}>
                                        {item.title}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={'ml-40 mr-40 mt-10'}>
                    <h1>Give us a few more details – we’ll do the rest.</h1>
                    <div className={'grid grid-cols-2 gap-16 mt-16'}>
                        <div className={'col-span-1 space-x-2'}>
                            <select className={'w-[100%] h-[50px] border border-[gray] p-4'}>
                            </select>
                        </div>
                        <div className={'col-span-1 space-x-2'}>
                            <select className={'w-[100%] h-[50px] border border-[gray] p-4'}>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={'mt-8 text-center'}>
                    <button className={'h-[50px] w-[100px] items-center border bg-black text-white hover:bg-white hover:text-black'}
                            style={{'transition': 'all .4s ease-in-out'}}
                    >
                        Submit</button>
                </div>
            </div>
            <div className={'mt-8 mr-8 ml-8'}>
                <div className={'grid grid-cols-4 gap-16 mt-16'}>
                    <div className={'col-span-1'}>
                        <Image src={image2}
                               alt={'image1'}
                               width={'100%'}
                        />
                        <h1 className={'mt-4 text-xl'}>Rethink a single room.</h1>
                        <p className={'mt-2'}>From custom furniture to artful accents.</p>
                    </div>
                    <div className={'col-span-1'}>
                        <Image src={image3}
                               alt={'image1'}
                               width={'100%'}
                        />
                        <h1 className={'mt-4 text-xl'}>Refresh your entire home.</h1>
                        <p className={'mt-2'}>Space planning & room design from our experts.</p>
                    </div>
                    <div className={'col-span-1'}>
                        <Image src={image4}
                               alt={'image1'}
                               width={'100%'}
                        />
                        <h1 className={'mt-4 text-xl'}>Elevate your outdoor living space.</h1>
                        <p className={'mt-2'}>Bring indoor comfort outside with our unique pieces.</p>
                    </div>
                    <div className={'col-span-1'}>
                        <Image src={image5}
                               alt={'image1'}
                               width={'100%'}
                        />
                        <h1 className={'mt-4 text-xl'}>Reimagine your bath.</h1>
                        <p className={'mt-2'}>Update your fixtures or design an exceptional bath retreat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignService