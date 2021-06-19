import { useState } from "react";
import { createContainer } from "unstated-next";

const Hooks = (initialState: string = "") => {
  const [props, setProps] = useState(initialState);

  const updateProps = async (arg: string) => {
    // 処理中であることを表示
    setProps("処理中です。。。");
    const heavyProcess = new Promise<string>((resolve) =>
      setTimeout(() => resolve(arg + "終わったよ！！"), 1000)
    );

    // heavyProcessの返り値
    const response = await heavyProcess;
    // 結果を出力
    setProps(response);
  };

  return { props, updateProps };
};

export default createContainer(Hooks);
