import Link from 'next/link';
import styles from '../styles/navbar.module.css'
const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h2 className={styles.logo}>KwesiDev Blog</h2>
                </div>
                <div className={styles.right}>
                    <ul className={styles.navLinks}>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <li>Contact</li>
                        <li>About Us</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;