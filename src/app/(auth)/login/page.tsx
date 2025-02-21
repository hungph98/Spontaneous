"use client"

import Link from "next/link";
import styles from './page.module.css';
import {signIn, useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

const Login = () => {
    const session = useSession();
    const router = useRouter();
    const params = useSearchParams();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        setError(params.get("error"));
        setSuccess(params.get("success"))
    }, [params]);

    if (session.status === "loading") {
        return (
            <p>Loading...</p>
        )
    }

    if (session.status === "authenticated") {
        router?.push("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password
        })
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
            <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={'Email'}
                    required={true}
                    className={styles.input}
                />
                <input
                    type={"password"}
                    placeholder={"Password"}
                    required={true}
                    className={styles.input}
                />
                <button className={styles.button}>Login</button>
                {error && error}
            </form>
            <button className={styles.button + " " + styles.google}>
                Login with Google
            </button>
            <span className={styles.or}> - OR - </span>
            <Link href={"/register"} className={styles.link}>
                Create new account
            </Link>
        </div>

    )
}

export default Login