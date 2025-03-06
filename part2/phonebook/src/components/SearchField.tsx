export default function SearchField({
  value,
  onSearch,
}: {
  value: string
  onSearch: (newSearch: string) => void
}) {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  )
}
