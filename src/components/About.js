function About({ data }) {
  if (data) {
    var name = data.name;
    console.log(name);
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
    <section className="block p-5 bg-prussian-blue-50 text-gray-300" id="about">
      <div className="max-w-6xl mx-auto flex space-x-8 my-10">
        <div className="three columns">
          <img
            className="hidden md:flex justify-items-start object-contain w-34 h-34 rounded-full "
            src={profilepic}
            alt="Profile Pic"
          />
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-2xl">About Me</h2>
          <p className="">{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2 className="font-semibold text-2xl mb-3">Contact Details</h2>
              <p>
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
            <div className="mt-5">
              <p className="italic mt-2">
                <a href={resumeDownload} className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>Download Resume</p>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
