import { avatarBlur } from "@/constants/constants";
import styles from "@/styles/profile.module.css";
import { useMediaQuery } from "@/utilities/mediaQuery";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Button from "../core/button";
import Title from "../core/title";
import data from "@/config/data.json";

export default function Profile() {
  const profileData = data.profile;
  const isSmallScreen = useMediaQuery(1080);
  return (
    <div className="containerMain">
      <Title title="Profile" />
      <Row>
        <Col md={6}>
          <div className={styles.profileImage}>
            <Image
              src={
                "/assets/profile/" + profileData.profilePictureFileName.trim()
              }
              alt={profileData.profilePictureAlt}
              width={0}
              height={0}
              placeholder="blur"
              priority={false}
              loading="lazy"
              blurDataURL={avatarBlur}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            ></Image>
          </div>
        </Col>
        <Col md={6} className={styles.profileInfo}>
          <div className={!isSmallScreen ? "" : styles.profileSmallScreen}>
            <h2 className={styles.profileName}>
              I am <span>{profileData.name}</span>
            </h2>
            <p>{profileData.bio}</p>
            <ul>
              {profileData.details.basedIn && (
                <li>
                  <b>Based In</b> {profileData.details.basedIn}
                </li>
              )}
              {profileData.details.experienceStartDate && (
                <li>
                  <b>Demonstrated Expertise</b>
                  {(
                    (new Date().getTime() -
                      new Date(
                        profileData.details.experienceStartDate
                      ).getTime()) /
                    (1000 * 60 * 60 * 24 * 365)
                  ).toPrecision(2) + " "}
                  Years
                </li>
              )}
              {profileData.details.currentRole && !isSmallScreen && (
                <li>
                  <b>Current Role</b>
                  {profileData.details.currentRole}
                </li>
              )}
              {profileData.details.currentRoleShort && isSmallScreen && (
                <li>
                  <b>Current Role</b>
                  {profileData.details.currentRoleShort}
                </li>
              )}
              {profileData.details.currentCompany && !isSmallScreen && (
                <li>
                  <b>Current Company</b> {profileData.details.currentCompany}
                </li>
              )}
              {profileData.details.currentCompanyShort && isSmallScreen && (
                <li>
                  <b>Current Company</b>{" "}
                  {profileData.details.currentCompanyShort}
                </li>
              )}
              {profileData.details.currentEducation && !isSmallScreen && (
                <li>
                  <b>Current Education</b>{" "}
                  {profileData.details.currentEducation}
                </li>
              )}
              {profileData.details.currentEducationShort && isSmallScreen && (
                <li>
                  <b>Current Education</b>{" "}
                  {profileData.details.currentEducationShort}
                </li>
              )}
              {profileData.details.educationGraduationDate &&
                !isSmallScreen && (
                  <li>
                    <b>Graduation Date</b>{" "}
                    {profileData.details.educationGraduationDate}
                  </li>
                )}
              {profileData.details.educationGraduationDateShort &&
                isSmallScreen && (
                  <li>
                    <b>Graduation Date</b>{" "}
                    {profileData.details.educationGraduationDateShort}
                  </li>
                )}
              {profileData.details.openForWork && (
                <li>
                  <b>Open for Work</b> {profileData.details.openForWork}
                </li>
              )}
              {profileData.details.coreCompetencies && !isSmallScreen && (
                <li>
                  <b>Core Competencies</b>{" "}
                  {profileData.details.coreCompetencies}
                </li>
              )}
              {profileData.details.coreCompetenciesShort && isSmallScreen && (
                <li>
                  <b>Core Competencies</b>{" "}
                  {profileData.details.coreCompetenciesShort}
                </li>
              )}
              {profileData.details.interests && !isSmallScreen && (
                <li>
                  <b>Interests</b> {profileData.details.interests}
                </li>
              )}
              {profileData.details.interestsShort && isSmallScreen && (
                <li>
                  <b>Interests</b> {profileData.details.interestsShort}
                </li>
              )}
            </ul>
            {profileData.resume && (
              <Button
                text="See Resume"
                onClick={() =>
                  window.open("/assets/profile/" + profileData.resume)
                }
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
