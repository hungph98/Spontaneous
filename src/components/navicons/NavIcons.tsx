"use client"

import Image from "next/image";
import {useEffect, useState} from "react";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import DarkModeToggle from "@/components/darkmode/DarkModeToggle";
import cartIcon from '../../../public/cart.png';
import CartModal from "@/components/cart/CartModal";

const NavIcons = () => {
    const [showForm, setShowForm] = useState(true);
    const [showCartModal, setShowCartModal] = useState(true);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch("/api/cart");
                const data = await response.json();

                setTotalQuantity(data.totalQuantity);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchCart();

    }, []);

    return (
        <div className={'flex items-center gap-4 xl:gap-6 relative'}>
            {/*<DarkModeToggle/>*/}
            <button onClick={() => setShowForm(!showForm)}
            >
                <Image src={'/profile.png'}
                       alt={'Profile'}
                       width={22}
                       height={22}
                       className={'cursor-pointer'}
                />
            </button>
            {
                showForm ?
                    <div className={'invisible absolute p-4 rounded-md top-10 right-6 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'}></div>
                    :
                    <div className={'absolute p-4 rounded-md top-10 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'} style={{'right': '65px'}}>
                        {
                            session.status === 'unauthenticated' || session.status === 'loading' ?
                                <div className={'cursor-pointer text-sm'}>
                                    <Link href={'/login'}>Login</Link>
                                </div>
                                :
                                <div>
                                    <Link href={'/profile'}>Profile</Link>
                                    <div className={'mt-2 cursor-pointer'}>
                                        <button onClick={() => signOut({ redirect: false}).then(() => router?.push('/login'))}>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                        }
                    </div>

            }
            <Image
                src={'/notification.png'}
                alt={'Notification'}
                width={22}
                height={22}
                className={'cursor-pointer'}
            />
            <button onClick={() => setShowCartModal(!showCartModal)}>
                <div>
                    <Image src={cartIcon} alt={'cart-icon'} width={22} height={22}/>
                    <div className={'absolute -top-4 -right-4 w-6 h-6 rounded-full text-white text-sm flex items-center justify-center'}
                         style={{'backgroundColor': 'red'}}
                    >
                        {totalQuantity}
                    </div>

                </div>
            </button>
            {
                showCartModal ?
                    <div className={'invisible absolute p-4 rounded-md top-10 right-6 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'}></div>
                    :
                    <CartModal/>
            }
        </div>
    )
}

export default NavIcons