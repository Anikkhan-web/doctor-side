
import { useParams } from 'react-router';
// import edudata from './edudata.JSON'
import data from './edudata.json'

const Appointment = () => {

 const {userId}= useParams();
const exactItem= data.filter(dt=>dt.id===userId);
    
    return (
        <div>

            <br /><br />
            
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={exactItem[0].image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{exactItem[0].name}</h5>
        <p class="card-text">{exactItem[0].time}</p>
        <p class="card-text"><small class="text-muted">{exactItem[0].country}</small></p>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Appointment;