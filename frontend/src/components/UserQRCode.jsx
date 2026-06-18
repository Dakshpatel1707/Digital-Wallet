import { useEffect, useState } from "react";
import QRCode from "qrcode";

function UserQRCode() {

    const [qrImage, setQrImage] = useState("");

    useEffect(() => {

        generateQR();

    }, []);

    const generateQR = async () => {

        try {

            const email =
                localStorage.getItem("userEmail");

            const qr =
                await QRCode.toDataURL(email);

            setQrImage(qr);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="card p-4 mt-4">

            <h4>Your QR Code</h4>

            {qrImage && (

                <img
                    src={qrImage}
                    alt="QR Code"
                    width="220"
                />

            )}

            <p className="mt-3">
                Scan this QR to pay you
            </p>

        </div>

    );

}

export default UserQRCode;