export default function CartPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <ul className="mt-4">
                <li className="py-2 border-b">
                    <h2 className="text-xl font-semibold">Pizza</h2>
                    <p className="text-gray-600">Delicious cheese and tomato pizza.</p>
                    <span className="text-gray-500">$9.99</span>
                    <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Remove from Cart</button>
                </li>
            </ul>
        </div>
    );
}
