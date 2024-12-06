import React, { Component } from "react";
import GitHubButton from "react-github-btn";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small special-color-dark pt-4 ">
        <div className="flex-wrap" style={{ textAlign: "center" }}>
          <div className="m-2">
            <GitHubButton
              href="https://github.com/jhaayushofficial"
              data-show-count="true"
              aria-label="Follow @Ayush Jha on GitHub"
            >
              Follow @Ayush Jha
            </GitHubButton>
          </div>
          {/* <GitHubButton
            href="https://github.com/TamimEhsan/Pathfinder-2.0"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star TamimEhsan/Pathfinder-2.0 on GitHub"
          >
            Star
          </GitHubButton> */}
          &nbsp
          {/* <GitHubButton
            href="https://github.com/TamimEhsan/Pathfinder-2.0/fork"
            data-icon="octicon-repo-forked"
            data-show-count="true"
            aria-label="Fork TamimEhsan/Pathfinder-2.0 on GitHub"
          >
            Fork
          </GitHubButton> */}
          &nbsp
          {/* <img
            src="https://visitor-badge.laobi.icu/badge?page_id=TamimEhsan.AlgorithmVisualizer"
            alt="Hits"
          /> */}
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a
            href="https://github.com/jhaayushofficial"
            style={{ color: "#65b6f0" }}
          >
            {" "}
            Ayush Jha
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
