import Add from "./Add";
import Navbar from "./Navbar";
import Show from "./Show";
import Tabs from "./Tabs";
import { BrowserRouter as Router ,Routes, Route, } from 'react-router-dom';
import api from "./api/items";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/items");
        setItems(response.data || []); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setItems([]);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000)

    const getTotal = () => {
      if (!Array.isArray(items)) return;
      let totalAmt = 0;
      items.forEach((item) => {
        totalAmt += parseFloat(item.amount);
      });
      setTotal(totalAmt);
    };

    if (items.length > 0) {
      getTotal();
    }
  }, [items]);

  const handleDelete = async (id) => {
    if (!Array.isArray(items)) return;
    try {
      await api.delete(`/items/${id}`);
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  const handleEdit = async (updatedItem) => {
        try {
          const res = await api.put(`/items/${updatedItem.id}`, updatedItem);
          setItems(items.map(item => item.id === updatedItem.id ? { ...res.data } : item));
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
  }

  return (
    <>
  
    <Router>
      <div className="app-container">
        <Navbar />
          <Tabs />
        <div className="content">
          <Routes>
            <Route path="/show-expenses" element={<Show items={items} setItems={setItems} handleDelete={handleDelete} loading={loading} setLoading={setLoading} handleEdit={handleEdit} />} />
            <Route path="/add-expenses" element={<Add items={items} setItems={setItems} />} />
          </Routes>
        </div>
        <Footer total={total} />
      </div>
</Router>
    </>
  );
}

export default App;
