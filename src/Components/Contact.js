import React, { useState } from 'react';

import "./Contact.css";
import JotformEmbed from "react-jotform-embed";


const Contact = ({ data }) => {
    // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
    // const [name, setName] = useState('');
    // const [subject, setSubject] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    console.log(data)

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    // }


    return (
        <section id="contact">

            <div className="row section-head">

                <div className="two columns header-col">

                    <h1><span>Get In Touch.</span></h1>

                </div>

                <div className="ten columns">

                    <p className="lead">{data?.message}</p>

                </div>

            </div>

            <div className="row">
                <div className="eight columns">

                    <form id="contactForm" name="contactForm">
                        {/* <fieldset>

                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button type='submit' onClick={handleClick} className="submit">Submit</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset> */}
                        <fieldset>

                            <div>
                                <div className="ContactDiv">
                                    <div className="iframeDivWrapper">
                                        <div className="iframeDiv">
                                            <iframe className="iframe" id="JotFormIFrame-201731473395153" title="General Inquiry Contact Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/201731473395153" frameborder="0"  >
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Address and Phone</h4>
                        <p className="address">
                            {data?.name}<br />
                            {/* {data?.address.street} <br /> */}
                            {data?.email} <br />
                            {data?.address.city} <br />
                            {data?.address.state} - {data?.address.zip}<br />
                            <span>{data?.phone}</span>
                        </p>
                    </div>

                    <div className="widget widget_tweets">

                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Contact;
