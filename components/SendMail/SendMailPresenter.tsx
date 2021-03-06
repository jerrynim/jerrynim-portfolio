import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("../static/nes.jpg");
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 30px;
  flex-direction: column;
  left: 10%;
  display: flex;
  top: 0;
  justify-content: center;
`;

const Info = styled.div`
  @font-face {
    font-family: "Handon3gyeopsal600g";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/Handon3gyeopsal600g.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-size: 18px;
  font-family: "Handon3gyeopsal600g";
`;
interface Mail {
  nickname: string;
  message: string;
}
interface IProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  SendMail: () => void;
  mail: Mail;
  Thanks: string;
}
const SendMailPresenter: React.FC<IProps> = ({
  onInputChange,
  onMessageChange,
  SendMail,
  mail: { nickname, message },
  Thanks
}) => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Background />
      <Container>
        <Wrapper>
          <h2>SendMail</h2>
          <section className={"nes-container"} style={{ marginBottom: "20px" }}>
            <Info>
              여기까지 봐주셔서 감사합니다. 부족한 점이 있거나 궁금하신게
              있으시다면 메일을 보내주시기 바랍니다. <br />
              받은메세지를 토대로 더욱 발전 하도록 하겠습니다. <br />
              감사합니다.
            </Info>
          </section>
          <section className={"nes-container with-title"}>
            <h3 className={"title"}>SendMail</h3>
            <label>Nickname</label>
            <input
              value={nickname}
              type={"text"}
              className={"nes-input"}
              onChange={onInputChange}
            />
            <label style={{ marginTop: "20px" }}>Message</label>
            <input
              value={message}
              className={"nes-input"}
              style={{ height: "250px" }}
              onChange={onMessageChange}
            />
            <div
              style={{
                textAlign: "right",
                marginTop: "20px",
                fontWeight: 900
              }}
            >
              {Thanks}
              <button
                className={"nes-btn is-primary"}
                onClick={SendMail}
                style={{ marginLeft: "20px" }}
              >
                Submit
              </button>
            </div>
          </section>
        </Wrapper>
        <Bottom>
          <i className={"nes-ash"} />
          <i className={"nes-pokeball"} /> <i className={"nes-bulbasaur"} />
        </Bottom>
      </Container>
    </div>
  );
};
export default SendMailPresenter;
