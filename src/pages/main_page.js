import '../App.css';
import { useEffect, useState } from 'react';
import '../index.css';
import leader_board_img from "../leaderboard.png"
import close_icon from "../close-icon-svg-26.jpg"
  
let time_ended = true
function Main_page() {
  var [color, change_color_click] = useState("rgb(43, 43, 43)");
  var [font_color, change_font_btn] = useState("rgb(0, 0, 0)");

  //statistics widgets
  var [time, set_time] = useState(0);
  var [clicked_times, set_clicked_times] = useState(0);
  var [cps, set_cps] = useState(0);
  //popup window

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let timer;
    if (time > 0) {
        time_ended = false
        timer = setTimeout(() => {
            set_cps(clicked_times / (5 - time));
            set_time((prevTime) => prevTime - 0.1);
        }, 100);
    } 
    else {
        time_ended = true;
        if(clicked_times > 0 && time_ended === true){
          setIsOpen(true);
        }
        set_cps(clicked_times / 5);
    }
    return () => {
        clearTimeout(timer);
    }
}, [time, clicked_times ]);

  function button_clicked() {
    if(time_ended === true){
        set_clicked_times((prevClicks) => prevClicks = 0)
        set_cps((prevCps) => prevCps = 0)
        set_time(5);
    }
    else{
        set_clicked_times((prevClicks) => prevClicks + 1);
    }
    // Add color change logic here

  }

  return (
    <>
    <img src ={leader_board_img} id="leaderboard_icon"></img>
      <div id="play_menu">
        <div id='mode_choose_menu'>
          <div id="stats_time">
            <h1>{time.toFixed(1)}</h1>
            <p>time_left</p>
          </div>
          <div id="stats_cps">
            <h1>{cps.toFixed(1)}</h1>
            <p>cps</p>
          </div>
          <div id="stats_score">
            <h1>{clicked_times}</h1>
            <p>score</p>
          </div>
        </div>
        <div className="click_part">
          <button onClick={button_clicked} className='cps_click_box' id='click_box' style={{ backgroundColor: color, color: font_color }}>
            <h1>Click me</h1>
          </button>
        </div>
        <div>

    {isOpen && (
    <div className="popup">
        <h1>Result</h1>
        <img src={close_icon} onClick={() => setIsOpen(false)} id="close_popup"></img>
    </div>
    )}
    </div>
        </div>
    </>
  );
}

export default Main_page;