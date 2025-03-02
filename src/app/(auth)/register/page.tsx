"use client"

import styles from './page.module.css';
import Link from "next/link";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";


const Register = () => {
    const [err, setErr] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const username = (form[0] as HTMLInputElement).value;
        const email = (form[1] as HTMLInputElement).value;
        const password = (form[2] as HTMLInputElement).value;

        try {
            const res = await fetch("/api/client/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            res.status === 201 && router.push("/login?success=Acount has been created")
        } catch (err) {
            setErr(true);
            console.log(err)
        }
    }

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Create an Account</h1>
                <h2 className={styles.subtitle}>Please sign up to see the dashboard</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type={"text"}
                        placeholder={"Username"}
                        required={true}
                        className={styles.input}
                    />
                    <input
                        type={"email"}
                        placeholder={"Email"}
                        required={true}
                        className={styles.input}
                    />
                    <input
                        type={"password"}
                        placeholder={"Password"}
                        required={true}
                        className={styles.input}
                    />
                    <button className={styles.button}>Register</button>
                    {err && "Something went wrong"}
                </form>
                <span className={styles.or}> - OR - </span>
                <Link href={"/login"} className={styles.link}>
                    Login with an existing account
                </Link>
            </div>
        </div>
    )
}

export default Register