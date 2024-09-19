
const sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-100 p-4 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0 lg:w-64`}
    >
      <button
        className="lg:hidden mb-4 text-gray-700"
        onClick={toggleSidebar}
      >
        Close
      </button>
      {/* Product Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sort by Price */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Sort by Price</h2>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <ul>
          <li className="mb-2">
            <input type="checkbox" id="category1" className="mr-2" />
            <label htmlFor="category1">Category 1</label>
          </li>
          <li className="mb-2">
            <input type="checkbox" id="category2" className="mr-2" />
            <label htmlFor="category2">Category 2</label>
          </li>
          <li className="mb-2">
            <input type="checkbox" id="category3" className="mr-2" />
            <label htmlFor="category3">Category 3</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
