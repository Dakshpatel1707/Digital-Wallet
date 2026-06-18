import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

function QRScanner({ setReceiverEmail }) {

    useEffect(() => {

        const scanner =
            new Html5QrcodeScanner(
                "reader",
                {
                    qrbox: {
                        width: 250,
                        height: 250,
                    },
                    fps: 5,
                },
                false
            );

        scanner.render(
            (decodedText) => {

                setReceiverEmail(
                    decodedText
                );

                scanner.clear();

            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            scanner.clear().catch(() => {});
        };

    }, [setReceiverEmail]);

    return (
        <div id="reader"></div>
    );

}

export default QRScanner;