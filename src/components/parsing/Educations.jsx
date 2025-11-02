export default function Educations({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="text-xl font-medium">Education</h2>
      {data.map((education, index) => (
        <div key={index}>
          <h3>{education.name}</h3>
          <p>{education.location}</p>
          <p>
            {education.from} - {education.to}
          </p>
          <p>
            {education.degree_name} in {education.field_of_study}
          </p>
          <ul>
            {education.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
