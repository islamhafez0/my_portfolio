import { useParams } from "react-router-dom";
import MeContent from "../MeContent";
import EducationContent from "../EducationContent";
import CertificatesContent from "../CertificatesContent";
import LinksContent from "../LinksContent";
const TabContent = () => {
  const { tab } = useParams();
  return (
    <div className="col-span-2">
      {tab === "me" && <MeContent />}
      {tab === "certificates" && <CertificatesContent />}
      {tab === "education" && <EducationContent />}
      {tab === "links" && <LinksContent />}
    </div>
  );
};

export default TabContent;
