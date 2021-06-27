function checkSpam(str) {
  const strLowerCase = str.toLowerCase();

  return (strLowerCase.includes('1xBet'.toLowerCase()) || strLowerCase.includes('XXX'.toLowerCase()));
}
