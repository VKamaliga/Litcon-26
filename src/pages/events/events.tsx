import "./events.css";

const technical = [
  {
    title: "CodeVerse",
    desc: "Competitive Coding Challenge",
  },
];

const semiTechnical = [
  {
    title: "Design Nexus",
    desc: "UI/UX Design Competition",
  },
  {
    title: "QuizVerse",
    desc: "Technical Quiz",
  },
  {
    title: "Pitch Portal",
    desc: "Startup Pitching Competition",
  },
];

const literary = [
  {
    title: "Story Weaver",
    desc: "Creative Writing",
  },
  {
    title: "Verse Battle",
    desc: "Poetry Competition",
  },
  {
    title: "Lit Debate",
    desc: "Debate Competition",
  },
];

function Events() {
  return (
    <div className="events-page">

      <div className="events-header">
        <h1 className="events-title">
          EXPLORE EVENTS
        </h1>
      </div>

      {/* TECHNICAL */}

      <section>
        <h2 className="technical-heading">
          TECHNICAL
        </h2>

        <div className="event-grid">
          {technical.map((event) => (
            <div className="event-card technical" key={event.title}>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <button>View Event</button>
            </div>
          ))}
        </div>
      </section>

      {/* SEMI */}

      <section>
        <h2 className="semi-heading">
          SEMI-TECHNICAL
        </h2>

        <div className="event-grid">
          {semiTechnical.map((event) => (
            <div className="event-card semi" key={event.title}>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <button>View Event</button>
            </div>
          ))}
        </div>
      </section>

      {/* LITERARY */}

      <section>
        <h2 className="literary-heading">
          LITERARY
        </h2>

        <div className="event-grid">
          {literary.map((event) => (
            <div className="event-card literary" key={event.title}>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <button>View Event</button>
            </div>
          ))}
        </div>
      </section>

      <div className="city-skyline"></div>

    </div>
  );
}

export default Events;