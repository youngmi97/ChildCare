import React from "react";
import emailjs from "emailjs-com";

export default function EmailForm(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45vu42j",
        "template_oo3e9hu",
        e.target,
        "user_EHf14pUTxFJOjeSd1WDuC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div
      style={{
        marginLeft: "25vw",
        marginTop: "20vh",
        width: "50vw",
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form style={{ width: "100%", height: "100%" }} onSubmit={sendEmail}>
        <div style={{ margin: "1vh 0" }}>
          <input
            type="email"
            name="toEmail"
            value={props.email}
            style={{ width: "40vw", height: "5vh" }}
          />
        </div>
        <div style={{ margin: "1vh 0" }}>
          <input
            type="text"
            placeholder="제목"
            name="subject"
            style={{ width: "40vw", height: "5vh" }}
          />
        </div>
        <div style={{ margin: "1vh 0" }}>
          <input
            placeholder="담당자명"
            type="text"
            name="name"
            style={{ width: "40vw", height: "5vh" }}
          />
        </div>

        <div style={{ margin: "1vh 0" }}>
          <textarea
            name="message"
            placeholder="내용"
            style={{ width: "40vw" }}
            rows={8}
          />
        </div>
        <div style={{ margin: "1vh 0" }}>
          <input
            type="submit"
            value="Send"
            style={{ width: "10vw", height: "5vh" }}
          />
        </div>
      </form>
    </div>
  );
}
