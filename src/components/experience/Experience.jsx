import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {IoMdSchool} from 'react-icons/io'
import {MdWorkOutline} from 'react-icons/md'

const Experience = () => {
  return(

    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2006 - 2010"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
        HWZ University of Applied Sciences in Business Administration Zurich
        </h3>
        <p> Bachelor of Business Administration</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022 - 2023"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Microsoft Certified:
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
         Architect Expert
        </h4>

        <p> Designing Microsoft Azure Infrastructure Solutions</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2020"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">
          IT Technician - Hermmerbach
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Basel, Switzerland
        </h4>
        <p>
          <li>1st and 2nd Level IT Support</li>
          <li>Rollout, Restaging and Window image installation</li>
          <li>On-premises day to day IT support1st</li>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2019 - Jan 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">
          Self Employed IT Services - Onadaf Basel
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Basel, Switzerland
        </h4>
        <p>
          <li>IT- Support Services</li>
          <li>VM deployment and management</li>
          <li>Allrounder IT Services: VPN, RDP, SMTP</li>
        </p>
      </VerticalTimelineElement>

      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2010 - Dec 2011"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">
          Account Payable Accountant - Clariant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Muttenz, Basel-Country, Switzerland
        </h4>
        <p>
        <li>Account management</li>
        <li>Travel expense and Tax return claim</li>
        <li>Invoice approval</li>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>

  ) 
}; 
export default Experience;