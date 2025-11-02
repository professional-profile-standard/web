import { useState, useEffect } from "react";
import { parse } from "yaml";
import Educations from "./Educations";
import PersonalDetails from "./PersonalDetails";
import Links from "./Links";
import Misc from "./Misc";
import Targets from "./Targets";

export default function Parse() {
  const [yaml, setYaml] = useState("");
  const [error, setError] = useState(null);
  const [pps, setPps] = useState(null);

  useEffect(() => {
    async function f() {
      try {
        const params = new URLSearchParams(new URL(document.location).search);

        const pps_src = params.get("src");
        const pps_text = params.get("text");

        if (pps_src) {
          const res = await fetch(pps_src);
          const data = await res.text();
          setYaml(data);
        } else if (pps_text) {
          setYaml(pps_text);
        }
      } catch (e) {
        setError(e.message);
      }
    }
    f();
  }, []);

  useEffect(() => {
    console.log(yaml);
    try {
      const pps = parse(yaml);
      setPps(pps);
      setError(null);
    } catch (e) {
      setError(e.message);
      setPps(null);
    }
  }, [yaml]);

  return (
    <div>
      <div className="my-5">
        <label for="pps-textarea" className="block mb-2 text-lg">
          Enter your profile
        </label>
        <textarea
          id="pps-textarea"
          className="block border w-full h-30 rounded p-2"
          placeholder="PPS YAML file content"
          value={yaml}
          onChange={(e) => setYaml(e.target.value)}
        ></textarea>
      </div>

      <div className="error">{error}</div>

      {pps && (
        <div>
          <div className="space-y-10">
            <PersonalDetails data={pps.personal_details} />
            <Educations data={pps.educations} />
            <Targets data={pps.targets} />
            <Links data={pps.links} />
            <Misc data={pps.misc} />
          </div>
        </div>
      )}
    </div>
  );
}
