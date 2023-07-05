import { translate } from "./Translate";

function Footer(props) {
  let content = {
    footer: {
      en: "Helen built this in 2023",
      nl: "Helen heeft dit gebouwd in 2023",
    },
  };

  let currentLanguage = props.language;

  return (
    <div className="footer-container">
      <footer className="inter-grey">
        &#10084; {translate(content.footer, currentLanguage)} &#10084;
      </footer>
    </div>
  );
}

export default Footer;
