//route handler for api/home/joinquiz
export async function GET(request: Request) {
  const { roomId } = await request.json();
  console.log(roomId);
}
//TODO: implement route handler for this:)
