import { Link } from "react-router-dom";
import * as C from "./styles";

export const ModalRoutes = ({ active }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <C.Container>
      <div className="x-sidebar" onClick={closeSidebar}></div>
      <C.Content>
        <div className="links-drop">
          <Link className="links-modal-routes" to="/beneficiaries">
            Beneficiários
          </Link>
          <Link className="links-modal-routes" to="/broker">
            Corretores
          </Link>
          <Link className="links-modal-routes" to="/providers">
            Prestadores
          </Link>
          <Link className="links-modal-routes" to="/plans">
            Quero ser cliente
          </Link>
        </div>
      </C.Content>
    </C.Container>
  );
};
