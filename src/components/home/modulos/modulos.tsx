import {
  FluentProvider,
  webDarkTheme,
} from "@fluentui/react-components";
import Header from "./header";
import Lobby from "./lobby";
export default function contableModul() {
  return (
    <FluentProvider theme={webDarkTheme} className="">
      <section className="flex flex-col h-screen bg-login">
        <div>
          <Header></Header>
        </div>
        <main className="h-screen px-[30px] py-[55px] flex w-full flex-col  gap-[50px] overflow-hidden">
          <Lobby></Lobby>
        </main>
      </section>
    </FluentProvider>
  );
}