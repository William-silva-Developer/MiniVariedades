
import styles from './Header.module.css';

export  const Header = () => {
  return (
    <header className={styles.header}>
      
        <nav>
           <h1 className={styles.title}>Mini Variedades</h1>
        </nav>
    </header>
  )
};


export default Header;