
const SocialMediaSidebar = () => {
  const socialMediaLinks = [
    {
      iconClass: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/YourPage',
      color: '#1877F2', // Facebook color
    },
    {
      iconClass: 'fab fa-twitter',
      url: 'https://twitter.com/YourTwitter',
      color: '#1DA1F2', // Twitter color
    },
    {
      iconClass: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/yourprofile/',
      color: '#0077B5', // LinkedIn color
    },
    {
      iconClass: 'fab fa-instagram',
      url: 'https://www.instagram.com/yourprofile/',
      color: '#E4405F', // Instagram color
    },
    // Add more social media links as needed
  ];

  // Define a function to check if the screen size is small (e.g., less than 640px width)
  const isSmallScreen = () => window.innerWidth < 640;

  return (
    <div className={`social-media-sidebar fixed top-1/4 left-4 p-4 rounded-lg ${isSmallScreen() ? 'hidden' : ''}`}>
      <ul className="space-y-4 lg:space-y-0">
        {socialMediaLinks.map((link, index) => (
          <li key={index} className="lg:mb-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <i className={`${link.iconClass} text-4xl`} style={{ color: link.color, marginRight: '10px' }}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaSidebar;
