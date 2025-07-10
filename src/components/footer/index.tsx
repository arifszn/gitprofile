import { useEffect, useState, useRef } from 'react';
import styles from './Footer.module.css';
import catPaw from '../../assets/cat-paw.svg'; // Adjust the path as necessary

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);

    return () => {
      window.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  const trackScrolling = () => {
    if (!footerRef.current) return;

    const bottom =
      document.body.scrollHeight - window.innerHeight - 40 < window.scrollY;

    if (bottom) {
      document.removeEventListener('scroll', trackScrolling);

      setTimeout(() => {
        if (footerRef.current) {
          const scrollDistance =
            footerRef.current.scrollHeight -
            (document.body.scrollHeight - window.innerHeight - window.scrollY);

          if (scrollDistance > 0) {
            setCounter((prev) => {
              if (prev === 2) return 0; // Reset counter after 2 increments
              return prev + 1;
            });
            setAnimate(true);
            setTimeout(() => {
              window.scrollTo({
                top: window.scrollY - scrollDistance,
                behavior: 'smooth',
              });
            }, 200);
            setTimeout(() => {
              setAnimate(false);
            }, 1000);
          }
          document.addEventListener('scroll', trackScrolling);
        }
      }, 2000);
    }
  };

  return (
    <div className={styles.footer} ref={footerRef}>
      <div className={styles.wrapper}>
        <img
          src={catPaw}
          className={`${styles.cat_paw} ${animate && [0, 1].includes(counter) ? styles.animate : ''}`}
        />
        <div className={styles.cat}>
          <div className={`${styles.ear} ${styles.ear_left}`}></div>
          <div className={`${styles.ear} ${styles.ear_right}`}></div>
          <div className={styles.face}>
            <div className={`${styles.eye} ${styles.eye_left}`}>
              <div className={styles.eye_pupil} />
            </div>
            <div className={`${styles.eye} ${styles.eye_right}`}>
              <div className={styles.eye_pupil} />
            </div>
            <div className={styles.muzzle}></div>
          </div>
        </div>
        <img
          src={catPaw}
          className={`${styles.cat_paw} ${animate && [0, 2].includes(counter) ? styles.animate : ''}`}
        />
      </div>
    </div>
  );
};

export default Footer;
