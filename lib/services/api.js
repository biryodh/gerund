import axios from "axios";

let reqInstance = axios.create({
    headers: {
        //Authorization : `Bearer ${localStorage.getItem("access_token")}`
        "Content-Type":"application/json"
      }
})

export default reqInstance;
