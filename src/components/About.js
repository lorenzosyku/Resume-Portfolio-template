function About({data}) {

  if (data) {
    var name = data.name;
    console.log(name)
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section className="block p-5 bg-blue-marguerite-500 " id="about">
      <div className="max-w-6xl mx-auto flex space-x-8 my-10">
        <div className="three columns">
          <img
            className="hidden md:flex justify-items-start object-contain w-34 h-34 rounded-full "
            src={profilepic}
            alt="Profile Pic"
          />
        </div>
        <div className="space-y-5">
          <h2 className="font-bold">About Me</h2>
          <p className="">{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2 className="font-bold mb-3">Contact Details</h2>
              <p >
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state} {zip}
                </span>
                  <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p className="italic mt-2">
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
