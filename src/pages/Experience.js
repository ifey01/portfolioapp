import React from 'react'
import{VerticalTimeline, 
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
   return (
     <div className="Experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2022-2023"
        iconStyle={{ background: "#3e4974", color: "#fff"}}
        icon={<SchoolIcon/>}
        
        >
          <h3 className="vertical-timeline-element-title">
            Robertson College, Winnipeg, Manitoba
          </h3>

          <p> College Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2019 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Production Worker - Maple Leaf Foods
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Winnipg, MB
          </h4>
          <p>Working with the lead hand to make sure all sanitation procedures are followed.</p>
          <p>Inspect cleaned equipment before it can be used for production.</p>
          <p>Move clean racks with jigger from the washing machine to the store room for production use.</p>
          <p>Load racks into the automatic washing machine for proper cleaning.</p>
          <p>Record production data, such as weight and amount of product processed, type of product, and time and temperature of processing..</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Sept 2022 - Jan 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Develoer- Robertson College Workforce
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>Creating a dynamic web project in java with the functionality of registering into a website.</p>
          <p>Create a database user registration table and store all the user registration details in this table.</p>
          <p>Select programming languages, design tools, or applications.</p>
          <p>create a portfolio website using React app and deployed it to GitHub.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience