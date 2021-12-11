import styles from '../css_modules/css/all.module.css'

const Footer = (props) => {
  return (
    <>
      <footer className={`${styles['section-footer']} ${styles['border-top']} ${styles['padding-y']}`}>
        <div className={`${styles['container']}`}>
          <p className={`${['float-md-right']}`}>© Copyright 2021 All rights reserved</p>
          <p>
            <a href="#">Điều khoản và điều kiện</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
