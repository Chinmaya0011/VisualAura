import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBriefcase, FaLocationArrow, FaTwitter, FaLinkedin, FaGithub, FaBlog, FaLock } from 'react-icons/fa';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    jobType: 'Freelancer',
    location: 'New York, USA',
    bio: 'Passionate blogger, developer, and tech enthusiast.',
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      blog: 'https://johndoeblog.com',
    },
    profileImage: 'https://via.placeholder.com/150',
  });

  const handlePasswordChange = () => {
    // Logic for changing the password
    alert('Password change functionality will be implemented here!');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Profile Image */}
      <div className="relative flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="space-y-6">
        {/* Name */}
        <div className="flex items-center space-x-3">
          <FaUser className="text-xl text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-800">{profileData.name}</h2>
        </div>

        {/* Bio */}
        <p className="text-gray-600">{profileData.bio}</p>

        {/* Job Type */}
        <div className="flex items-center space-x-3">
          <FaBriefcase className="text-xl text-indigo-600" />
          <p className="text-gray-800">{profileData.jobType}</p>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3">
          <FaLocationArrow className="text-xl text-indigo-600" />
          <p className="text-gray-800">{profileData.location}</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-xl text-indigo-600" />
          <p className="text-gray-800">{profileData.email}</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaTwitter className="text-2xl" />
          </a>
          <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaGithub className="text-2xl" />
          </a>
          <a href={profileData.socialLinks.blog} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaBlog className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Additional Options */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Options</h3>
        <div className="flex items-center space-x-3">
          <FaLock className="text-xl text-indigo-600" />
          <button
            onClick={handlePasswordChange}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-800 focus:outline-none"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
