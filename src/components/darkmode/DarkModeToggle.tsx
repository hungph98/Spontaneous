"use client"

import {useContext, useState} from "react";
import {ThemeContext} from "@/components/context/ThemeContext";
import styles from './darkmodetoggle.module.scss';
import Image from "next/image";

const DarkModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext);
    const [show, setShow] = useState(true);

    return (
        <div className={styles.container} onClick={() => setShow(!show)}>
            <button>
                <Image src={'/sun.png'}
                       alt={'Profile'}
                       width={30}
                       height={30}
                       className={'cursor-pointer'}
                />
            </button>
            {
                show ? <div
                        className={'invisible absolute p-4 rounded-md top-10 right-6 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'}></div>
                    :
                    <div
                        className={'absolute p-4 rounded-md top-10 right bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 h-22 w-24'}>
                        <div className={styles.icon}
                             onClick={mode === 'dark' ? toggle : ''}
                        >
                            Light 🔆
                        </div>
                        <div className={styles.icon} style={{'margin-top': '10px'}}
                             onClick={mode === 'light' ? toggle : ''}
                        >
                            Dark 🌙
                        </div>
                    </div>
            }
        </div>
    )
}

export default DarkModeToggle