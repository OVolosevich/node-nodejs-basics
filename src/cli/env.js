const parseEnv = () => {
  Object.entries(process.env).forEach(([varName, value]) => {
    if (varName.includes("RSS_")) {
      console.log(`${varName}=${value}`);
    }
  });
};

parseEnv();
