import { Button, Textarea } from "@fluentui/react-components";
import React from "react";
import { useCreateCommentFormStyles } from "@features/user/create-comment/ui/styles.css";

export const CreateCommentForm = () => {
  const styles = useCreateCommentFormStyles();

  return (
    <form>
      <Textarea className={styles.field} placeholder={"This anime is great, but..."} />
      <Button className={styles.submit} type={"submit"}>Comment</Button>
    </form>
  );
};
