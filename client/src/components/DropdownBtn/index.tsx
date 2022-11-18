import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import { useState } from "react";
import * as C from "./styles";
import "./styles.css";

export const DropdownBtn = () => {
  const [state, setState] = useState<boolean>();

  return (
    <>
      <div className="dropdown">
        <button
          onMouseOver={() => {
            setState(true);
          }}
          onMouseOut={() => {
            setState(false);
          }}
          className="dropbtn"
        >
          Acesse sua área&nbsp;
          {state ? (
            <>
              <CaretCircleUp size={16} color="#0054b8" />
            </>
          ) : (
            <>
              <CaretCircleDown size={16} color="#0054b8" />
            </>
          )}
        </button>
        <div className="dropdown-content">
          <a href="/beneficiaries">Beneficiários</a>
          <a href="/providers">Corretores</a>
          <a href="/broker">Prestadores</a>
          <a href="/plans">Quero ser cliente</a>
        </div>
      </div>
    </>
  );
};
