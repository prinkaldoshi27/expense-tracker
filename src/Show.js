
import ListItem from "./ListItem"
import Loader from "./Loader";
import { useState, useEffect } from "react";
import MissingData from "./MissingData";
import ZeroData from "./ZeroData";

const Show = ({items, handleDelete, loading, setLoading, handleEdit}) => {
    const [search, setSearch] = useState('');
    const [resultItems, setResultItems] = useState([]);
    useEffect(() => {
      if (!Array.isArray(items)) return;
        category === 'All' ? 
        setResultItems((items.filter((item) =>
          (item.description.toLowerCase()).includes(search.toLowerCase())).reverse()) ) : 
          setResultItems((items.filter((item) =>
            (item.category.toLowerCase()).includes(category.toLowerCase()) &&
            (item.description.toLowerCase()).includes(search.toLowerCase())).reverse()) )
    }, [items, search])
  
  const [category, setCategory] = useState('All');

  return (
    <>
      <div style={{ width: "40%", margin: "auto", alignSelf: "center", marginTop: "1%" }}>
      <form className="d-flex" onSubmit={(e) => e.preventDefault()} >
        <input className="form-control me-sm-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />

        <select className="form-select" id="category" value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Utilities</option>
          <option>Groceries</option>
          <option>Entertainment</option>
        </select>
      </form>
    </div>
    {loading ? <Loader /> 
        : resultItems.length ? 
          <div style={{width: "40%", margin: "auto", alignSelf: "center", marginTop: "1%", height: "70vh", overflowY: "auto" }}>

        {resultItems.reverse().map((item) => (
          <ListItem key={item.id} item={item} handleDelete={handleDelete} handleEdit ={handleEdit}/>
        ))}
      </div> 
      :
          items.length === 0 ? <ZeroData /> :
          <MissingData />}
    </>
  )
}
export default Show