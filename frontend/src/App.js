import { useState } from "react";
import NotificationCard from "./components/NotificationCard";
import { notifications } from "./data";

function App() {
  const [page, setPage] = useState(1);
const limit = 2;
  const [filter, setFilter] = useState("all");
  const priorityOrder = {
   
    placement: 3,
    result: 2,
    event: 1
  };
  
  const sorted = [...notifications].sort((a, b) => {
    if (priorityOrder[b.Type] !== priorityOrder[a.Type]) {
      return priorityOrder[b.Type] - priorityOrder[a.Type];
    }
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
  const filtered = sorted.filter(
    (n) => filter === "all" || n.Type === filter
  );
  const paginated = filtered.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filtered.length / limit);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <div style={{ marginBottom: "20px" }}>
  <button 
    style={{ background: filter === "all" ? "gray" : "" }}
    onClick={() => { setFilter("all"); setPage(1); }}
  >
    All
  </button>

  <button 
    style={{ background: filter === "placement" ? "gray" : "" }}
    onClick={() => { setFilter("placement"); setPage(1); }}
  >
    Placement
  </button>

  <button 
    style={{ background: filter === "result" ? "gray" : "" }}
    onClick={() => { setFilter("result"); setPage(1); }}
  >
    Result
  </button>

  <button 
    style={{ background: filter === "event" ? "gray" : "" }}
    onClick={() => { setFilter("event"); setPage(1); }}
  >
    Event
  </button>
</div>

      { paginated.map((item, index) => (
        <NotificationCard key={index} data={item} />
      ))}
      <div style={{ marginTop: "20px" }}>
  <button 
    onClick={() => setPage(page - 1)} 
    disabled={page === 1}
  >
    Prev
  </button>

  <button 
    onClick={() => setPage(page + 1)} 
    disabled={page === totalPages}
  >
    Next
  </button>
  <p>Page {page} of {totalPages}</p>
</div>
    </div>
  );
}

export default App;