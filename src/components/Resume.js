function Resume({data}) {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="mb-2">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="mb-2">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <div key={skills.name}>
        <li >
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
        </div>
        
      );
    });
  }

  return (
    <section className="block p-5 m-5 space-y-5" id="resume">
      <div className="mt-5">
        <div className="">
          <h1 className="font-bold">
            <span>Education</span>
          </h1>
        </div>

        <div className="">
          <div className="">
            <div className="p-5">{education}</div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h1 className="font-bold">
            <span>Work</span>
          </h1>
        </div>

        <div className="p-5">{work}</div>
      </div>
      
      <div className="">
        <div className="">
          <h1 className="font-bold">
            <span>Skills</span>
          </h1>
        </div>

        <div className="p-5">
          <p>{skillmessage}</p>

          <div className="">
            <ul className="">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume
