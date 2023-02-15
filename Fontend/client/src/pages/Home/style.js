export const styles = {
  container: {
    width: "352px",
    height: "100%",
    backgroundColor: "#ffffff",
    border: "1px solid rgb( 0,0,0,0.2 )",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  // ? ======================== Header ========================
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "55px",
    padding: "0 15px",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  info: { display: "flex", flexDirection: "row", gap: "6px" },
  content: { display: "flex", flexDirection: "column", alignItems: "flex-end" },
  title: { color: "#c4c3d0" },
  name: { color: "#6c7b8b" },
  avatar: { width: "40px", height: "40px", borderRadius: "50px" },
  // ? ======================== Joke content ========================

  jokeContentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "27px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    height: "135px",
  },
  jokeTitle: {
    fontSize: "17px",
    fontWeight: "500",
    color: "#ffffff",
    spanAlign: "center",
  },
  jokeSubTitle: {
    fontSize: "13px",
    fontWeight: "40px",
    color: "#ffffff",
    spanAlign: "center",
  },
  jokeStoryWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    padding: "60px 30px",
    height: "156px",
  },

  buttonsWrapper: {
    margin: "80px 0",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "0 40px",
  },
  button: {
    width: "130px",
    padding: "12px 0px",
    backgroundColor: "#2c7edb",
    border: "none",
    outline: "none",
    borderRadius: "2px",
    color: "#ffffff",
  },
  footerContent: {
    padding: "15px 4px",
  },
  text: {
    textAlign: "center",
  },
  copyRightText: {
    fontSize: "20px",
    width: "100%",
    display: "block",
    fontWeight: 500,
    textAlign: "center",
  },
};
