'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './header.module.scss';

export default function Header() {
  const [show, setShow] = useState<boolean>(true);
  const ref = useRef<boolean>();
  ref.current = show;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event: Event) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (ref.current && scrollTop > 50) {
      setShow(false);
    }

    if (!ref.current && scrollTop < 50) {
      setShow(true);
    }
  };


  return (
    <header className={`${styles.header} ${show ? styles.show : ''}`}>
      <h1 className={styles.logo}>Bokeh</h1>
    </header>
  )
}