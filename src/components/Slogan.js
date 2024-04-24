import React, {useRef} from "react";

export function Slogan(){
  const listRef = useRef();
  return(
    <div className='main-container'>
        <div className='slider-container'>
            <div className='container-images'>
              <ul ref={listRef}>
              
              </ul>
            </div>
        </div>
    </div>
  );
};

export default Slogan;