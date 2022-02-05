function Footer({data}) {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="grid grid-cols-1 place-content-center p-5 m-5">
        <div className="">
          <ul className="social-links">{networks}</ul>

          <div className="grid grid-cols-1 place-content-center">
            <h3 className="">
              Made by{" Lorenzo Syku"}
            </h3>
          </div>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
