import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan(props) {
  return (
    <div>
      <LivingRoom/>
      <Kitchen/>
    </div>
  );
}

// Must export the component's function (or class)
export default FloorPlan;