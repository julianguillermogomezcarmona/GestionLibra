import MainRouter from "./router/router";
import { makeStyles, typographyStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  text: {
    ...typographyStyles.body1,
    fontFamily: "Arial, sans-serif", // Aquí puedes especificar la tipografía que desees
    // O puedes utilizar la propiedad `fontFamily` de CSS para especificar una tipografía personalizada
  },
});

export default function App() {
  const styles = useStyles();
  return (
    <section className={styles.text}>
      <MainRouter></MainRouter>
    </section>
  );
}
