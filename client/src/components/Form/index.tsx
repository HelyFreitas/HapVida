import * as C from "./styles";

interface FormProps {
  title: string;
  paragraph: string;
  button: string;
}

export const Form = (props: FormProps) => {
  return (
    <C.BedroomContent>
      <C.AlignItens>
        <div className="bedroom-contents-texts">
          <h1 className="bedroom-content-title">{props.title}</h1>
          <p className="bedroom-content-p">{props.paragraph}</p>
        </div>

        <C.Form>
          <input className="inputs-bedroom" type="text" placeholder="Nome" />
          <input className="inputs-bedroom" type="email" placeholder="E-mail" />
          <input
            className="inputs-bedroom"
            type="tel"
            placeholder="Celular / Whatsapp"
          />
        </C.Form>
        <C.Selects>
          <select className="inputs-selects-bedroom">
            <option value="">Estado</option>
          </select>
          <select className="inputs-selects-bedroom">
            <option value="">Cidade</option>
          </select>
          <select className="inputs-selects-bedroom">
            <option value="">Seu perfil</option>
          </select>
        </C.Selects>
        <div className="btn-bedroom-content">
          <button className="bedroom-btn">{props.button}</button>
        </div>
      </C.AlignItens>
    </C.BedroomContent>
  );
};
