
const Pricing = () => {
    const pricingOption = [
        { id: 1, name: "Free", price: 0 },
        { id: 2, name: "Medium", price: 9.99 },
        { id: 3, name: "Premium", price: 19.99 },
    ];
    return (
        <div>
            <h1 className="text-5xl font-bold bg-indigo-300 text-white p-12 mt-4">Best Deal of the Town</h1>
        </div>
    );
};

export default Pricing;