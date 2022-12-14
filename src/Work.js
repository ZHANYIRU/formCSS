import { useRef, useState } from "react";
import "./work.scss";
function Work() {
  //可控元件
  const [inputForm, setInputForm] = useState({
    name: "",
    phone: "",
    amount: "",
    store: "",
    pay: "",
  });
  //存放錯誤訊息
  const [errorMes, setErrorMes] = useState({
    name: "",
    phone: "",
    amount: "",
    store: "",
    pay: "",
  });
  //submit className切換
  const [submitClass, setSubmitClass] = useState({
    p: "",
    text: "submit",
    status: "default",
  });
  //點form移動的位置
  const form = useRef(null);
  //只能輸入中文英文
  const nameVerify = /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/;
  //只能輸入數字
  const num = /^[0-9]+$/;
  const phoneFormat = /^09[0-9]{8}$/;
  const post = (e) => {
    //輸入的時候清空error訊息
    setErrorMes({
      ...errorMes,
      [e.target.name]: "",
    });
    //輸入的時候先變回來
    setSubmitClass({
      ...submitClass,
      p: "",
      text: "submit",
      status: "default",
    });
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
  };
  const blur = (e) => {
    if (e.target.value === "") {
      setErrorMes({ ...errorMes, [e.target.name]: "*為必填項目" });
    }
  };
  const invalid = (e) => {
    e.preventDefault();
    setSubmitClass({
      ...submitClass,
      p: "This person does not exist",
      text: "failure",
      status: "default failure",
    });
    const { name, phone, amount } = inputForm;
    if (inputForm[e.target.name] === "" || inputForm[e.target.name] === 0) {
      setErrorMes({ ...errorMes, [e.target.name]: "*為必填項目" });
      return;
    } else {
      if (!nameVerify.test(name)) {
        setErrorMes({ ...errorMes, name: "只能輸入中、英文" });
      } else if (!num.test(phone)) {
        setErrorMes({ ...errorMes, phone: "只能輸入數字" });
      } else if (!phoneFormat.test(phone) || phone.length < 10) {
        setErrorMes({ ...errorMes, phone: "格式不正確，例：0987654321" });
      } else if (!num.test(amount)) {
        setErrorMes({ ...errorMes, amount: "只能輸入數字" });
      } else {
        setSubmitClass({
          ...submitClass,
          text: "success",
          status: "default success",
        });
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="ocean">
          {/* <div className="first"> */}
          <div className="firstText">
            <h1>There is no one</h1>
            <h2>who loves pain</h2>
          </div>
          <div
            className="firstBtn"
            onClick={() => {
              window.scrollTo({
                top: form.current.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            FORM
          </div>
          <div className="firstMain">
            <div className="sup">
              <div className="bubble" />
            </div>
            <div className="fireworks" />
            <h2>paragraph</h2>
            <p>1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2>paragraph</h2>
            <div>
              <p>
                1.Quisque sodales leo <span>vitae vulputate auctor.</span>
              </p>
              <p>
                2.Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra
                libero a pellentesque blandit.
              </p>
              <p>
                3.Cras tristique tellus id leo bibendum, eu dapibus nisl
                accumsan.
              </p>
              <p>
                4.Donec ultrices sapien{" "}
                <span>vitae leo venenatis ullamcorper.</span>
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="waves" />
        <div className="second" ref={form}>
          <form id="form1" onInvalid={invalid} onSubmit={submit}>
            <fieldset>
              <legend>FORM</legend>
              <div className="content">
                <label htmlFor="">store</label>
                <input
                  list="datalist"
                  required
                  name="store"
                  onChange={(e) => post(e)}
                  value={inputForm.store}
                  onKeyDown={(e) => {
                    const str = [
                      "s",
                      "t",
                      "o",
                      "r",
                      "e",
                      "1",
                      "2",
                      "3",
                      "Backspace",
                    ];
                    if (!str.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={blur}
                  style={{
                    border: errorMes.store !== "" && "3px solid #E06D6D",
                  }}
                />
                <datalist id="datalist">
                  <option value="">請選擇商店</option>
                  <option value="store1">store1</option>
                  <option value="store2">store2</option>
                  <option value="store3">store3</option>
                </datalist>
                <span>{errorMes.store}</span>
              </div>
              <div className="content">
                <label htmlFor="">name</label>
                <input
                  type="text"
                  placeholder="請輸入姓名"
                  required
                  name="name"
                  value={inputForm.name}
                  onChange={(e) => post(e)}
                  pattern={/^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/}
                  onBlur={blur}
                  style={{
                    border: errorMes.name !== "" && "3px solid #E06D6D",
                  }}
                />
                <span>{errorMes.name}</span>
              </div>
              <div className="content">
                <label htmlFor="">phone</label>
                <input
                  type="text"
                  inputmode="numeric"
                  placeholder="請輸入電話"
                  required
                  name="phone"
                  value={inputForm.phone ? inputForm.phone : ""}
                  maxLength={10}
                  onChange={(e) => post(e)}
                  onBlur={blur}
                  style={{
                    border: errorMes.phone !== "" && "3px solid #E06D6D",
                  }}
                />
                <span>{errorMes.phone}</span>
              </div>
              <div className="content">
                <label htmlFor="">Amount of consumption</label>
                <input
                  type="text"
                  inputmode="numeric"
                  placeholder="請輸入消費金額"
                  required
                  name="amount"
                  value={inputForm.amount}
                  onChange={(e) => post(e)}
                  onKeyDown={(e) => e.key === "-" && e.preventDefault()}
                  onBlur={blur}
                  style={{
                    border: errorMes.amount !== "" && "3px solid #E06D6D",
                  }}
                />
                <span>{errorMes.amount}</span>
              </div>
              <div className="content">
                <label htmlFor="">payment</label>
                <select
                  name="pay"
                  id=""
                  required
                  onChange={(e) => post(e)}
                  onBlur={blur}
                  style={{
                    border: errorMes.pay !== "" && "3px solid #E06D6D",
                  }}
                >
                  <option value="">請選擇付款方式</option>
                  <option value="digital payment">digital payment</option>
                  <option value="ATM">ATM</option>
                </select>
                <span>{errorMes.pay}</span>
              </div>
            </fieldset>
            <button className={submitClass.status}>{submitClass.text}</button>
            <p>
              {submitClass.p === "This person does not exist" && submitClass.p}
            </p>
          </form>
        </div>
        <div className="three">
          <div className="badgeWrap">
            <div className="badge">
              <h5>dehumidifier</h5>
              <div className="one">ONE</div>
              <div className="badgeImg">A</div>
            </div>
            <div className="badge">
              <h5>range hood</h5>
              <div className="one">ONE</div>
              <div className="badgeImg">B</div>
            </div>
            <div className="badge">
              <h5>vacuum cleaner</h5>
              <div className="one">ONE</div>
              <div className="badgeImg">C</div>
            </div>
            <div className="badge">
              <h5>toaster</h5>
              <div className="one">ONE</div>
              <div className="badgeImg">D</div>
            </div>
            <div className="badge">
              <h5> scale</h5>
              <div className="one">ONE</div>
              <div className="badgeImg">E</div>
            </div>
            <div className="badge">
              <h5>straightening iron</h5>
              <div className="one">ONE</div>
              <div className="badgeImg">F</div>
            </div>
            <div className="badge">
              <h5>vacuum cleaner</h5>
              <div className="one">FIVE</div>
              <div className="badgeImg">G</div>
            </div>
            <div className="badge">
              <h5>rice cooker</h5>
              <div className="one">TEN</div>
              <div className="badgeImg">H</div>
            </div>
            <span></span>
          </div>
        </div>
        <div className="four">
          <div className="fourText">
            <h5>13.32</h5>
            <p>
              who seeks after it and <br /> wants to have it
            </p>
          </div>
          <div className="lightHouse" />
        </div>
        <div className="fiveWrap">
          <div className="five">
            <p>
              Neque porro quisquam <br /> est qui dolorem!
            </p>
            <div className="market" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
