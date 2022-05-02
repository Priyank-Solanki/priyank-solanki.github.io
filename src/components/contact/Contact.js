import * as React from "react";

const Contacts = (props) => (
    <>
        <div id="contact" className="contact-section section" tabIndex="-1">
            <div className="container">
                <div className="section-content row">
                    <div className="contact-text col-lg-6">
                        <div className="text-box-inline">
                            <span className="subtitle">contact</span>
                            <h2>
                                Have You Any Project?
                                <br />
                                Please Drop a Message
                            </h2>
                            <p>
                                Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as
                                possible.
                            </p>
                        </div>

                        <ul className="contact-info">
                            <li>
                                <image src="assets/images/icons/address.png" alt="Address" />
                                <div>
                                    <strong>Address:</strong>
                                    941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
                                </div>
                            </li>
                            <li>
                                <image src="assets/images/icons/phone.png" alt="Phone" />
                                <div>
                                    <strong>Phone:</strong>
                                    <ul>
                                        <li><a href="tel:02966202290" className="ltr-dir">(02) 966 202 290</a></li>
                                        <li><a href="tel:02966202291" className="ltr-dir">(02) 966 202 291</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <image src="assets/images/icons/email.png" alt="Email" />
                                <div>
                                    <strong>Email:</strong>
                                    <ul>
                                        <li><a href="mailto:info@nafie.com">info@nafie.com</a></li>
                                        <li><a href="mailto:support@nafie.com">support@nafie.com</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <ul className="social">
                            <li>
                                <a href="/" target="_blank" rel="noreferrer" v-tooltip="{text: 'Facebook', dir: 'top'}">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" rel="noreferrer" v-tooltip="{text: 'Twitter', dir: 'top'}">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" rel="noreferrer" v-tooltip="{text: 'LinkedIn', dir: 'top'}">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" rel="noreferrer" v-tooltip="{text: 'YouTube', dir: 'top'}">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <form ref={React.useRef("contactForm")} className="contact-form form-styled" action="contact_form.php"
                            data-success-msg="Message sent successfully!"
                            data-err-msg="Oops! something went wrong, please try again.">
                            <div className="group">
                                <label>Name</label>
                                <div className="control has-prefix-icon">
                                    <input type="text" name="name" placeholder="e.g. John Doe" minLength={3} required />
                                    <i className="fa fa-user-circle prefix-icon" aria-hidden="true"></i>

                                    <div className="errors-msgs">
                                        <input className="required" type="hidden" value="Name is required" />
                                        <input className="minLength" type="hidden" value="Name must be at least 3 characters" />
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <label>Email</label>
                                <div className="control has-prefix-icon">
                                    <input className="ltr-dir" type="email" inputMode="email" name="email"
                                        placeholder="e.g. john.doe@gmail.com" required />
                                    <i className="fa fa-envelope prefix-icon" aria-hidden="true"></i>

                                    <div className="errors-msgs">
                                        <input className="required" type="hidden" value="Email is required" />
                                        <input className="invalid" type="hidden" value="Please enter a valid email address" />
                                    </div>
                                </div>
                            </div>
                            <div className="group phone-number">
                                <label>Phone <span className="optional">(Optional)</span></label>
                                <div className="control has-prefix-icon">
                                    <input type="tel" inputMode="tel" name="phone" placeholder="Phone Number" />
                                    <i className="fa fa-phone prefix-icon" aria-hidden="true"></i>

                                    <div className="errors-msgs">
                                        <input className="invalid" type="hidden" value="Please enter a valid Phone Number" />
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <label>Message</label>
                                <div className="control has-prefix-icon">
                                    <textarea name="message" placeholder="Write message..." required></textarea>
                                    <i className="fa fa-comments prefix-icon" aria-hidden="true"></i>

                                    <div className="errors-msgs">
                                        <input className="required" type="hidden" value="Message is required" />
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="control">
                                    <button className="submit-btn btn btn-dark" type="button">
                                        {/* @click="contactFormValidation" */}
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    </>
);

export default Contacts;
