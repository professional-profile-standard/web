export default function Targets({ data }) {
  if (!data) return null;

  return (
    <div>
      {Object.entries(data).map(([role, roleData]) => (
        <div key={role} className="space-y-3">
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
      <h3 className="font-medium text-xl mb-2">Projects</h3>
      {data.map((project, index) => (
        <div key={index}>
          <h3 className="font-medium">{project.name}</h3>
          <p>{project.description}</p>
          <div>
            {project.links.map((link, i) => (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ))}
          </div>
          <div>
            <p>
              Tech Stack:{" "}
              {project.techstack.map((tech, i) => (
                <span key={i}>{tech}, </span>
              ))}
            </p>
          </div>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i} className="list-disc list-inside">{detail}</li>
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
      <h3 className="font-medium text-xl mb-2">Work Experience</h3>
      <div className="space-y-4">
        {data.map((job, index) => (
          <div key={index} className="">
            <h4 className="font-medium">
              {job.job_title} at {job.company_name}
            </h4>
            <p>
              {job.location} | {job.from} - {job.to}
            </p>
            <ul>
              {job.contributions.map((contribution, i) => (
                <li key={i} className="list-disc list-inside">
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills({ data }) {
  if (!data) return null;

  return (
    <div>
      <h3 className="font-medium text-xl mb-2">Skills</h3>
      <table className="w-full">
        <tbody>
          {Object.entries(data).map(([category, items]) => (
            <tr key={category} className="odd:bg-gray-100">
              <td className="p-2">
                <h3 className="font-medium text-lg">{category}</h3>
              </td>
              <td className="p-2">
                {items.map((item, index) => (
                  <span key={index}>{item}, </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProfessionalSummary({ data }) {
  if (!data) return null;

  return (
    <div>
      <h3 className="font-medium text-xl mb-2">{data.title}</h3>
      <p>{data.summary}</p>
    </div>
  );
}
