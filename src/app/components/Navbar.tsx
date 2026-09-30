<nav id="nav">
  <button className="nlogo-wrap" onClick={() => navTo("#hero")}>
    <img
      src="https://i.imgur.com/oHEWOYS.png"
      alt="Rally Co."
      style={{ height: "36px", width: "auto", display: "block" }}
    />
  </button>

  <div className="nlinks">
    <button
      className="nl"
      data-section="services"
      onClick={() => navTo("#services")}
    >
      Services
    </button>

    <button
      className="nl"
      data-section="team"
      onClick={() => navTo("#team")}
    >
      Team
    </button>

    <button
      className="nl"
      data-section="about"
      onClick={() => navTo("#about")}
    >
      About
    </button>

    <button
      className="nl"
      data-section="contact"
      onClick={() => navTo("#contact")}
    >
      Contact
    </button>

    <button className="ncta" onClick={() => navTo("#contact")}>
      Start Project →
    </button>
  </div>
</nav>
const navTo = (section: string) => {
    document.querySelector(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };