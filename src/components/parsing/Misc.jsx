export default function Misc({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="font-medium text-xl">Misc</h2>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <h3 className="font-medium text-lg">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
          {typeof value === 'object' && !Array.isArray(value) ? (
            <dl>
              {Object.entries(value).map(([question, answer], index) => (
                <div key={index}>
                  <dt>{question}</dt>
                  <dd>{answer}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p>{value}</p>
          )}
        </div>
      ))}
    </div>
  );
}