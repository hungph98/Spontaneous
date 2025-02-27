"use client"

import styles from './modal.module.scss';
import {useState} from "react";
import downArrow from '../../../public/arrow/down-arrow.png';
import upArrow from '../../../public/arrow/arrow-up.png'
import Image from "next/image";

// @ts-ignore
const Modal = ({isOpen, onClose, item}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    if (!isOpen) {
        return null
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div>
                    Image Carousal
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className={'border h-full w-ful'}>
                    <button onClick={toggleVisibility} className={'w-full flex'}
                            style={{'padding': '10px 0px 10px 0'}}>
                        {
                            isVisible ?
                                <div className={'flex'}>
                                    <div className={'mr-[215px]'}>
                                        <span>Featured Review</span>
                                    </div>
                                    <div>
                                        <Image src={upArrow}
                                               alt={'up-arrow'}
                                               width={25}
                                        />
                                    </div>
                                </div>
                                :
                                <div className={'flex'}>
                                    <div className={'mr-[215px]'}>
                                        <span>Featured Review</span>
                                    </div>
                                    <div>
                                        <Image src={downArrow}
                                               alt={'down-arrow'}
                                               width={25}
                                        />
                                    </div>
                                </div>
                        }
                    </button>
                </div>
                {
                    isVisible && (
                        <div className={'mt-5'}>
                            <div className={'flex justify-between'}>
                                <span>Start</span>
                                <span>03/02/2025</span>
                            </div>
                            <span className={'flex'}>
                                <h2 className={'font-bold mr-2'}>Finish:</h2>
                                <p>author</p>
                            </span>
                            <p>Click the button to hide or show this.</p>
                        </div>
                    )
                }
                <button className={styles.buttonClose} onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal