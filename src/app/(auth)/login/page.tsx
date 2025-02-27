"use client"

import Link from "next/link";
import styles from './page.module.css';
import {signIn, useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import {FormEvent, useEffect, useState} from "react";

const Login = () => {
    const session = useSession();
    const router = useRouter();
    const params = useSearchParams();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setError(params.get("error") ?? "");
        setSuccess(params.get("success") ?? "")
        setLoading(false);
    }, [params]);

    if (session.status === "loading") {
        return (
            <p className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>Loading...</p>
        )
    }

    if (session.status === "authenticated") {
        router?.push("/")
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const email = (form[0] as HTMLInputElement).value;
        const password = (form[1] as HTMLInputElement).value;

        signIn("credentials", {
            email,
            password
        }).then(r => {
            if (!(r) || String(r.status) === "ok") {
                router?.push("/")
            }
        }).catch(e => {
            setError(e.message)
        }
        )
    }

    if (loading) return <p className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>Loading...</p>;

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
                    name={"email"}
                />
                <input
                    type={"password"}
                    placeholder={"Password"}
                    required={true}
                    className={styles.input}
                    name={"password"}
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