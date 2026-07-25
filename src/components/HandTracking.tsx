"use client";

import { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

export default function HandTracking() {
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    if (!webcamRef.current?.video) return;

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
      console.log(results.multiHandLandmarks);
    });

    const camera = new Camera(webcamRef.current.video!, {
      onFrame: async () => {
        await hands.send({
          image: webcamRef.current!.video!,
        });
      },
      width: 1280,
      height: 720,
    });

    camera.start();

    return () => {
      camera.stop();
    };
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <Webcam
        ref={webcamRef}
        mirrored
        audio={false}
        className="rounded-xl border-4 border-purple-500"
      />
    </div>
  );
}