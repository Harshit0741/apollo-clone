export default function FilterSection({ filters, setFilters }) {
    return (
      <div className="bg-gray-100 p-4 mb-4 rounded">
        <input
          type="text"
          placeholder="Location"
          className="mr-2 border p-2"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min Fee"
          className="mr-2 border p-2"
          value={filters.minFee}
          onChange={(e) => setFilters({ ...filters, minFee: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Fee"
          className="border p-2"
          value={filters.maxFee}
          onChange={(e) => setFilters({ ...filters, maxFee: e.target.value })}
        />
      </div>
    );
  }
  