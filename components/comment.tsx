'use client'
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="alissa1228/notion-blog"
      repoId="R_kgDONOl77Q"
      category="Announcements"
      categoryId="DIC_kwDONOl77c4CkOkE"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  )
}
