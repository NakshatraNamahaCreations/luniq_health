import React from 'react';
import './Testimonials.css';
import men1 from '../assets/testimonials/men1.png';
import men2 from '../assets/testimonials/men2.png';
import lady3 from '../assets/testimonials/lady3.png';
import lady2 from '../assets/testimonials/lady2.png';


const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ram Marathe",
      content: "One. Of. The. Best services.So punctual. Very hardworking and generous, they have handled the patient Radha Marathe Very efficiently, delicately, There's no words to say. Hats off to the services.",
      avatar: men1
    },
    {
      id: 2,
      name: "Gopal karpe",
      content: "We engaged a caretaker from Luniq Health  for a period of five months, and we are extremely satisfied with the service provided. The caretaker was puntual, responsible, and genuinely very attentive to our needs. He has handled our patient so well and with due care, and a strong work ethic throughout his time with us.",
      avatar: men2
    },
    {
      id: 3,
      name: "Sapnesh Vaigankar",
      content: "Thank you for your help and service A Bitu was rally good, Took good care of my father and surely will recommend your company and if anyting needed will get back you. Once again a big thank you.",
      avatar: men1
    },
    {
      id: 4,
      name: "Neela",
      content: "Thank you Luniq Health, we felt supported, secure every step and we'll cared during a challenging time. Much appreciated.",
      avatar: lady3
    },
    {
      id: 5,
      name: "Teb HQ",
      content: "I cannot recommend Luniq Health highly enough for their exceptional services. From the moment we reached out, their office staff member, Alka, demonstrated unparalleled compassion, professionalism, and dedication to ensuring our loved one received the best possible care. I wholeheartedly recommend their services to anyone seeking compassionate, reliable support for their family.",
      avatar: men2
    },
    {
      id: 6,
      name: "Sunitha",
      content: "One of the best service providers for those looking for Home Nurses and Caretakers.I highly recommend Life Save Home Care, as the overall service experience was very professional.",
      avatar: lady2
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Hear from our satisfied clients about their experience with LUNIQ Health
          </p>
        </div>
        
        <div className="testimonials-marquee">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.content}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <h4 className="author-name">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
