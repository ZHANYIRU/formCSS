import { useRef } from "react";
import "./work.scss";
function Work() {
  const form = useRef(null);
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
          <form id="form1">
            <fieldset>
              <legend>FORM</legend>
              <div className="content">
                <label htmlFor="">store</label>
                <select name="" id="" required>
                  <option value="">請選擇商店</option>
                  <option value="">1</option>
                </select>
              </div>
              <div className="content">
                <label htmlFor="">name</label>
                <input
                  type="text"
                  placeholder="請輸入姓名"
                  required
                  pattern="[a-z,A-Z,\u4E00-\u9FA5]"
                />
              </div>
              <div className="content">
                <label htmlFor="">phone</label>
                <input type="text" placeholder="請輸入電話" required />
              </div>
              <div className="content">
                <label htmlFor="">Amount of consumption</label>
                <input type="text" placeholder="請輸入" required />
              </div>
              <div className="content">
                <label htmlFor="">payment</label>
                <select name="" id="" required>
                  <option value="">請選擇付款方式</option>
                </select>
              </div>
            </fieldset>
            <button>submit</button>
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
