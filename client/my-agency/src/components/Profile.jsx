import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaLocationArrow,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBlog,
  FaEdit,
} from "react-icons/fa";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    jobType: "Freelancer",
    location: "New York, USA",
    bio: "Passionate blogger, developer, and tech enthusiast.",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      blog: "https://johndoeblog.com",
    },
    profileImage: "https://via.placeholder.com/150",
  });

  const [editing, setEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("socialLinks.")) {
      const key = name.split(".")[1];
      setUpdatedData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [key]: value,
        },
      }));
    } else {
      setUpdatedData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    setProfileData(updatedData);
    setEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Profile Image */}
      <div className="relative flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src={editing ? updatedData.profileImage : profileData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {editing && (
          <input
            type="text"
            name="profileImage"
            value={updatedData.profileImage}
            onChange={handleInputChange}
            placeholder="Profile Image URL"
            className="mt-2 border rounded-md p-2 w-full"
          />
        )}
      </div>

      {/* Profile Information */}
      <div className="space-y-6">
        {/* Name */}
        <div className="flex items-center space-x-3">
          <FaUser className="text-xl text-indigo-600" />
          {editing ? (
            <input
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800">
              {profileData.name}
            </h2>
          )}
        </div>

        {/* Bio */}
        {editing ? (
          <textarea
            name="bio"
            value={updatedData.bio}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
        ) : (
          <p className="text-gray-600">{profileData.bio}</p>
        )}

        {/* Job Type */}
        <div className="flex items-center space-x-3">
          <FaBriefcase className="text-xl text-indigo-600" />
          {editing ? (
            <input
              type="text"
              name="jobType"
              value={updatedData.jobType}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          ) : (
            <p className="text-gray-800">{profileData.jobType}</p>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3">
          <FaLocationArrow className="text-xl text-indigo-600" />
          {editing ? (
            <input
              type="text"
              name="location"
              value={updatedData.location}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          ) : (
            <p className="text-gray-800">{profileData.location}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-xl text-indigo-600" />
          {editing ? (
            <input
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          ) : (
            <p className="text-gray-800">{profileData.email}</p>
          )}
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Social Links</h3>
          {["twitter", "linkedin", "github", "blog"].map((platform) => (
            <div key={platform} className="flex items-center space-x-3">
              {editing ? (
                <input
                  type="text"
                  name={`socialLinks.${platform}`}
                  value={updatedData.socialLinks[platform]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${platform} URL`}
                  className="border rounded-md p-2 w-full"
                />
              ) : (
                <a
                  href={profileData.socialLinks[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  {platform === "twitter" && <FaTwitter className="text-2xl" />}
                  {platform === "linkedin" && <FaLinkedin className="text-2xl" />}
                  {platform === "github" && <FaGithub className="text-2xl" />}
                  {platform === "blog" && <FaBlog className="text-2xl" />}
                  <span className="ml-2">{platform}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Edit/Save Buttons */}
      <div className="space-y-4">
        {editing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-800 focus:outline-none"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-800 focus:outline-none"
          >
            <FaEdit className="inline mr-2" /> Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
