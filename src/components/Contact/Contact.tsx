"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import MainHeading from '../MainHeading/MainHeading'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
// import SocialUl from '../SocialUl/SocialUl'
const Contact = ({
  lo
}: {
  lo: string
}) => {
  // scroll animations
  const contact: any = useRef(null)
  const [contactScrolled, setContactScrolled] = useState(false)
  
  function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
  }
  
  const scrollcontactiSection = () => {
  if(contact.current){
      const headingOffsetTop = getOffsetTopRelativeToWindow(contact.current)
      if(headingOffsetTop <= (window.scrollY + 550)){
          setContactScrolled(true)
      }
      }
  }
  useEffect(() => {
      const headingOffsetTop = getOffsetTopRelativeToWindow(contact.current)
      if(headingOffsetTop <= (window.scrollY + 550)){
          setTimeout(() => {
              setContactScrolled(true)
          }, 1200);
      }
      window.addEventListener("scroll", scrollcontactiSection)
  })
  const scrollRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(() => {

      gsap.from(".location", {
        y: 20,
        opacity: 0,
        duration: 1.4,
        borderRadius: "50%",
        scrollTrigger: {
          trigger: ".location", // box is the element that its animation will be triggered when it enters the view port of the screen
          start: "top bottom", // this means the animation will be triggered when the bottom of the box hits the bottom of the screen
        },
        stagger: {
          amount: 0.1,
        },
        ease: "back.inOut"
      })

  }, {scope: scrollRef}) // {scope: scrollRef}: here is optional, this makes gsap know where exactly the animation should happen
  
  
  const classNames = [
      lo === "ar" ? styles.ar : null,
      contactScrolled ? styles.scrolled : null,
      styles.contact
  ]
  return (
    <section id='contact' ref={contact} className={classNames.join(" ")}>
        <MainHeading>
          <h2>
            {/* {t("Contact.MainHeading.H2")} */}
            Contact Us
          </h2>
          <p>
            Here are our locations, phone numbers and social media links
          </p>
        </MainHeading>
        <div className="container">
          <div className={styles.locations} ref={scrollRef}>
            <div className={styles.location + ` location`}>
              <h3>
                Office
              </h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13777.828145695737!2d31.702156053454157!3d30.30951531129146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1755595502337!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.location + ` location`}>
              <h3>
                Factory
              </h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13777.828145695737!2d31.702156053454157!3d30.30951531129146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1755595502337!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className={styles.info}>
              <div>
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+202131231231">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <h3>
                      Phone
                    </h3>
                    <div>
                      {/* <span>
                          {t('Contact.Contacts.Management')}
                      </span>   */}
                      <a target='_blank' href="tel:+202131231231">
                        +202131231231
                      </a>
                    </div>
                  </div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+202131231231">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <h3>
                      Phone
                    </h3>
                    <div>
                      {/* <span>
                          {t('Contact.Contacts.Management')}
                      </span>   */}
                      <a target='_blank' href="tel:+202131231231">
                        +202131231231
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/2021231231">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                      <h3>
                        Whatsapp
                      </h3>
                    <div>
                      {/* <span>
                          {t('Contact.Contacts.Management')}
                        </span>   */}
                      <a target='_blank' href="https://wa.me/2021231231">
                        +202131231231
                      </a>
                    </div>
                  </div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/2021231231">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                      <h3>
                        Whatsapp
                      </h3>
                    <div>
                      {/* <span>
                          {t('Contact.Contacts.Management')}
                        </span>   */}
                      <a target='_blank' href="https://wa.me/2021231231">
                        +202131231231
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="mailto:example@gmail.com?subject=Email-from-ICSF-website">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                      <h3>
                        Email
                      </h3>
                    <div>
                      <a target='_blank' href="mailto:example@gmail.com?subject=Email-from-ICSF-website">
                        example@gmail.com
                      </a>
                    </div>
                  </div>  
                  <div>
                    <a target='_blank' className={styles.iconLink} href="mailto:example@gmail.com?subject=Email-from-ICSF-website">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                      <h3>
                        Email
                      </h3>
                    <div>
                      <a target='_blank' href="mailto:example@gmail.com?subject=Email-from-ICSF-website">
                        example@gmail.com
                      </a>
                    </div>
                  </div>  
                </div>
              </div>
          </div>
          <div className={styles.socialMedia}>
                <a href="https://www.facebook.com/profile." target='_blank'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span>Linkedin</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100057528936336" target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>Instagram</span>
                </a>
          </div>
        </div>
    </section>
  )
}

export default Contact