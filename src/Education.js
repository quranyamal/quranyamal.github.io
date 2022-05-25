export default function Education(props) {
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{props.data[0].institution}</h3>
                        <div className="subheading mb-3">{props.data[0].degree}</div>
                        <div><strong>Final Project:</strong> {props.data[0].finalProject}</div>
                        <p><strong>Judicium:</strong> {props.data[0].judicium}</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">
                    {props.data[0].start} - {props.data[0].end}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}