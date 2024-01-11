
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
function Subscription (){

    return (
<div>
        
<div className="container">
    <h2 >CHOOSE YOUR PLAN</h2>
   <div className="price-details-row">
    <div className="Trial-col">
        <p>Free</p>
        <h3>$0\month</h3>
        <ul>
            <li><FontAwesomeIcon icon={faCheck} /> Single user</li>
            <li><FontAwesomeIcon icon={faCheck} /> 50GB Storage</li>
            <li><FontAwesomeIcon icon={faCheck} /> Unlimited public project</li>
            <li><FontAwesomeIcon icon={faCheck} /> community access</li>
            <li><FontAwesomeIcon icon={faTimes} />unlimited private project</li>
            <li><FontAwesomeIcon icon={faTimes} />Dedicated Phone Support</li>
            <li><FontAwesomeIcon icon={faTimes} />Free subdomain</li>
            <li><FontAwesomeIcon icon={faTimes} />Monthly Status Report</li>
        </ul>
        <button>Button</button>
    </div>
    <div className="Trial-col">
        <p>Plus</p>
        <h3>$9\month</h3>
        <ul>
            <li><FontAwesomeIcon icon={faCheck} /> Single user</li>
            <li><FontAwesomeIcon icon={faCheck} /> 50GB Storage</li>
            <li><FontAwesomeIcon icon={faCheck} /> Unlimited public project</li>
            <li><FontAwesomeIcon icon={faCheck} /> community access</li>
            <li><FontAwesomeIcon icon={faCheck} /> unlimited private project</li>
            <li><FontAwesomeIcon icon={faCheck} /> Dedicated Phone Support</li>
            <li><FontAwesomeIcon icon={faTimes} />Free subdomain</li>
            <li><FontAwesomeIcon icon={faTimes} />Monthly Status Report</li>
        </ul>
        <button>Button</button>
    </div>
    <div className="Trial-col">
        <p>Pro</p>
        <h3>$49\month</h3>
        <ul>
            <li><FontAwesomeIcon icon={faCheck} /> Single user</li>
            <li><FontAwesomeIcon icon={faCheck} /> 50GB Storage</li>
            <li><FontAwesomeIcon icon={faCheck} /> Unlimited public project</li>
            <li><FontAwesomeIcon icon={faCheck} /> community access</li>
            <li><FontAwesomeIcon icon={faCheck} /> unlimited private project</li>
            <li><FontAwesomeIcon icon={faCheck} /> Dedicated Phone Support</li>
            <li><FontAwesomeIcon icon={faCheck} /> Free subdomain</li>
            <li><FontAwesomeIcon icon={faCheck} /> Monthly Status Report</li>
        </ul>
        <button>Button</button>
    </div>
</div>
</div>
</div>
)
}
export default  Subscription