import { useState } from "react";

const Edit = ({ item, setIsEditing, handleEdit }) => {
    const [desc, setDesc] = useState(item.description);
    const [amount, setAmount] = useState(item.amount);
    const [category, setCategory] = useState(item.category);

    const handleSave = () => {
        const updatedItem = {
            ...item,
            description: desc,
            amount: amount,
            category: category,
        };

        handleEdit(updatedItem); 
        setIsEditing(false); 
    };

    return (
        <div className="p-3 border rounded">
            <h4>Edit Expense</h4>
            <input
                type="text"
                className="form-control mb-2"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <input
                type="number"
                className="form-control mb-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select className="form-select mb-2" id="category" value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option>Utilities</option>
                <option>Groceries</option>
                <option>Entertainment</option>
            </select>

            <button onClick={handleSave} className="btn btn-primary me-2">
                Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                Cancel
            </button>
        </div>
    );
};

export default Edit;
