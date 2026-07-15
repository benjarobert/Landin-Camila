import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.nombre} · ${SITE.rol}`;
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
          backgroundColor: "#FAF6EE",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#E8A628",
            marginBottom: 24,
          }}
        >
          Calidad y Seguridad Alimentaria
        </div>
        <div
          style={{
            fontSize: 88,
            fontFamily: "Georgia, serif",
            color: "#2C3E12",
            marginBottom: 24,
          }}
        >
          {SITE.nombre}
        </div>
        <div style={{ fontSize: 34, color: "#4A5240", maxWidth: 900 }}>
          APPCC · ISO 22000 · BRCGS · IFS — Comunidad Valenciana y Alicante
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 16,
            backgroundColor: "#3F5B2B",
          }}
        />
      </div>
    ),
    size
  );
}
