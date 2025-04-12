import { useId, useState, } from "react";

const Card = ({ entry, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = useId();

  return (
    <>
      <div
        className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <figure>
          <img
            src={entry.imageUrl || "/placeholder.jpg"}
            alt={entry.title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.jpg";
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{entry.title}</h2>
          <p className="text-sm text-gray-400">{entry.date}</p>
          <button
            className="btn btn-xs bg-gray-800 "
            onClick={(e) => {
                e.stopPropagation(); 
                onDelete();          
              }}>
            Delete
          </button>
        </div>
      </div>



      <input
        type="checkbox"
        id={modalId}
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-2xl">
          
          <img
            src={entry.imageUrl || "/placeholder.jpg"}
            alt={entry.title}
            className="w-full h-64 object-cover rounded mb-4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.jpg";
            }}
          />
          <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
          <p className="text-sm text-gray-400 mb-4">{entry.date}</p>
          <p className="whitespace-pre-line">{entry.text}</p>
          

          <div className="modal-action">
            <label htmlFor={modalId} className="btn" onClick={() => setIsOpen(false)}>
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card