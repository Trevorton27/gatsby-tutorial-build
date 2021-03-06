import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Header from "../components/Header"
import { Form, Button } from "react-bootstrap"

const IndexPage = () => (
  <div>
    <Header />
    <PrimaryLayout column="col-10">
      <div class="container contact-form" id="contact">
        <div
          class="contact-image"
          style={{ textAlign: "center", marginTop: "5em", marginBottom: "3em" }}
        >
          <img
            src={require("../images/trevorMearnsMailIcon.png")}
            alt="rocket_contact"
          />
        </div>
        <form method="post" style={{ marginBottom: "3em" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "50px",
              marginBottom: "1.5em",
            }}
          >
            Contact Trevor
          </h2>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="txtMsg"
                  class="form-control"
                  placeholder="Your Message *"
                  // style={width: '100%'; height: '150px';}
                ></textarea>
              </div>
            </div>
          </div>
          <div class="form-group" style={{ textAlign: "center" }}>
            <input
              style={{
                marginTop: "1.5em",
                marginBottom: "2.5em",
                backgroundColor: "#343a40",
                color: "#fff",
                padding: ".4em 1em .4em 1em",
              }}
              type="submit"
              name="btnSubmit"
              class="btnContact"
              value="Send It"
            />
          </div>
        </form>
      </div>
    </PrimaryLayout>
  </div>
)

export default IndexPage
