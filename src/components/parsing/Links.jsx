export default function Links({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="text-xl font-medium">Links</h2>
      <ul>
        {data.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name} - {link.url_text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}