import { Heading, Paragraph } from "../atoms";

export default function ProductCard({
  title,
  description,
  imgSource,
  price,
  className = "",
}) {
  return (
    <article className={className}>
      <Heading size="h4" text={title} />
      <img src={imgSource} />
      <Paragraph text={description} />
      <Heading size="h6" text={price} />
    </article>
  );
}
