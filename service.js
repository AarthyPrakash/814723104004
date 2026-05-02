const priorityOrder = {
    placement: 3,
    result: 2,
    event: 1
};

async function getTopNotifications() {

    // 🔥 MOCK DATA (USE THIS)
    let data = [
        { Type: "result", Message: "mid-sem", Timestamp: "2026-04-22 17:51:30" },
        { Type: "placement", Message: "CSX Corporation hiring", Timestamp: "2026-04-22 17:51:18" },
        { Type: "event", Message: "farewell", Timestamp: "2026-04-22 17:51:06" },
        { Type: "result", Message: "external", Timestamp: "2026-04-22 17:50:30" },
        { Type: "placement", Message: "Advanced Micro Devices hiring", Timestamp: "2026-04-22 17:49:42" }
    ];

    // Sorting
    data.sort((a, b) => {
        const typeA = (a.Type || "").toLowerCase();
        const typeB = (b.Type || "").toLowerCase();

        if (priorityOrder[typeB] !== priorityOrder[typeA]) {
            return priorityOrder[typeB] - priorityOrder[typeA];
        }

        return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    return data.slice(0, 10);
}

module.exports = { getTopNotifications };