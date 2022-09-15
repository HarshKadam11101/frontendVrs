import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { get } from "immer/dist/internal";

//getCar:async() => { 
export const data = await axios.get('http://localhost:8089/vehicle/vehiclelist', config).then((response) => response.data) 
            .catch((error) => console.log(error));

    if (data===null){
        return null;
    }
    else{
        return data;
    }
//}