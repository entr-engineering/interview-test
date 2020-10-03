import React from 'react'


const NumberRangeColumnFilter = ({
    min = 0,
    max = 100,
    onFilterChange,
  }: any) => {
    const [filter, setFilter] = React.useState({ min, max });

    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          value={filter.min}
          type="number"
          aria-label="min"
          onChange={(e) => {
            const val = e.target.value;
            setFilter((prev) => ({ min: Number(val), max: Number(prev.max) }));
            onFilterChange({ min: Number(val), max: Number(filter.max)})
          }}
          placeholder={`Min (${min})`}
          style={{
            width: "70px",
            marginRight: "0.5rem",
          }}
        />
        to
        <input
          value={filter.max}
          type="number"
          onChange={(e) => {
            const val = e.target.value;
            setFilter((prev) => ({ max: Number(val), min: Number(prev.min) }));
            onFilterChange({ max: Number(val), min: Number(filter.min)})
          }}
          placeholder={`Max (${max})`}
          style={{
            width: "70px",
            marginLeft: "0.5rem",
          }}
        />
      </div>
    );
  };

export default NumberRangeColumnFilter