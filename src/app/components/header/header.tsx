import styles from './header.module.scss';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser
// } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Bokeh</h1>
      {/* <FontAwesomeIcon
        icon={faUser}
      /> */}
    </header>
  )
}