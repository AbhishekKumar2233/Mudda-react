import React from "react";
import Post from "./Post";
import "../styles.css";
import Profile from "./Profile";
import Follow_user from "./Follow_user";
import Group from "./Group";
import Issue from "./Issue";
import Issue_data from "../Issue_data";
import post from "../post";
import Tag from "./Tag";
import tagData from "../tagData";

export default function Main() {
  return (
    <div className="main">
      <div className="main_layout">
        <div className="layout_sidebar">
          <Profile />
          <Follow_user />

          <div className="tags_div">
            <h4>Popular tags</h4>
            <hr />
            <Tag />
            {tagData.map((tags) => {
              return <Tag Key={tags.id} name={tags.name} />;
            })}
            <hr />
            <a id="see-all" href="/">
              See All
            </a>
          </div>
        </div>

        <div className="layout_center">
          <div className="main_search">
            <div id="search-box">
              <a href="/">
                <img
                  alt=""
                  src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"
                />
              </a>
              <button id="trigger">
                <input placeholder="Write Something.." />
              </button>
            </div>
            <div id="share-box">
              <button>
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/image.png"
                  alt=""
                />
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M 3 5 C 1.9 5 1 5.9 1 7 L 1 17 C 1 18.1 1.9 19 3 19 L 16 19 C 17.1 19 18 18.1 18 17 L 18 14.080078 L 21.400391 16.800781 C 21.600391 16.900781 21.8 17 22 17 C 22.1 17 22.300391 17.000391 22.400391 16.900391 C 22.800391 16.700391 23 16.4 23 16 L 23 8 C 23 7.6 22.8 7.2996094 22.5 7.0996094 C 22.1 6.8996094 21.700391 6.9992187 21.400391 7.1992188 L 18 9.9199219 L 18 7 C 18 5.9 17.1 5 16 5 L 3 5 z"></path>
                </svg>
              </button>
              <button>
                <img
                  src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-graph-user-interface-kmg-design-glyph-kmg-design.png"
                  alt=""
                />
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g>
                      <path
                        d="M154.8,121.475c-1.43333,7.525 -7.525,13.25833 -15.05,14.33333c-11.825,1.79167 -31.53333,3.94167 -53.75,3.94167c-21.85833,0 -41.56667,-2.15 -53.75,-3.94167c-7.525,-1.075 -13.61667,-6.80833 -15.05,-14.33333c-1.43333,-8.24167 -2.86667,-20.425 -2.86667,-35.475c0,-15.05 1.43333,-27.23333 2.86667,-35.475c1.43333,-7.525 7.525,-13.25833 15.05,-14.33333c11.825,-1.79167 31.53333,-3.94167 53.75,-3.94167c22.21667,0 41.56667,2.15 53.75,3.94167c7.525,1.075 13.61667,6.80833 15.05,14.33333c1.43333,8.24167 3.225,20.425 3.225,35.475c-0.35833,15.05 -1.79167,27.23333 -3.225,35.475z"
                        fill="#f4240d"
                      ></path>
                      <path
                        d="M71.66667,111.08333v-50.16667l43,25.08333z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <button id="share-box-left-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="#1d488c"></path>
                    <g fill="#ffffff">
                      <path d="M149.06667,17.2c-0.55025,0.00377 -1.09709,0.08674 -1.6237,0.24635c-0.15501,0.04207 -0.30818,0.09064 -0.45911,0.14557l-126.05495,40.08854v0.02239c-2.23962,0.83573 -3.72568,2.97333 -3.72891,5.3638c0.00425,2.00222 1.05271,3.85719 2.76589,4.89349l38.30807,30.39114l75.73151,-60.35677l-60.35677,75.73151l30.36875,38.28567c1.0349,1.7286 2.90117,2.78714 4.91589,2.78828c2.39047,-0.00322 4.52807,-1.48928 5.3638,-3.72891h0.02239l40.12214,-126.16692c0.041,-0.11449 0.07834,-0.23027 0.11198,-0.34714c0.15961,-0.52661 0.24258,-1.07345 0.24636,-1.6237c0,-3.16643 -2.5669,-5.73333 -5.73333,-5.73333z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="main_buttons">
            <button>Problems</button>
            <button>Issues</button>
            <button>Facts</button>
            <button>Work</button>
          </div>
          {post.map((post) => {
            return (
              <Post
                Key={post.id}
                username={post.username}
                user_img={post.user_img}
                type={post.type}
                location={post.location}
                departmant={post.departmant}
                post={post.post}
                post_img={post.post_img}
                like={post.like}
                dislike={post.dislike}
                camment={post.camment}
                time={post.time}
              />
            );
          })}
        </div>
        <div className="layout_aside">
          <div className="group">
            <div className="group_header">
              <h4> MY GROUP</h4>
              <a href="/">+Add New</a>
            </div>
            <Group />
            <Group />
            <Group />
            <Group />
            <hr />
            <a id="see-all" href="/">
              See All
            </a>
          </div>
          <div className="trending_issue">
            <h4>Trending issue</h4>

            <hr />
            {Issue_data.map((issue) => {
              return (
                <Issue
                  Key={issue.id}
                  id={issue.id}
                  heading={issue.heading}
                  type={issue.type}
                  location={issue.location}
                  comments={issue.camments}
                />
              );
            })}

            <a id="see-all" href="/">
              See All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
