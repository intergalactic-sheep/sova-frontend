import { useParams } from "react-router-dom";

import { CardSection } from "../components/CardSection/CardSection";
import { GoHomeButton } from "../components/GoHomeButton/GoHomeButton";
import { getTagBySlug } from "../data/tags";
import { getPreviewsByTag } from "../data/articles";
import NotFound from "./NotFound";

import styles from './TagPage.module.css';

export default function TagPage() {
  const { tagSlug } = useParams<{ tagSlug: string }>();

  if (!tagSlug) {
    return <NotFound />;
  }

  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    return <NotFound />;
  }

  const previews = getPreviewsByTag(tagSlug);

  return (
    <>
      <div className={styles.goHomeContainer}>
        <GoHomeButton />
      </div>
      <h1>Все статьи по теме: {tag.name}</h1>
      <CardSection previews={previews} />
    </>
  );
}
