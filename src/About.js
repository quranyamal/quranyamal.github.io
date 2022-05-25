export default function About(props) {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    {props.data.name.split(' ')[0]}
                    <span className="text-primary">
                        {props.data.name.substring(4, (props.data.name.split(' ')[0]).size)}
                    </span>
                </h1>
                <div className="subheading mb-5">
                    {props.data.label} · {props.data.location.countryCode} ·
                    <a href="mailto:udaamal27@gmail.com">{props.data.email}</a>
                </div>
                <p className="lead mb-5">{props.data.summary}</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/amalqurany/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/quranyamal"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    )
}