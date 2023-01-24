import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div className='kitchen'>
      <h3>Kitchen</h3>
        <span className="sink">
          <Sink/>
        </span>
        <span className="oven">
          <Oven/>
        </span>
    </div>
  );
}

// Must export the component's function (or class)
export default Kitchen;