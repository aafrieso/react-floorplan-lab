function Bedroom(props) {
  return (
    <div>
      <h3 className='bedroom' id={`bed-${props.bedNum}`}>Bedroom {props.bedNum}</h3>
    </div>
  );
}

// Must export the component's function (or class)
export default Bedroom;