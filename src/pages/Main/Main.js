import React from "react";
import Todo from "../../components/todo/Todo";
import MainWrapper from "./MainWrapper";

const Main = () => {
  return (
    <MainWrapper>
      {/* <div className="bac ">
        <div className="img-1">
          <img
            src="http://www.freewalldownload.com/natural-mountain-wallpaper/beautiful-mountain-in-night-wallpapers-hd-pictures.jpg"
            alt=""
          />
        </div>
        <div className="img-2"></div>
      </div> */}
      <Todo />
    </MainWrapper>
  );
};

export default Main;
