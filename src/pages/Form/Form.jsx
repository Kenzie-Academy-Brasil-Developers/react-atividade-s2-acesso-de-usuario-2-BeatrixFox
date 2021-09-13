import { useState } from "react";
import "./Form.css";

export const Form = ({ members }) => {
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberType, setNewMemberType] = useState("");
  const addMembers = (name, type) => {
    const id = members.length + 1;
    type === "cliente"
      ? members.push({ id: `${id}`, name: name, type: "pf" })
      : members.push({ id: `${id}`, name: name, type: "pj" });
    setNewMemberName("");
    setNewMemberType("");
  };

  return (
    <section className="newMembers">
      <label for="name">Nome</label>
      <input
        id="name"
        className="addName"
        type="text"
        value={newMemberName}
        onChange={(event) => setNewMemberName(event.target.value)}
      />
      <label for="typePerson">Tipo</label>
      <input
        id="typePerson"
        className="addTypePerson"
        type="text"
        value={newMemberType}
        onChange={(event) => setNewMemberType(event.target.value)}
        placeholder="digite cliente ou empresa"
      />
      <button onClick={() => addMembers(newMemberName, newMemberType)}>
        Enviar
      </button>
    </section>
  );
};

export default Form;
