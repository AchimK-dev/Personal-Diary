import { useEffect, useState, } from "react";
import Card from "./Card";

const CardList = () => {
  const [entries, setEntries] = useState([]);

  const loadData = () => {
    const stored = JSON.parse(localStorage.getItem("myData")) || [];

    stored.sort((a, b) => new Date(a.date) - new Date(b.date));

    setEntries(stored);
  };

  useEffect(() => {
    loadData();
    const onStorageChange = () => loadData();
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  const deleteEntry = (indexToDelete) => {
    const stored = JSON.parse(localStorage.getItem("myData")) || [];
    const updated = stored.filter((_, i) => i !== indexToDelete);
    localStorage.setItem("myData", JSON.stringify(updated));
    setEntries(updated);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
      {entries.map((entry, index) => (
        <Card key={index} entry={entry} onDelete={() => deleteEntry(index)} />
      ))}
    </div>
  );
}

export default CardList