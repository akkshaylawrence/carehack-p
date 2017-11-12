function isValidDate(d) {
  return !isNaN(Date.parse(d));
}

function verifyParam(start, hospital, doctor, email) {
  if(!isValidDate(start)) {
    return false;
  } else if(!(hospital&&doctor&&email)) {
    return false;
  } else {
    return true;
  }
}

module.exports = verifyParam;