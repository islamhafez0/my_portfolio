import { personalItemsDetails } from "../../../constants";
import hand from "../../../assets/hand.png";
const MeContentTab = () => {
  return (
    <div>
      <p className="text-gray-300 font-medium">
        <img className="w-8 h-8 mb-3" src={hand} alt="hand" />
        Welcome to My Portfolio! Enthusiastic Self-Taught Frontend Developer
        with Dedication, Quick Learning, and Collaborative Spirit.
      </p>
      <ul>
        <h3 className="my-4 text-2xl font-bold">What I Offer:</h3>
        {personalItemsDetails.map((item) => (
          <li className="ps-6 mb-4 text-gray-400" key={item.key}>
            {item.itemTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeContentTab;
