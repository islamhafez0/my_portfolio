import { Link } from "react-router-dom";
import { profileNavItems } from "../../constants";
import profileImage from "../../assets/profile.svg";
import TabContent from "./TabContent";
import { useEffect } from "react";

const ProfileLayout = () => {
  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <h3 className="text-3xl font-medium text-gray-200 mb-8">My Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8">
          <aside className={`border border-gray-600 p-4 rounded-md col-span-1`}>
            <div className="flex gap-4 items-center pb-3 border border-x-0 border-t-0 border-gray-600">
              <li className="w-16 h-16 bg-white rounded-full grid place-content-center">
                <img src={profileImage} alt="profile" className="w-14 h-14" />
              </li>
              <span>
                <h5 className="text-2xl font-bold mb-1">Eslam Hafez</h5>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </span>
            </div>
            <ul className="list-none mt-4">
              {profileNavItems.map((item) => (
                <li
                  key={item.url}
                  className={`${
                    location.pathname === item.url && "bg-gray-900 rounded-md"
                  }`}
                >
                  <Link className="block p-4" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <TabContent />
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
