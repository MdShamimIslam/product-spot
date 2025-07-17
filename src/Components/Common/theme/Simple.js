import { useState } from 'react';
import { hotspots } from "../../../utils/options";
import { Plus } from 'lucide-react';

const Simple = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="simple">
      <img 
        src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNoJTIwcHJvZHVjdHMlMjBlbGVjdHJvbmljc3xlbnwwfHx8fDE3NDcwNTE1ODh8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800" 
        alt="Headphones"
        className="image"
      />

      {hotspots?.map(hotspot => (
        <div 
          key={hotspot.id}
          className={`hotspot ${activeHotspot === hotspot.id ? 'hotspot-pulse' : ''}`}
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
        >
          <Plus className="icon" />
        </div>
      ))}

      {activeHotspot !== null && (
        <div className="info">
          <h3 className="title"> {hotspots.find(h => h.id === activeHotspot)?.title} </h3>
          <p className="desc"> {hotspots.find(h => h.id === activeHotspot)?.description} </p>
        </div>
      )}
    </div>
  );
};

export default Simple;
