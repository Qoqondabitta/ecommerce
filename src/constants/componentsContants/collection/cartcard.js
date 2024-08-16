export const editSection = [
  {
    t: ["Color", "Rangi", "Цвет"],
    theme: true,
    name: "color",
    faceText: ["type color", "rangni kiriting", "выбрать цвет"],
    theme: changeTheme(),
    eidtPaint: editColor(),
    textTogle: {
      f: ["Choose", "Tanlamoq", "Выбирать"],
      s: ["Edit", "Boshqa", "Изменять"],
    },
  },
  {
    t: ["Size", "O'lcham", "Pазмер"],
    edit: true,
    name: "size",
    faceText: ["type size", "o'lchamni kiriting", "Bыбрать Pазмер"],
    theme: changeEdit(),
    eidtPaint: editSize(),
    classTitle: "center",
    textTogle: {
      f: ["Choose", "Tanlamoq", "Выбирать"],
      s: ["Edit", "Boshqa", "Изменять"],
    },
  },
];
