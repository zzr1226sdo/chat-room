import consumer from "./consumer";

let url = window.location.href;
let room_id = parseInt(url.substring(url.search("rooms/") + 6));

if (url.indexOf("rooms/") != -1) {
  consumer.subscriptions.create(
    { channel: "RoomChannel", room_id: room_id },
    {
      connected() {
        // Called when the subscription is ready for use on the server
        console.log(123);
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        // Called when there's incoming data on the websocket for this channel
        const datacontent = `<li>${data.content}</li>`;
        document
          .querySelector("#message")
          .insertAdjacentHTML("beforeend", datacontent);
        console.log(data);
      },
    }
  );
}
