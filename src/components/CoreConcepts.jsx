import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Consept</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
