import {
  makeStyles,
  tokens,
  shorthands,
  Button,
} from "@fluentui/react-components";
import { CallEndRegular } from "@fluentui/react-icons";
// import { Link } from 'react-router-dom';

const useOverrides = makeStyles({
  button: { color: tokens.colorNeutralForeground3 },
  buttonIcon: {
    ...shorthands.border("0px", "solid", tokens.colorNeutralStroke1),
  },
  link: { fontWeight: "bold" },
});

export default function test() {
  const overrides = useOverrides();

  return (
    <section>
      <Button
        className={overrides.button}
        icon={{ className: overrides.buttonIcon, children: <CallEndRegular /> }}
      />
      {/* <Link className={overrides.link} /> */}
    </section>
  );
}
