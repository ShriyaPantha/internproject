const FunnelTable = () => {
  const rows = [
    { stage: "Awareness", lost: "32.2%", change: "+6.01%" },
    { stage: "Research", lost: "30.1%", change: "+4.12%" },
    { stage: "Intent", lost: "22.1%", change: "-3.91%" },
    { stage: "Evaluation", lost: "15.6%", change: "+0.01%" },
    { stage: "Negotiation", lost: "30.1%", change: "+4.12%" },
    { stage: "Acquisition", lost: "30.1%", change: "+4.12%" },
  ];

  return (
    <div className="w-full">
      <h3 className="font-semibold mb-4 text-sm sm:text-base">Stage</h3>

      <div className="space-y-4 text-xs sm:text-sm">
        {rows.map((r) => (
          <div
            key={r.stage}
            className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b pb-2"
          >
            <span className="w-full sm:w-auto">{r.stage}</span>
            <span className="w-full sm:w-auto">{r.lost}</span>
            <span
              className={
                r.change.startsWith("-")
                  ? "text-red-500 w-full sm:w-auto"
                  : "text-green-500 w-full sm:w-auto"
              }
            >
              {r.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunnelTable;
