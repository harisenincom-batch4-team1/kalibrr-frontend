import { Link } from "react-router-dom";

const FooterItem = ({ title, link }) => {
  return (
    <li className="mb-4">
      <Link to={link} className="hover:underline">
        {title}
      </Link>
    </li>
  );
};

export default FooterItem;