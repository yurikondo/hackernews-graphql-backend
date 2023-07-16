//ユーザーIDを取得するための関数
function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
  }
  if (authHeader) {
    const token = authHeader.replace("Bearer", "");
    if (!token) {
      throw new Error("トークンが見つかりませんでした");
    }
  }
}
