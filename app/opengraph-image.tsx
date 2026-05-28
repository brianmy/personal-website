import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Brian My — Growth Product Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/bmy_profile.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#eef4f0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "60px",
          gap: "60px",
        }}
      >
        <img
          src={photoSrc}
          style={{
            width: 416,
            height: 416,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top",
            border: "9px solid #4a7c59",
            flexShrink: 0,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#4a7c59",
              fontSize: "35px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            brianmy.com
          </div>
          <div
            style={{
              color: "#111827",
              fontSize: "130px",
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: "22px",
            }}
          >
            Brian My
          </div>
          <div
            style={{
              color: "#1f2937",
              fontSize: "56px",
              fontWeight: 400,
              marginBottom: "8px",
            }}
          >
            Growth Product Leader
          </div>
          <div style={{ color: "#4a7c59", fontSize: "42px" }}>
            PLG · AI native · Builder
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
