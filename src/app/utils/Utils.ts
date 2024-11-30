export function getUniqueId(username: string) {
  return username + Date.now().toFixed().slice(-4);
}
