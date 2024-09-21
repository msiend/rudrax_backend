function callBackHandler(fun) {
  if (fun) {
    return fun;
  }
  return function (req, res) {
    return res.status(404).send({ msg: "Not found any route" });
  };
}

module.exports = { callBackHandler };
