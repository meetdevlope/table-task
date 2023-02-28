import { atom, selector } from "recoil";

    export const checkBox1State = atom({
        key: 'checkBox1', // unique ID (with respect to other atoms/selectors)
        default: true, // default value (aka initial value)
    });

    export const checkBox2State = atom({
        key: 'checkBox2', // unique ID (with respect to other atoms/selectors)
        default: true, // default value (aka initial value)
    });

    export const checkBox3State = atom({
        key: 'checkBox3', // unique ID (with respect to other atoms/selectors)
        default: true, // default value (aka initial value)
    });

    export const checkBox4State = atom({
        key: 'checkBox4', // unique ID (with respect to other atoms/selectors)
        default: true, // default value (aka initial value)
    });

    export const checkBoxCountSelector = selector({
        key: 'checkBox9', // unique ID (with respect to other atoms/selectors)
        get: ({get}) => {
          const text = get(checkBox1State);
            console.log(text,"Character count")
          return text;
        },
      });

    export const showHidden = atom({
      key: 'checkBox31', // unique ID (with respect to other atoms/selectors)
      default: true, // default value (aka initial value)
  });
