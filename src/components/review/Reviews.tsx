import Link from "next/link";
import React, {useEffect, useState} from "react";
import StarRating from "@/components/star/StarRating";
import moment from "moment/moment";

type Review = {
    _id: string;
    comment: string;
    createdAt: string;
    rating: number,
    helpful: number;
};

interface ReviewsProps {
    reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({reviews}) => {
    const [totalReviews, setTotalReviews] = useState(0);
    const [averageRating, setAverageRating] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [reviewList, setReviewList] = useState<Review[]>(reviews);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("/api/review");
                const data = await response.json();

                if (!response.ok) {
                    return;
                }

                if (!data.data || data.data.length === 0 || data.totalReviews === 0) {
                    return;
                }

                setReviewList(data.data);
                setTotalReviews(data.totalReviews);
                setAverageRating(data.averageRating);
            } catch (error) {
                return null;
            } finally {
                setIsLoading(false)
            }
        };
        fetchReviews().then(() => {
            return
        })
    }, []);

    const formatDate = (isoString: moment.MomentInput) => {
        return moment(isoString).format("MM/DD/YYYY")
    }

    const handleHelpfulClick = (index: number): void => {
        const updatedReviews = [...reviewList];
        updatedReviews[index].helpful += 1;
        setReviewList(updatedReviews);
        if (count == 0) {
            setCount(count + 1)
        } else if (count == 1) {
            setCount(count - 1)
        }
    };

    if (isLoading) return <p className={'mt-8 ml-32 mr-32'}>Loading...</p>;

    return (
        <div>
            <div className={'mt-8 ml-32 mr-32 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
                <div className={'text-center'}>
                    <h1 className={'text-2xl'}>Reviews</h1>
                    <span>Our <Link href={'/'} className={'underline'}>Community Guidelines</Link> help customers write honest reviews.</span>
                </div>
                <div className={'mt-10 grid grid-cols-2 gap-32'}>
                    <div className={'flex items-center'}>
                        <span className={'mr-[5px] text-xl'}>{averageRating}</span>
                        <StarRating rating={averageRating}/>
                        <div>
                            <span className={'ml-[5px] mr-[5px] text-xl'}>{totalReviews}</span>
                            Reviews
                        </div>
                    </div>
                    <div className={''}>
                        filter
                    </div>
                </div>
                <div className={'h-[1px] mt-4'} style={{'background': '#ededed'}}/>
                <div className={'mt-12'}>
                    {
                        reviewList.map((review, index) => (
                            <div className={'grid grid-cols-3 gap-32'} key={review._id}>
                                <div className={'col-span-2 mt-4'}>
                                    <StarRating rating={review.rating}/>
                                    <div className={'mt-4'}>
                                        <p>Finish: </p>
                                    </div>
                                    <p className={'mt-4'}>{review.comment}</p>
                                    <div className={'h-[1px] mt-4'} style={{'background': 'gray'}}/>
                                </div>
                                <div className={'col-span-1 mt-4'}>
                                    Date: {formatDate(review.createdAt)}
                                    <p>Review name</p>
                                    <div className={'mt-4 flex items-center'} style={{'color': '#333'}}>
                                        <button onClick={() => handleHelpfulClick(index)}>👍 Helpful ({count})</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews