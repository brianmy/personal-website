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
          background: "#111827",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          gap: "64px",
        }}
      >
        <img
          src={photoSrc}
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top",
            border: "5px solid #4a7c59",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#4a7c59",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            brianmy.com
          </div>
          <div
            style={{
              color: "white",
              fontSize: "84px",
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            Brian My
          </div>
          <div
            style={{
              color: "#9ca3af",
              fontSize: "34px",
              fontWeight: 400,
              marginBottom: "24px",
            }}
          >
            Growth Product Leader
          </div>
          <div style={{ color: "#4b5563", fontSize: "22px" }}>
            Amazon · Zendesk · LendingClub
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
