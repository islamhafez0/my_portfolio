import { certificateItemsDetails } from "../../../../constants";
import { IoOpenOutline } from "react-icons/io5";

const CertificatesContent = () => {
  return (
    <ul className="flex flex-col gap-4">
      {certificateItemsDetails.map((item, index) => (
        <li key={index} className="flex">
          <a
            href={item.link}
            target="_blank"
            className="border-b-white flex flex-wrap items-center gap-1 font-medium hover:text-gray-500 transition-all"
          >
            {item.name},
            <span className="text-gray-500 text-sm italic font-normal">
              {item.subname}
            </span>
            <IoOpenOutline
              className="text-gray-500 font-normal italic"
              size={18}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CertificatesContent;
