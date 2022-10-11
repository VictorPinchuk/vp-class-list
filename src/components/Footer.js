import s from "./Footer.module.scss";
function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.footerContent}>

        
      <p> Created by: Victor Pinchuk </p>
      <p> tel: +380 50 112 00 25 email: vpinchuk64@gmail.com</p>
      <p>Kyiv 2022</p>
      </div>
    </div>
  );
}

export default Footer;
