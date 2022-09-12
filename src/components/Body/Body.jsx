import Repositories from "../Repositories/Repositories";
import Notes from "../Notes/Notes";

export default function Body() {
  return (
    <div className="Body">
      <Notes />
      <Repositories />
    </div>
  );
}
