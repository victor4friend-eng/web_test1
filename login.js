// --오늘 날짜 기반 password 생성, login.js --
function getTodayPassword() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}33`;  // 예: 2025100733
}

// ---- 입력된 비밀번호 확인 ----
function checkPassword(inputPwd) {
  const correctPwd = getTodayPassword();
  return inputPwd === correctPwd;
}
