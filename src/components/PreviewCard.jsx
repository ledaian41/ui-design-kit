import React from "react";
import generateVariableObject from "../utils/generateVariableObject";
import Button from "./Button.jsx";
import styles from "./PreviewCard.module.css";

const mockup = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

const PreviewCard = ({ palette, textColor }) => {
  return (
    <div className={styles.previewCard} style={generateVariableObject(palette)}>
      <div className="card-header">
        <h3 className="card-title">Notifications</h3>
        <p className="card-description">You have 3 unread messages.</p>
      </div>
      <div className="card-body">
        {mockup.map((item, index) => (
          <div key={index} className="notification">
            <span className="notification-dot" />
            <div className="notification-content">
              <p className="notification-title">{item.title}</p>
              <p className="notification-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer">
        <Button className="w-full" style={{ color: textColor }}>
          Mark all as read
        </Button>
        <Button className="w-full secondary" style={{ color: textColor }}>
          Mark all as read
        </Button>
      </div>
    </div>
  );
};

export default PreviewCard;
