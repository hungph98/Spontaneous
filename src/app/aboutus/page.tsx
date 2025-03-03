"use client"

import Image from "next/image";
import styles from './page.module.scss';

const AboutUs = () => {
    return (
        <>
            <div className={'mt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-24'}>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <h1 className={styles.title}>
                            Better design for digital products.
                        </h1>
                        <p className={styles.description}>
                            Turning your Idea into Reality. We bring together the teams from the global tech industry.
                        </p>
                    </div>
                    <div className={styles.item}>
                        <Image src={''}
                               alt={''}
                               width={1000}
                               height={1000}
                               className={styles.image}
                        />
                    </div>
                </div>
                <div className={'mt-20 border'}>
                    About Us
                </div>
            </div>
        </>
    )
}

export default AboutUs