"use client"

import { useSession } from 'next-auth/react'
import {useState} from "react";

const Profile = () => {
    const { data: session, status} = useSession();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content, author }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("Article created successfully!");
            setTitle("");
            setContent("");
            setAuthor("");
        } else {
            setMessage(`Error: ${data.error}`);
        }
    };

    return (
        <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
            <div className={'grid grid-cols-3'}>
                <div className={''}>
                    Image
                </div>
                <div className={'col-span-2'}>
                    <h1 className={'text-3xl mb-5'}>Info</h1>
                    <div className={'grid grid-cols-2 mb-2'}>
                        <div>
                            <h1>Username:</h1>
                        </div>
                        <div>
                            <h1>Email:</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'h-[1px]'} style={{'background': 'gray'}}/>
        </div>
    )
}

export default Profile