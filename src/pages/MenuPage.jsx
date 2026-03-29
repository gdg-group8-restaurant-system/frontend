export default function MenuPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Menu</h1>
      <ul className="mt-4">
        <li><div className="py-2 border-b"
        >
            <h2 className="text-xl font-semibold">Pizza</h2>    
            <p className="text-gray-600">Delicious cheese and tomato pizza.</p>
            <span className="text-gray-500">$9.99</span>
            <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Add to Cart</button>
            <div className="mt-2">
              <label htmlFor="quantity" className="block text-sm">Quantity:</label>
              <input type="number" id="quantity" min="1" defaultValue="1" className="mt-1 border rounded w-16" />
            </div>
        </div>
        </li>
      </ul>
    </div>
  );
}
