import Filter from "@ui/Filter";
import TableOperations from "@ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No disxount" },
          { value: "with-discount", label: "With disxount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
