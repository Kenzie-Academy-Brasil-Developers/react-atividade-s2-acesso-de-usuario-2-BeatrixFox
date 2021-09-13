import { Link, useParams } from "react-router-dom";

export const Company = ({ members }) => {
  const params = useParams();
  const member = members.find((member) => member.id === params.id);
  return (
    <>
      <div>
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
};
export default Company;
