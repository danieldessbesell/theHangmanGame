import React from "react";
import styles from "../../styles/colors";

export default function MakedCard({
  themeSelect='dark', 
  title='teste', 
  severity=0,
  buttonClose=true, 
  handleClose=()=>{},
  children,
}){
    return (
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '80vw',
            height: 'max-content',
            maxWidth: '500px',
            backgroundColor: severity === 1 ? styles[themeSelect].success : severity === 2 ? styles[themeSelect].error : severity === 3 ? styles[themeSelect].info :styles[themeSelect].fontColor,
            color: severity !==0 ?styles[themeSelect].fontColorOposite :  styles[themeSelect].bg1,
            padding: '16px',
            boxSizing: 'border-box',
            textAlign: 'left',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'

            }}
          >
            <h3 style={{marginTop: 3}}>{title}</h3>
            {(buttonClose) && (
              <button
                onClick={handleClose}
                style={{
                  borderRadius: '15px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                X
              </button>
            )}
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
}