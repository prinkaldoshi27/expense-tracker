import { useState } from "react";
import Edit from "./Edit";

const ListItem = ({ item, handleDelete, handleEdit }) => {
    const [isEditing, setIsEditing] = useState(false);

    const getColor = (category) => {
        switch (category) {
            case "Utilities":
                return "#fef9e7";
            case "Entertainment":
                return "#fdedec";
            case "Groceries":
                return "#eafaf1";
            default:
                return "#ffffff";
        }
    };

    return (
        <div className="card border-secondary mb-3" style={{ backgroundColor: getColor(item.category) }}>
            {isEditing ? (
                <Edit item={item} setIsEditing={setIsEditing} handleEdit={handleEdit} />
            ) : (
                <>
                    <div className="card-header d-flex justify-content-between">
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                    </div>
                    <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between align-items-center mb-2 text-center">
                            <h4 className="card-title">₹ {item.amount}</h4>
                            <p className="m-0">{item.category}</p>
                                <div><button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger m-2">
                                Delete
                            </button>
                            <button onClick={() => setIsEditing(true)} className="btn btn-outline-primary">
                                Edit
                            </button>
                                </div>
                        </div>
                        <p className="card-text">{item.description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ListItem;
