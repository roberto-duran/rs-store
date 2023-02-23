import Link from "next/link";
import styles from "./header.module.css";
export default function Ad() {
    return (
        <Link className={styles.ad} href={'/'}></Link>
    );
};
