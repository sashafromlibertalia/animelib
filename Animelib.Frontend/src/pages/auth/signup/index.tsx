import { AppLayout } from "@shared";
import { Body1, Button, Card, CardHeader, Divider, Field, Input, Subtitle2 } from "@fluentui/react-components";
import { useSignupStyles } from "@pages/auth/signup/signup.css";

const SignupPage = () => {
  const styles = useSignupStyles();

  return (
    <AppLayout>
      <Card className={styles.form}>
        <CardHeader header={
          <Subtitle2>
            Sign up
          </Subtitle2>
        } />

        <Field label={"Name"}>
          <Input placeholder={"Alexander"}  />
        </Field>

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
           Already have an account? <a href={"/auth/login"}>Login</a>
        </Body1>
      </Card>
    </AppLayout>
  );
};

export default SignupPage;
