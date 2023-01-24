function Bedroom(props) {
  return (
    <div className='bedroom' id={`bed-${props.bedNum}`}>
      <h3>Bedroom {props.bedNum}</h3>
    </div>
  );
}

// Must export the component's function (or class)
export default Bedroom;