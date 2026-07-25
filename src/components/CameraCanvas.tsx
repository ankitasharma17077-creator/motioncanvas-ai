"use client";

import Webcam from "react-webcam";

export default function CameraCanvas() {
  return (
    <div className="flex justify-center pb-20 bg-black">
      <Webcam
        mirrored
        audio={false}
        screenshotFormat="image/png"
        className="rounded-3xl border border-purple-500 shadow-2xl"
        width={900}
        height={600}
      />
    </div>
  );
}