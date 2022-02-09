function Portfolio({ data }) {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="">
          <div className="group">
            <a href={projects.url} title={projects.title}>
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg"
                alt={projects.title}
                src={projectImage}
              />
              <div className="py-3 pl-3">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section
      className="p-5 bg-cyan-700 text-gray-200"
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto ">
        <h1 className="font-semibold text-2xl my-5">My Previous Works</h1>
        <div className="">
          <div className="">
            <div
              id="portfolio-wrapper"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 cursor-pointer overflow-hidden"
            >
              {projects}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
