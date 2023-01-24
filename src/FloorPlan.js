import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import Bedroom from "./Bedroom";

function FloorPlan(props) {
  return (
    <div class="floorplan" >
      <LivingRoom/>
      <Kitchen/>
      <Bath size="Half"/>
      <Bedroom bedNum={1}/>
      <Bath size="Full"/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
    </div>
  );
}

// Must export the component's function (or class)
export default FloorPlan;