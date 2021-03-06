import { useState } from "react";

function Contact({ data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section className="max-w-3xl mx-auto p-5 m-5 bg-prussian-blue-50 text-gray-300" id="contact">
      <div className="mb-5">
        <div>
          <p className="font-semibold text-2xl">{contactMessage}</p>
        </div>
      </div>

      <div className="sm:flex flex-grow">
        <div>
          <form
            className="flex flex-col max-w-2xl mx-auto mb-10"
            onSubmit={submitForm}
          >
            <fieldset>
              <div className="mb-5">
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactSubject">Subject</label>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  type="text"
                  defaultValue=""
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-400 outline-none focus:ring"
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={submitForm}
                  type="submit"
                  className="bg-cyan-700 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer mt-5"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          
        </div>

        <div className="grid grid-cols-1 place-content-center">
          <div className="p-5">
            <h4>Contact Me: </h4>
            <p className="pt-3">
              <span>{contactName}</span>
              <br />
              <span>
                {street}
                <br />
                {city} {state} {zip}
              </span>
              <br />
              <span>{phone}</span>
              <br />
              <span>{contactEmail}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
