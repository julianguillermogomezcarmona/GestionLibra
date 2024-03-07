import MainRouter from "./router/router";
import { makeStyles, typographyStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  text: typographyStyles.body1,
});

export default function App() {
  const styles = useStyles();
  return (
    <section className={styles.text}>
      <MainRouter></MainRouter>
    </section>
  );
}
