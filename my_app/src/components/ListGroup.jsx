const ListGroup = () => {
  let items = ["Navi Mumbai", "Mumbai", "Pune", "kochi"];
//   items = []
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={()=>(console.log(item))} >{item}</li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
