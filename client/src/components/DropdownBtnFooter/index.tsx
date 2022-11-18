import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import { useState } from "react";
import "./styles.css";

export const DropdownBtnFooter = () => {
  const [state, setState] = useState<boolean>();

  return (
    <>
      <div className="dropdown2">
        <button
          onMouseOver={() => {
            setState(true);
          }}
          onMouseOut={() => {
            setState(false);
          }}
          className="dropbtn2"
        >
          Acesse sua área&nbsp;
          {state ? (
            <>
              <CaretCircleUp size={20} color="#0054b8" />
            </>
          ) : (
            <>
              <CaretCircleDown size={20} color="#0054b8" />
            </>
          )}
        </button>
        <div className="dropdown-content2">
          <a href="/beneficiaries">Beneficiários</a>
          <a href="/providers">Corretores</a>
          <a href="/broker">Prestadores</a>
          <a href="/plans">Quero ser cliente</a>
        </div>
      </div>
    </>
  );
};
