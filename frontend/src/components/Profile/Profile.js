import React, { Component } from "react";
import MainNavbar from "../Common/MainNavbar";
import ModalProfile from "./ModalProfile";
import ModalExperience from "./ModalExperience";
import ModalEducation from "./ModalEducation";
import { dummy } from "../../action/dummy";
import { connect } from "react-redux";
import "./prof.css";
import { getprofile } from "../../action/profile";
import jobsFormThird from "../Post Jobs/jobsFormThird";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      first_name: "",
      last_name: "",
      profileHeadline: "",
      profileEducation: "",
      Zipcode: null,
      profileLocation: "",
      profileIndustry: "",
      profileContact: "",
      profileSummary: "",
      countryName: "",
      experience: [],
      education: []
    };
  }
  componentDidMount() {
    console.log("Hello");
    this.props.getprofile({ id: this.props.match.params.id });
  }

  componentWillReceiveProps(newChangedProps) {
    if (newChangedProps.profile.profile.result) {
      console.log("Data received", newChangedProps);

      this.setState({
        data: newChangedProps.profile.profile.result,
        first_name: newChangedProps.profile.profile.result.first_name,
        last_name: newChangedProps.profile.profile.result.last_name,
        profileEducation:
          newChangedProps.profile.profile.result.profileEducation,
        profileHeadline: newChangedProps.profile.profile.result.profileHeadline,
        Zipcode: newChangedProps.profile.profile.result.Zipcode,
        profileLocation: newChangedProps.profile.profile.result.profileLocation,
        profileIndustry: newChangedProps.profile.profile.result.profileIndustry,
        profileContact: newChangedProps.profile.profile.result.profileContact,
        profileSummary: newChangedProps.profile.profile.result.profileSummary,
        countryName: newChangedProps.profile.profile.result.countryName,
        experience: newChangedProps.profile.profile.result.experience,
        education: newChangedProps.profile.profile.result.education
      });
    }
  }

  render() {
    console.log("Checking in reneder", this.state.first_name);
    console.log("Checking in reneder", this.state.last_name);
    console.log("Checking in reneder", this.state.profileEducation);
    console.log("Checking in reneder", this.state.Zipcode);
    console.log("Checking in reneder", this.state.profileLocation);
    console.log("Checking in reneder", this.state.profileContact);
    console.log("Checking in reneder", this.state.profileSummary);
    console.log("Checking in reneder", this.state.experience);
    console.log("Checking in reneder", this.state.education);

    // console.log("Checking in reneder",this.state.first_name);
    // console.log("Props",this.props.profile.profile.result.countryName)
    // if(this.state.data.length>0){
    //     const first_name=this.state.data.first_name
    // console.log("fisrt nam",first_name);
    // }

    let expDetails = !this.state.experience
      ? ""
      : this.state.experience.map((expdata, i) => {
          if (expdata.experienceTitle && expdata.experienceCompany) {
            return (
              <div class="card mb-3 border-0 ml-2">
                <div class="card-body">
                  <h3 class="card-title">{expdata.experienceTitle}</h3>
                  <h4 class="font-weight-light">
                    {" "}
                    {expdata.experienceCompany}
                  </h4>
                  <h4>
                    From:{expdata.ExpFromMonth}/{expdata.ExpFromYear} -{" "}
                    {expdata.ExpToMonth}/{expdata.ExpToYear}
                  </h4>
                </div>
                <hr />
              </div>
            );
          }
        });

    let eduDetails = !this.state.education
      ? ""
      : this.state.education.map((edudata, i) => {
          if (edudata.educationSchool && edudata.educationDegree) {
            return (
              <div class="card mb-3 border-0 ml-2">
                <div class="card-body">
                  <h3 class="card-title">{edudata.educationSchool}</h3>
                  <h4>{edudata.educationDegree} degree</h4>
                </div>
                <hr />
              </div>
            );
          }
        });

    return (
      <div>
        <MainNavbar />
        <br />
        <br />
        <div class="row">
          <div class="col">{/* Something */}</div>
          <div class="col-8 pt-6 pl-0">
            <div class="card mb-3">
              <div class="card-body">
                <div id="DIV_3" class="border" />{" "}
                <a href="" id="A_4">
                  <img
                    height="128"
                    width="128"
                    src="https://media.licdn.com/dms/image/C5603AQEqgYpgcdt-Sg/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=2-VVqwm5PuvK-aSIOIVhiPMp0ErVpUB0vKTPEAH-yTM"
                    id="IMG_55"
                  />
                </a>
                <div class="row">
                  <div class="col" />
                </div>
                <div class="card border-0">
                  <div class="row">
                    <div class="col">
                      <div class="card-body">
                        <p class="card-text">
                          <h1>
                            {this.state.first_name} {this.state.last_name}{" "}
                          </h1>

                          <h2 class="font-weight-light">
                            {this.state.profileHeadline}
                          </h2>
                          <h2>{this.state.profileLocation}</h2>
                        </p>
                      </div>
                    </div>
                    <div class="col">
                      <ModalProfile
                        class="float-right"
                        profileData={this.state.data}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 pt-3">
              <div class="card border-0">
                <h2 class="card-title pl-5 pb-3 border-bottom">Experience</h2>
                <div class="row">
                  <div class="col">
                    <div class="card-body">
                      <p class="card-text">
                        <h1>{expDetails}</h1>
                      </p>
                    </div>
                  </div>
                  <div class="col">
                    <ModalExperience />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 pt-3" width="150">
              <div class="card border-0">
                <h2 class="card-title pl-5 pb-3 border-bottom">Education</h2>
                <div class="row">
                  <div class="col">
                    <div class="card-body">
                      <p class="card-text">
                        <h1> {eduDetails}</h1>
                      </p>
                    </div>
                  </div>
                  <div class="col">
                    <ModalEducation />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col pt-5">{/* Nothing */}</div>

          <div class="col" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  { dummy, getprofile }
)(Profile);
