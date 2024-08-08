import React from 'react';
import { Instagram, LinkedIn, Twitter, Facebook, LocationOn, Phone, Web, Email } from '@mui/icons-material';

const contactData = {
  socialLinks: [
    { link: 'https://www.facebook.com/vcet.hackathon', icon: Facebook },
    { link: 'https://www.instagram.com/hackathon_vcet/', icon: Instagram },
    { link: 'https://twitter.com/VcetHackathon', icon: Twitter },
    { link: 'https://www.linkedin.com/in/vcet-hackathon/', icon: LinkedIn },


  ],
  address: {

    location: 'K. T. Marg,Dist-Palghar,Shastri Nagar Vasai West,',
    location2: 'Maharashtra - 401202',
    phone: '0250-2338234',
    email: 'vcet.hackathon@vcet.edu.in',
    website: 'https://vcet.edu.in/',
  },
  technicalQueries: [
    { name: 'Rishabh Nahar', phone: '+91 9987990097' },
    { name: 'Tanmay Arsania', phone: '+91 8208661741' },
    { name: 'Meet Dodiya', phone: '+91 9372575530' },
    { name: 'Rehman Khan', phone: '+91 9175810544' },

  ],
  otherQueries: [
    { name: 'Kashish Bhanushali', phone: '+91 9561650242' },
    { name: 'Ramesh Yadav', phone: '+91 9096377491' },

  ],
};

const Contact = () => {
  return (
    <div id="contact">
      <br/>
      <br/>
      <div className="contact-section contacts">
        <h1 className="title" style={{ marginBottom: '30px' }}>Contact Us</h1>
        <div className="contact-container2">
          <div className="box2 tech query">
            <h2>For Technical Queries</h2>
            <div className="content2 contact-details">
              {contactData.technicalQueries.map((query, index) => (
                <div className="contact" key={index}>
                  <b className="subheading">{query.name}</b>
                  <p><a href={`tel:${query.phone}`}>{query.phone}</a></p>
                </div>
              ))}
            </div>
          </div>
          <div className="box2 other query">
            <h2>For Other Queries</h2>
            <div className="content2">
              {contactData.otherQueries.map((query, index) => (
                <div className="contact" key={index}>
                  <b className="subheading">{query.name}</b>
                  <p><a href={`tel:${query.phone}`}>{query.phone}</a></p>
                </div>
              ))}
            </div>
          </div>

          <div className="box2 address">
            <div className="content2 add">
              <ul>
                <li >
                  <LocationOn />
                  <span className='locspan' ><a href="">
                    <div>
                      {contactData.address.location}
                    </div>
                    <div className='py-1'>
                      {contactData.address.location2}
                    </div>
                  </a></span>

                </li>
                <li>
                  <Phone />
                  <span><a href={`tel:${contactData.address.phone}`}>{contactData.address.phone}</a></span>
                </li>
                <li>
                  <Email />
                  <span><a href={`mailto:${contactData.address.email}`} target="_blank" rel="noopener noreferrer">{contactData.address.email}</a></span>
                </li>
                <li>
                  <Web />
                  <span><a href={contactData.address.website} target="_blank" rel="noopener noreferrer">{contactData.address.website}</a></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="box2 map">
            <div className="content2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15054.639927034408!2d72.828734!3d19.38387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd1a4ca919d6a613!2sVidyavardhini%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1661270315076!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
