import {useState} from 'react';

function Testimonials({data}) {
  //const [selectedId, setSelectedId] = useState(null)
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <div>
          <li key={testimonials.user} className="flexslider">
          <blockquote className="slidese">
            <p>{testimonials.text}</p>
            <cite >{testimonials.user}</cite>
          </blockquote>
         </li>
        </div>
        
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <ul className="slides ">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials
