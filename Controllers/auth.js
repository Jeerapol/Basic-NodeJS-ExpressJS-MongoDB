exports.register = async (req, res) => {
  try {
    res.send("Regsiter Controller");
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server error: ${error}`);
  }
};

exports.login = async (req, res) => {
  try {
    res.send("Login Controller");
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server error: ${error}`);
  }
};