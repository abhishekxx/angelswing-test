import {FC, useEffect} from 'react';
import './SearchForm.css'
import { Typography } from 'antd';
import logo from './../../assets/Marker.png'
import axios, { AxiosResponse } from 'axios';


interface searchform{
}


const SearchForm:FC<searchform>=()=>{
  useEffect(() => {
    getLocation()
  },  )
  const getLocation=()=> {
      axios.get('https://angelswing-frontend-test-serverless-api.vercel.app/api/locations')
      .then((response:AxiosResponse<any>)=>{
        console.log("response", response)
      }).catch((error)=>{
        console.log("eroor",error)
      })
    }
 
    return(
        <div className="home">
        <div className="home-wrapper">     
        <Typography.Text> <img  src={logo}/> Location 1</Typography.Text>
        <div className="userUpdate">  
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Latitude</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  value = "37.56755685"
                />
              </div>
              <div className="userUpdateItem">
                <label>Longitude</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  value = "126.97328373"
                />
              </div>
            </div>
            </form>
            </div>      
            </div>
            <div className="home-wrapper">     
        <Typography.Text> <img  src={logo}/> Location 2</Typography.Text>
        <div className="userUpdate">
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Latitude</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  value="37.56722338"
                />
              </div>
              <div className="userUpdateItem">
                <label>Longitude</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  value="126.98351298"
                />
              </div>
            </div>
            </form>
            </div>      
            </div>
            <div className="home-wrapper">     
        <Typography.Text> <img  src={logo}/> Location 3</Typography.Text>
        <div className="userUpdate">
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Latitude</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  value="37.56269872"
                />
              </div>
              <div className="userUpdateItem">
                <label>Longitude</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  value="126.97860143"
                />
              </div>
            </div>
            </form>
            </div>      
            </div>
        </div>
    )
}
export default SearchForm;

