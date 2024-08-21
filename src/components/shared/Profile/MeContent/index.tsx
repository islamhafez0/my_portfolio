import { personalItemsDetails } from "../../../../constants";
import hand from "/assets/hand.png";
const MeContentTab = () => {
  return (
    <div>
      <p className="text-gray-300 font-medium">
        <img className="w-8 h-8 mb-3" src={hand} alt="hand" />
        I’m a self-taught frontend developer driven by a love for crafting
        beautiful, user-friendly websites. I’m a quick learner, dedicated to
        growing my skills, and I thrive in collaborative environments.
      </p>
      <h3 className="my-4 text-2xl font-bold m-auto">What I Bring:</h3>
      <ul className="list-disc ml-10">
        {personalItemsDetails.map((item) => (
          <li className="mb-4 text-gray-400" key={item.key}>
            {item.itemTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeContentTab;
