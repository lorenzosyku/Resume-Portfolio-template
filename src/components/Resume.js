import ProgressBar from "./ProgressBar";

function Resume({ data }) {
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
      return (
        <div key={skills.name}>
          <li>
            <em>{skills.name}</em>
            <ProgressBar bgcolor={"#003459"} completed={skills.level} />
          </li>
        </div>
      );
    });
  }

  return (
    <section
      className="block p-5 bg-cg-blue-50 my-10 text-gray-200"
      id="resume"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mt-5">
          <div className="">
            <h1 className="font-semibold text-2xl">
              <span>Education</span>
            </h1>
          </div>

          <div className="mt-5">
            <div className="p-5">{education}</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <h1 className="font-semibold text-2xl">
              <span>Work</span>
            </h1>
          </div>
          <div className="mt-5">
            <div className="p-5">{work}</div>
          </div>
        </div>

        {/*<div className="mt-20 mb-20">
          <div className="">
            <h1 className="flex justify-center font-semibold text-2xl max-w-4xl mx-auto">
              <span>Skills</span>
            </h1>
          </div>

          <div className="pt-5 italic">
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-5">{skills}</ul>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}

export default Resume;
