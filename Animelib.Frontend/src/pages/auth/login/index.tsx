import { AppLayout } from "@layouts";
import { Body1, Button, Card, CardHeader, Divider, Field, Input, Subtitle2 } from "@fluentui/react-components";
import { useLoginStyles } from "@pages/auth/login/login.css";

const LoginPage = () => {
  const styles = useLoginStyles();

  return (
    <AppLayout>
      <Card className={styles.form}>
        <CardHeader header={
          <Subtitle2>
            Login
          </Subtitle2>
        } />

        <Field label={"Email"}>
          <Input placeholder={"sashafromlibertalia@gmail.com"}  />
        </Field>

        <Field label={"Password"}>
          <Input type={"password"}
            placeholder={"*********"} />
        </Field>

        <Button appearance={"primary"}>Submit</Button>
        <Divider />
        <Body1 className={styles.caption}>
          Don&apos;t have an account? <a href={"/auth/signup"}>Register</a>
        </Body1>
      </Card>
    </AppLayout>
  );
};

export default LoginPage;
