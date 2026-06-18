import {
  FaPaperPlane,
  FaQrcode,
  FaHistory,
  FaUser
} from "react-icons/fa";

function QuickActions() {

  const cardStyle = {
    background: "#1e293b",
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    height: "120px"
  };

  return (

    <div className="row mt-4">

      <div className="col-md-3 mb-3">

        <div
         style={cardStyle}
         onClick={() =>
        document.getElementById(
                "send-money-section"
                )
                ?.scrollIntoView({
                   behavior: "smooth"
               })
         }
   >

          <FaPaperPlane size={30} />

          <h5 className="mt-3">
            Send Money
          </h5>

        </div>

      </div>

      <div className="col-md-3 mb-3">

       <div
            style={cardStyle}
            onClick={() =>
               document .getElementById(
                            "qr-section"
                     )
                       ?.scrollIntoView({
                       behavior: "smooth"
                    })
              }
         >

          <FaQrcode size={30} />

          <h5 className="mt-3">
            QR Payment
          </h5>

        </div>

      </div>

      <div className="col-md-3 mb-3">

        <div
    style={cardStyle}
    onClick={() =>
        document.getElementById(
                     "history-section"
                    )
                ?.scrollIntoView({
                     behavior: "smooth"
                 })
         }
    >

          <FaHistory size={30} />

          <h5 className="mt-3">
            History
          </h5>

        </div>

      </div>

      <div className="col-md-3 mb-3">

       <div
         style={cardStyle}
         onClick={() =>
        document.getElementById(
                         "profile-section"
                     )
                ?.scrollIntoView({
                     behavior: "smooth"
                })
         }
       >

          <FaUser size={30} />

          <h5 className="mt-3">
            Profile
          </h5>

        </div>

      </div>

    </div>

  );

}

export default QuickActions;