import React from "react";
import { Link } from "react-router-dom";

const SendMoney = () => {
  return (
    <div className="container">
      <div className="trans-title">
        <p>Send Money</p>
        <Link to="/">Add New</Link>
      </div>
      <div className="card-body">
        <div className="money-content">
          <img
            src="https://i.insider.com/56016278bd86ef1c008bc175?width=1136&format=jpeg"
            alt="#"
          />
          <p>jurrien</p>
        </div>
        <div className="money-content">
          <img
            src="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
            alt="#"
          />
          <p>elwin</p>
        </div>
        <div className="money-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxv0P4qDS_KAn-lIeyKpOSVEM87pPKbIVIQ&usqp=CAU"
            alt="#"
          />
          <p>alma</p>
        </div>
        <div className="money-content">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E20F/production/_119517875_gettyimages-1204817695-594x594.jpg"
            alt="#"
          />
          <p>justine</p>
        </div>
        <div className="money-content">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?width=982&height=726&auto=webp&quality=75"
            alt="#"
          />
          <p>maria</p>
        </div>
        <div className="money-content">
          <img
            src="https://i.guim.co.uk/img/media/21662015a42d2f7c1e74c700e0ec75c2c0849856/231_629_5016_3009/master/5016.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=7725ddf9b5b9a640f74c34067d6984d0"
            alt="#"
          />
          <p>pamela</p>
        </div>
        <div className="money-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTpWTV--AJi0eTegJASWyzSpcLbYTzN6bbg&usqp=CAU"
            alt="#"
          />
          <p>neville</p>
        </div>
        <div className="money-content">
          <img
            src="https://2.gravatar.com/avatar/8be4188bccd6238472ec92169ced6479?s=400&d=mm&r=g"
            alt="#"
          />
          <p>alex</p>
        </div>
        <div className="money-content">
          <img
            src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg"
            alt="#"
          />
          <p>stina</p>
        </div>
        <div className="money-content">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75"
            alt="#"
          />
          <p>jurrien</p>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
