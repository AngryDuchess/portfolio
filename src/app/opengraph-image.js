import { ImageResponse } from "next/og";

export const alt = "Hamida Mahama | Design Engineer & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f0f10 0%, #1a1a1d 100%)",
          color: "#EBEBEB",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, color: "#9a9a9a", marginBottom: 24 }}>
          meedah.me
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.05 }}>
          Hamida Mahama
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginTop: 24,
            backgroundImage: "linear-gradient(90deg, #0056b8, #5fd4ff, #0056b8)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Design Engineer & Software Developer
        </div>
      </div>
    ),
    size
  );
}
