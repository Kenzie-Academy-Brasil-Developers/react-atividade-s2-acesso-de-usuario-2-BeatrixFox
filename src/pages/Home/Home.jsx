import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Instruction from "../Instruction/Instruction";
import "./Home.css";

export const Home = ({ members }) => {
  return (
    <div className="areaMembers">
      <Instruction />
      <Form members={members} />
      {members.map((member) =>
        member.type === "pj" ? (
          <Link to={`/company/${member.id}`} key={member.id}>
            {member.name}
          </Link>
        ) : (
          <Link to={`/customer/${member.id}`} key={member.id}>
            {member.name}
          </Link>
        )
      )}
    </div>
  );
};
export default Home;
