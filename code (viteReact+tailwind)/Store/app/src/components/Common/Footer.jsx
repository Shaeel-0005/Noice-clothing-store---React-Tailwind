
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a leading company in providing the best quality products and services to our customers. Your satisfaction is our priority.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400">
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">About</a></li>
            <li className="mb-2"><a href="#">Services</a></li>
            <li className="mb-2"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-gray-400">
            <li className="mb-2"><a href="#">Shop</a></li>
            <li className="mb-2"><a href="#">Track Order</a></li>
            <li className="mb-2"><a href="#">Customer support</a></li>
            <li className="mb-2"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400">
            <li className="mb-2">Email: info@company.com</li>
            <li className="mb-2">Phone: +923 181 900818</li>
            <li className="mb-2">Address: 123 Street, City, Country</li>
          </ul>
          <div className="mt-4">
            <a href="#" className="mr-2 text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="mr-2 text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="mr-2 text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Shaeel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
