import CarouselHomePage from "@/components/home/carousel/CarouselHomePage";
import HomeContent from "@/components/home/tabCards/HomeContent";


const HomePage = () => {
    return (
        <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
            <div>
                <CarouselHomePage/>
            </div>
            <div className={'mt-10'}>
                <HomeContent/>
            </div>
        </div>
    )
}

export default HomePage