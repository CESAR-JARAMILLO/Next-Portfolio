import React, { useState } from "react";
import Image from "next/image";
import classes from "./SkillsSection.module.css";
import { usePostHogTracking } from "@/hooks/usePostHogTracking";

const skills = [
  { name: "Klaviyo", icon: "/klaviyo.svg", category: "email" },
  { name: "Mail Chimp", icon: "/mailchimp-white.svg", category: "email" },
  { name: "Litmus", icon: "/litmus.svg", category: "email" },
  { name: "Shopify", icon: "/shopify.svg", category: "development" },
  { name: "WordPress", icon: "/wordpress.svg", category: "development" },
  { name: "HTML", icon: "/html.svg", category: "development" },
  { name: "CSS", icon: "/css.svg", category: "development" },
  { name: "Sass", icon: "/sass.svg", category: "development" },
  { name: "JavaScript", icon: "/javascript.svg", category: "development" },
  { name: "Python", icon: "/python.svg", category: "development" },
  { name: "Liquid", icon: "/liquid.svg", category: "development" },
  { name: "Git", icon: "/git.svg", category: "development" },
  { name: "Figma", icon: "/figma.svg", category: "design" },
  { name: "Canva", icon: "/canva.svg", category: "design" },
  { name: "Photoshop", icon: "/photoshop.svg", category: "design" },
  { name: "Illustrator", icon: "/illustrator.svg", category: "design" },
  { name: "ChatGPT", icon: "/chatgpt.svg", category: "automation" },
  { name: "Zapier", icon: "/zapier.svg", category: "automation" },
  {
    name: "Google Analytics",
    icon: "/google-analytics.svg",
    category: "automation",
  },
];

const categories = [
  { key: "design", label: "Design" },
  { key: "development", label: "Development" },
  { key: "email", label: "Email & Automation" },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("development");
  const { trackButtonClick } = usePostHogTracking();

  // Map automation skills into the email tab for now
  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "email") {
      return skill.category === "email" || skill.category === "automation";
    }
    return skill.category === activeTab;
  });

  const handleTabClick = (tabKey: string, tabLabel: string) => {
    setActiveTab(tabKey);
    trackButtonClick("skills_tab_clicked", {
      tab_name: tabLabel,
      tab_key: tabKey,
      section: "skills",
    });
  };

  const handleSkillCardClick = (skillName: string, skillCategory: string) => {
    trackButtonClick("skill_card_clicked", {
      skill_name: skillName,
      skill_category: skillCategory,
      active_tab: activeTab,
      section: "skills",
    });
  };

  return (
    <section className={classes.skillsSection} id="skills">
      <h2 className={classes.sectionTitle}>
        My <span className={classes.gradientHighlight}>Toolkit</span>
      </h2>
      <div className={classes.tabsContainer}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`${classes.tabButton} ${
              activeTab === cat.key ? classes.active : ""
            }`}
            onClick={() => handleTabClick(cat.key, cat.label)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className={classes.cardsGrid}>
        {filteredSkills.map((skill) => (
          <div
            className={classes.skillCard}
            key={skill.name}
            onClick={() => handleSkillCardClick(skill.name, skill.category)}
          >
            <div className={classes.iconWrapper}>
              <Image
                src={skill.icon}
                alt={skill.name}
                width={72}
                height={72}
                className={classes.skillIcon}
              />
            </div>
            <div className={classes.skillName}>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
