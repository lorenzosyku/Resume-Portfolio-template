function Testimonials({ data }) {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <div className="border shadow-lg shadow-cyan-500 rounded-lg m-5">
          <li key={testimonials.user} className="p-5 ">
            <blockquote className="space-y-5">
              <p className="italic">{testimonials.text}</p>
              <cite className="font-bold text-xl">{testimonials.user}</cite>
            </blockquote>
          </li>
        </div>
      );
    });
  }

  return (
    <section
      className="p-5 m-5 text-gray-300"
      id="testimonials"
    >
      <h1 className="font-semibold text-2xl">
        <span>Client Testimonials</span>
      </h1>
      <div className="">
        <div className="">
          <div className=""></div>
          <div className="">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
