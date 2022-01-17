function About({data}) {

  if (data) {
    var name = data.name;
    //var profilepic = "images/" + data.image;
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
    <div>
      <p>{name}</p>
    </div>
  )
}

export default About
