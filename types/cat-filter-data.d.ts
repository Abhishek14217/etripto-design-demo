type RadioInput = {
  label: string;
  type: "radio";
  name: string;
};

type TextInput = {
  placeholder: string;
  type: "text";
  name: string;
  img: any;
};

export type CatFilterInputType = RadioInput | TextInput;
