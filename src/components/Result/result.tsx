import React from "react";
import "./style.css";

interface ResultProps {
  url: string;
  result: number;
}
const Result = ({ result, url }: ResultProps) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [timer, setTimer] = React.useState(5);
  
    React.useEffect(() => {
      if(result < 1)
      {if (isPlaying ) {
        const interval = setInterval(() => {
          if (timer === 0) {
            setIsPlaying(false);
            window.location.href = "https://www.google.com";
          }
          if (timer > 0) {
            setTimer((prev) => prev - 1);
          }
        }, 1000);
        return () => clearInterval(interval);
      }}
    }, [isPlaying, result, timer]);
  

  return (
    <div className="results">
      {result < 1 ? (
        <>
        
          <p className="message_yes">This is a phishing link</p>

          <p className="redirect_message">
            Redirecting to the new page in {timer} seconds
          </p>

          <button onClick={() => setIsPlaying(false)} className="stop_redirect">
            Stop
          </button>
        </>
      ) :
      (
        <>
          <p className="message_no">This is a safe link</p>
          <button
            className="visit_website_button"
            onClick={() => {
              window.open(url);
            }}
          >
            Visit the website
          </button>
        </>
      )
      }
    </div>
  );
};

export default Result;
