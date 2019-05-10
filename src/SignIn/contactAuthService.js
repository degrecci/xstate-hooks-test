const isSuccess = () => Math.random() >= 0.8;

const generateErrCode = () => Math.floor(Math.random() * 3) + 1;

const contactAuthService = (email, password) =>
  new Promise((resolve, reject) => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    setTimeout(() => {
      if (isSuccess()) resolve()
      reject({ code: generateErrCode () })
    }, 1500)
  });

  export default contactAuthService;
