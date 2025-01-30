import { useState } from "react";
import api from "./api/items";
import AddedToast from "./AddedToast";

const Add = ({ items, setItems, }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Utilities");
  const [showToast, setShowToast] = useState(false); 
  const [error, setError] = useState("");
  const date = new Date();

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value <= 0) {
      setError("Amount must be greater than 0");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amount <= 0) {
      setError("Amount must be greater than 0");
      return; 
    }
    const newId =
      (Array.isArray(items) && items.length
        ? Math.max(...items.map(item => Number(item.id))) + 1
        : 1).toString();
    
    const newItem = {
      id: newId,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      description: desc,
      amount: amount,
      category: category,
    };

    try {
      await api.post("/items", newItem); 
      setShowToast(true); 
      setTimeout(() => setShowToast(false), 3000); 
      setDesc("");
      setAmount("");
      setCategory("Utilities");
      setItems([...items, newItem]);
      setError("");
    } catch (error) {
      console.error("Error adding item:", error);
      setItems([]);
    }
  };

  return (
    <div style={{ width: "40%", margin: "auto", alignSelf: "center", marginTop: "2%" }}>
      {showToast && <AddedToast />} 
{!showToast &&
        <form className="d-flex" onSubmit={handleSubmit} >
        <fieldset style={{ width: "100%" }}>
          <label className="col-form-label" htmlFor="desc">Description</label>
          <input required type="text" className="form-control" id="desc" placeholder="Enter Description"
              value={desc} onChange={(e) => setDesc(e.target.value)}/>

          <label className="col-form-label" htmlFor="amount">Amount</label>
          <input required type="number" className="form-control" id="amount" placeholder="Enter Amount"
              value={amount} onChange={(e) => { setAmount(e.target.value); handleAmountChange(e); }} 
            />
            {error && <div className="text-danger">{error}</div>}

          <label htmlFor="category" className="form-label mt-4">Select Category</label>
            <select className="form-select" id="category" value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option>Utilities</option>
            <option>Groceries</option>
            <option>Entertainment</option>
          </select>

            <button type="submit" style={{ marginTop: "5%" }} className="btn btn-primary">
            Submit
            </button>

            <p>
              
            </p>
        </fieldset>
        </form>}
    </div> 
  );
};

export default Add;
