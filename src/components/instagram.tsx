// InstagramReview.tsx
"use client";

import { InstagramEmbed } from "react-social-media-embed";

export default function InstagramReview({ url }: { url: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center",  }}>
      <InstagramEmbed url={url} width={250} />
    </div>
  );
}
