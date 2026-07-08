import { ImageResponse } from "next/og";

export const alt =
  "Piotr Zając — HealthTech Founder, Operator & Venture Builder";
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
          backgroundColor: "#faf9f6",
          color: "#1c1b18",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8b877c",
            marginBottom: 28,
          }}
        >
          Exited Founder · HealthTech Operator · Venture Builder
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 36,
          }}
        >
          <span>Piotr&nbsp;</span>
          <span style={{ color: "#0e6b5c" }}>Zając</span>
        </div>
        <div
          style={{
            fontSize: 32,
            lineHeight: 1.4,
            color: "#57544c",
            maxWidth: 900,
            marginBottom: 48,
          }}
        >
          15+ years and 75+ digital health products shipped — building the
          future of preventive health and longevity.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#8b877c",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#0e6b5c",
            }}
          />
          piotrzajac.eu
        </div>
      </div>
    ),
    { ...size }
  );
}
