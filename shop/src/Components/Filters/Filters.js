import React from 'react';
import sizes from '../../db/sizes.json'
import './Filters.css'
import SingleFilter from '../SingleFilter/SingleFilter';
const Filters = () => {
    return (
        <div className="filters">
            <h4 className="title">Sizes:</h4>
            {sizes.map(size => <SingleFilter key={size} value={size}/> )}
        </div>
    );
};

export default Filters;





// const Filters = () => {
//     console.log(sizes);
//     return (
//         <div className="filters">
//             <h4 className="title">Sizes:</h4>
//            {sizes.map(size =>  <div className="available-size" key={size}>
//                 <label>
//                     <input type="checkbox" value={size} />
//                     <span className="checkmark">
//                         {size}
//                     </span>
//                 </label>
//             </div> )}
//         </div>
//     );
// };

// export default Filters;