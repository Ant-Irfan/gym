import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment';
import "../list/members.css"

const MemberTime = ({ startDate,endDate }) => {

    const [activity, setActivity] = useState(null)

    useEffect(() => {
        if (startDate && endDate) {
            var given = moment(endDate, "YYYY-MM-DD");
            var current = moment().startOf('day');
            setActivity(moment.duration(given.diff(current)).asDays());
            console.log(activity);
        };
    },[])

  return (
    <td className="text-center">
		<span 
        style={{ 
            backgroundColor: activity >= 10 ? "#5cb85c" : 
            activity < 10 && activity > 0 ? "#f0ad4e" : "#ef3d39"
        , color:'white', padding:"5px", borderRadius:'4px'}}
        className="label label-default"> {
            activity >= 10 ?
            <span>Aktivan</span> :
            activity < 10 && activity > 0 ?
            <span>Pred istek: {activity} dana</span> :
            <span>Neaktivan</span>
    }
     </span>
    </td>
  )
}

export default MemberTime