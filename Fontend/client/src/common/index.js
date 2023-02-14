export const getCookieValueByKey = (key) => {
  const cookie = document.cookie;
  const targetArr = [];
  cookie.split(";").forEach((el) => {
    targetArr.push(el);
  });

  const cookieSplit = targetArr.map((el) => {
    return {
      key: el.split("=")[0].trim(),
      value: el.split("=")[1].trim(),
    };
  });

  const foundedCookie = cookieSplit.find((el) => el.key === key).value;

  return foundedCookie;
};
