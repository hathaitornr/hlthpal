import React, {Component} from "react";
import axios from 'axios';
import { Table,
         Button,
         } from "reactstrap";



class PatientDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: props.firstname,
      lastname: props.lastname,
      date: props.date,
      sector: props.sector,
      pain: props.pain,
      breath: props.breath,
      nausea: props.nausea,
      fatigue: props.fatigue,
      constipation: props.constipation,
      q3: props.q3,
      q4: props.q4,
      q5: props.q5,
      q6: props.q6,
      q7: props.q7
    };
  }

  render(){
    const {firstname, lastname, sector, date, pain, breath, nausea, fatigue, constipation, q3, q4, q5, q6, q7} = this.state;

    return(
            <tr>
                <td>{pain}</td>
                <td>{date}</td>
                <td>{breath}</td>
                <td>{nausea}</td>
                <td>{fatigue}</td>
                <td>{constipation}</td>
                <td>{q3}</td>
                <td>{q4}</td>
           </tr>
    );
  }
}


export default (PatientDetail);