//next 系のインポート
import Image from 'next/image'
import * as React from "react";

//recoilの読み込み
//import { useRecoilState } from "recoil";
//import { countState} from "./components/atoms";//userState

//コンポーネントの読み込み
import Listlink from "./components/Listlink";

export default function Home() {

  return (
    <div>
      {/*ここからListlink*/}
      <Listlink />
      {/*<a data-cy="link-to-about">{t("buttons.about")}</a>*/}
      <Image src="/todo_people.jpeg" alt="Logo" width={172} height={116} />
    </div>
  );
}
