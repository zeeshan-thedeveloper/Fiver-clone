const rules = {
  required: "This is required.",
  number: {
    value: /\d+/,
    message: "This should be number only.",
  },
  letter: {
    value: /[a-zA-Z]+/,
    message: "This sould be letter only.",
  },
  email: {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "This should be valid email.",
  },
  username: {
    value: /[A-Za-z0-9]+/,
    message: "Letters and numbers only, no punctuation or special characters.",
  },
  decimal: {
    value: /^[0-9]+\.?[0-9]*$/,
    message: "This should be decimal number.",
  },
  date_1: {
    value: /^\d{2}\/\d{2}\/\d{4}$/,
    message: "This should be valid date.",
  },
  date_2: {
    value: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
    message: "This should be valid date.",
  },
  url: {
    value:
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    message: "This should be valid url.",
  },
  alphanumeric: {
    value: /^[a-zA-Z0-9]*$/,
    message: "This should be alphanumeric only.",
  },
  postal: {
    value: /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i,
    message: "This should be valid postal code.",
  },
  phone: {
    value: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    message: "This should be valid phone number.",
  },
};

export default rules;
