type ButtonInfo = {
  color: string;
  text: string;
  link: string;
};

export type TEmailBody = {
  name: string;
  intro: string;
  action: {
    instructions: string;
    button: ButtonInfo;
  };
  outro: string;
};
