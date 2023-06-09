import React, { useState, useEffect } from "react";
import "./style.css";
import dsp from '../../asets/footer/ss.jpg'
import { PatternFormat } from "react-number-format";
import Aos from "aos";
import LoadingSpinnerButton from '../leadingBtn/LoadingSpinnerButton'

export const Contact = ({ setOpenMsg }) => {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    number: "",
    savol: "",
    ism: ""
  });


  const ism = localStorage.getItem("usern")?.toUpperCase()


  const sendMsgToBot = async (e) => {
    localStorage.setItem("usern", formData.ism)
    e.preventDefault()
    let aaa = `<b>O'quvchi xabar qoldirdi</b>%0A%0A 👤 Ismi: ${formData.ism}%0A ☎️ Tel: ${formData.number}%0A ✉️ Habar: ${formData.savol}%0A `

    // let tokenBot = "6230509348:AAHqIOcv8e6rUeikjKdc27-H1rMw1oLux0k"; // Azimjon
    // let chatId = "39464759"; // Azimjon

    let tokenBot = "5840994316:AAFfs3_OcWooZPBJD1lB2tDfYodRarTJsHA"; // Algoritm
    const chatId = -1001444460459; // Algoritm

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${aaa}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();

    setTimeout(() => {
      setOpenMsg(true)

    }, 3500)
    setTimeout(() => {
      setOpenMsg(false)
    }, 11000)

    setFormData({
      number: "",
      savol: "",
      ism: ""
    })
  }
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div className="Container_Contact">
      <div className="con_box">
        <div data-aos="zoom-in-right" className="con_box-img">
          <img src={dsp} alt="" />
        </div>
      </div>
      <div className="con_box">
        <h2 data-aos="zoom-in-right">Savolingiz bormi?</h2>
        <p data-aos="zoom-in-right">Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz.</p>
        {/* <form onSubmit={sendMsgToBot} className="from"> */}
        <form onSubmit={sendMsgToBot} className="from">
          <input type="text" placeholder="Ismingizni kriting..."
            value={formData.ism}
            required
            data-aos="zoom-in-right"
            onChange={(e) =>
              setFormData({ ...formData, ism: e.target.value })}
          />
          <PatternFormat
            data-aos="zoom-in-right"
            required
            format="+998 (##) ### ####"
            allowEmptyFormatting
            mask="_"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />
          <textarea data-aos="zoom-in-right" value={formData.savol}
            placeholder="Savol qoldiring..."
            onChange={(e) =>
              setFormData({ ...formData, savol: e.target.value })
            } name="" id="" cols="30" rows="4"></textarea>

          {
            formData.number == 0 || formData.savol === '' || formData.ism === '' ? <button className="loading-spinner-button">So‘rov yuborish</button> :

              <LoadingSpinnerButton disable={formData} loading={loading} onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)

                }, 2000)
              }} />
          }
        </form>
      </div>
    </div>
  );
};
export default Contact;

