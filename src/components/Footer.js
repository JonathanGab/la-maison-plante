import { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState("");


  const checkPassword = () => {
    setValidation()
  }
  const confirmEmail = () => {
    if (!inputValue.includes("@")) {
      setValidation(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide."
      );
    } else setValidation("");
  };
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionnés de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :{" "}
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={confirmEmail}
        />
        <p className="lmj-error">{validation}</p>
      </div>
    </footer>
  );
}

export default Footer;
