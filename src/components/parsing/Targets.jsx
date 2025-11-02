export default function Targets({ data }) {
  if (!data) return null;

  return (
    <div>
      {Object.entries(data).map(([role, roleData]) => (
        <div key={role}>
          <h2 className="font-medium text-xl">{role.toUpperCase()}</h2>
          <ProfessionalSummary data={roleData.professional_summary} />
          <Skills data={roleData.skills} />
          <WorkExperience data={roleData.work_experience} />
          <Projects data={roleData.projects} />
        </div>
      ))}
    </div>
  );
}

export function Projects({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="font-medium text-xl">Projects</h2>
      {data.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div>
            {project.links.map((link, i) => (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ))}
          </div>
          <div>
            <h4>Tech Stack</h4>
            {project.techstack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function WorkExperience({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="font-medium text-xl">Work Experience</h2>
      {data.map((job, index) => (
        <div key={index}>
          <h3>
            {job.job_title} at {job.company_name}
          </h3>
          <p>
            {job.location} | {job.from} - {job.to}
          </p>
          <ul>
            {job.contributions.map((contribution, i) => (
              <li key={i}>{contribution}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Skills({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="font-medium text-xl">Skills</h2>
      {Object.entries(data).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-medium text-lg">{category}</h3>
          <div>
            {items.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProfessionalSummary({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="font-medium text-xl">{data.title}</h2>
      <p>{data.summary}</p>
    </div>
  );
}
