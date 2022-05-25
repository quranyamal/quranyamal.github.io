export default function Work(props) {
  return (
    <section className="resume-section" id="work">
      <div className="resume-section-content">
        <h2 className="mb-5">Work & Internship</h2>
        {props.data.map((work) => (
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{work.position}</h3>
              <div className="subheading mb-3">{work.name}</div>
              <p>{work.summary}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{work.start} - {work.end}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}