export default function SearchField({
  value,
  onSearch,
}: {
  value: string
  onSearch: (newSearch: string) => void
}) {
  return (
    <div className="input-field search-field">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
